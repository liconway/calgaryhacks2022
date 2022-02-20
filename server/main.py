import os
import json
from dotenv import load_dotenv
# Imports the Google Cloud client library
from google.cloud import language_v1
from bson.objectid import ObjectId
import random
import requests
import secrets
from datetime import datetime
from flask import Flask, request, session
from flask_cors import CORS
from functools import wraps
from pymongo import MongoClient

# Load configuration from environment
load_dotenv()
config = os.environ

# Instantiates a client
lang_client = language_v1.LanguageServiceClient()
features = {
   'extract_syntax': False,
   'classify_text': False,
   'extract_entities': True,
   'extract_document_sentiment': True,
   'extract_entity_sentiment': True
}

DB_NAME = "CalgaryHacks2022"
JOURNAL_ENTRY_COLLECTION = "JournalEntries"
GOOGLE_ID_TOKEN_INFO_URL = "https://www.googleapis.com/oauth2/v3/tokeninfo"
user_id_str = ""

client = MongoClient(config['MONGO_ADMIN'])

db = client[DB_NAME]

with open('prompt_list.json') as json_file:
   prompt_list = json.load(json_file)

generic_prompt_list = prompt_list['generic_prompt_list']

app = Flask(__name__)
app.config['CORS_HEADERS'] = 'Content-Type'
app.config['SECRET_KEY'] = secrets.token_urlsafe(16)
if 'FLASK_SECRET_KEY' in config:
   app.config['SECRET_KEY'] = config['FLASK_SECRET_KEY']
app.config['SESSION_COOKIE_SAMESITE'] = 'None'
app.config['SESSION_COOKIE_SECURE'] = True

cors = CORS(app, supports_credentials=True)

PORT = 1234
if 'PORT' in config:
   PORT = config['PORT']

def authenticated(f):
   @wraps(f)
   def decorated(*args, **kwargs):
      if 'user_id' not in session:
         return {'error': 'Not logged in'}, 401
      return f(*args, **kwargs)
   return decorated

@app.route('/auth', methods=['GET'])
@authenticated
def auth():
   return {'success': True}, 200

@app.route("/auth/login", methods=['POST'])
def auth():
   response = requests.get(
      GOOGLE_ID_TOKEN_INFO_URL,
      params={'id_token': request.json['token']}
   )

   if not response.ok:
      return response.json(), response.status_code

   audience = response.json()['aud']
   if audience != config['GOOGLE_CLIENT_ID']:
      return {'error': 'Invalid audience'}, 401

   session['user_id'] = response.json()['sub']
   session['user_name'] = response.json()['given_name']

   return "", 200


@app.route("/auth/logout", methods=['POST'])
@authenticated
def logout():
   session.clear()
   return "", 200


@app.route("/health", methods=['GET'])
def health_check():
   return ("it worky!\n", 200)


@app.route("/journals", methods=['GET'])
@authenticated
def get_journals():
   output_list = {}
   output_list['journals'] = []
   for journal in db[session['user_id']].find():
      output = {}
      output['title'] = journal['title']
      output['time_created'] = journal['time_created']
      output['_id'] = str(journal['_id'])
      output_list['journals'].append(output)

   return (output_list, 200)


@app.route("/prompt", methods=['GET'])
@authenticated
def get_prompt():
   prompt = request.args.get('prompt', default="", type=str)

   output = {}
   if prompt == "generic":
      output["text"] = handle_generic_prompt()
   elif prompt == "entity":
      output = handle_entity_prompt()
   elif prompt == "sentence":
      output = handle_sentence_prompt()
   else:
      return ("it brokey", 400)
   
   return (output, 200)


@app.route("/analysis", methods=['GET'])
@authenticated
def get_analysis():
   journal_id = request.args.get('id', default="", type=str)
   journal = db[session['user_id']].find({
      "_id": ObjectId(journal_id)
   })
   journal = journal[0]
   journal['_id'] = journal_id

   return ("lol", 200)


@app.route("/journal", methods=['GET'])
@authenticated
def get_journal():
   journal_id = request.args.get('id', default="", type=str)
   journal = db[session['user_id']].find({
      "_id": ObjectId(journal_id)
   })
   journal = journal[0]
   journal['_id'] = journal_id

   return (journal, 200)


@app.route("/journal", methods=['POST'])
@authenticated
def lang_note():
   json_content = request.get_json()
   document = language_v1.Document(
      content=json_content['text'],
      type_=language_v1.Document.Type.PLAIN_TEXT
   )

   doc_analyzed = lang_client.annotate_text(document=document, features=features)

   db_doc = {}
   db_doc['title'] = json_content['title']
   db_doc['text'] = json_content['text']
   db_doc['time_created'] = int(datetime.utcnow().timestamp())
   db_doc['sentiment']  = handle_sentiment(doc_analyzed.document_sentiment)
   db_doc['entities']   = handle_entities(doc_analyzed.entities)
   db_doc['categories'] = handle_categories(doc_analyzed.categories)
   db_doc['sentences']  = handle_sentences(doc_analyzed.sentences)
   db_doc['language']   = doc_analyzed.language

   mongo_id = db[session['user_id']].insert_one(db_doc)
   return (str(mongo_id.inserted_id), 200)


def handle_sentiment(sentiment):
   output = {}
   output['score'] = sentiment.score
   output['magnitude'] = sentiment.magnitude
   return output


def handle_entities(entities):
   entity_list = list(filter(lambda e: e.salience > 0.01, entities))
   entity_list.sort(key=lambda c: c.salience, reverse=True)
   entity_list = entity_list[0:5]

   output = []
   for entity in entity_list:
      output_i = {}
      output_i['name'] = entity.name
      output_i['type'] = entity.type_.name
      output_i['salience'] = entity.salience
      output_i['sentiment'] = {}
      output_i['sentiment']['score'] = entity.sentiment.score
      output_i['sentiment']['magnitude'] = entity.sentiment.magnitude
      output.append(output_i)

   return output


def handle_categories(categories):
   output = []
   for category in categories:
      output.append(category)

   return output


def handle_sentences(sentences):
   pos_sentence_list = list(filter(lambda e: e.sentiment.score > 0.01, sentences))
   pos_sentence_list.sort(key=lambda c: c.sentiment.score, reverse=True)
   pos_sentence_list = pos_sentence_list[0:5]

   neg_sentence_list = list(filter(lambda e: e.sentiment.score < -0.01, sentences))
   neg_sentence_list.sort(key=lambda c: c.sentiment.score, reverse=False)
   neg_sentence_list = neg_sentence_list[0:5]

   pos_output = []
   for sentence in pos_sentence_list:
      output_i = {}
      output_i['text'] = sentence.text.content
      output_i['sentiment'] = {}
      output_i['sentiment']['score'] = sentence.sentiment.score
      output_i['sentiment']['magnitude'] = sentence.sentiment.magnitude
      # print(sentence)
      pos_output.append(output_i)

   neg_output = []
   for sentence in neg_sentence_list:
      output_i = {}
      output_i['text'] = sentence.text.content
      output_i['sentiment'] = {}
      output_i['sentiment']['score'] = sentence.sentiment.score
      output_i['sentiment']['magnitude'] = sentence.sentiment.magnitude
      # print(sentence)
      neg_output.append(output_i)

   output = {
      "positive": pos_output,
      "negative": neg_output
   }
   return output

def handle_generic_prompt():
   return generic_prompt_list[random.randrange(0, len(generic_prompt_list))]


def handle_entity_prompt():
   entity_list = []
   for journal in db[session['user_id']].find():

      for entity in journal['entities']:
         entity_list.append(entity)

   entity = entity_list[random.randrange(0, len(entity_list))]
   entity['pre_text'] = prompt_list['entity_pretext'][random.randrange(0, len(prompt_list['entity_pretext']))]
   return entity


def handle_sentence_prompt():
   sentence_list = []
   for journal in db[session['user_id']].find():

      for positive_sentence in journal['sentences']['positive']:
         sentence_list.append(positive_sentence)

      for negative_sentence in journal['sentences']['negative']:
         sentence_list.append(negative_sentence)

   sentence = sentence_list[random.randrange(0, len(sentence_list))]

   prompt_str = "neutral_sentence_pretext"
   if (sentence['sentiment']['score'] > 0.3):
      prompt_str = "positive_sentence_pretext"
   elif (sentence['sentiment']['score'] < -0.3):
      prompt_str = "negative_sentence_pretext"

   sentence['pre_text'] = prompt_list[prompt_str][random.randrange(0, len(prompt_list[prompt_str]))]
   return sentence


if __name__ == "__main__":
   app.run(port=PORT)

from flask import Flask, request
from flask_cors import CORS
from pymongo import MongoClient
import os
import pymongo
# import json
from dotenv import load_dotenv
# Imports the Google Cloud client library
from google.cloud import language_v1
from bson.objectid import ObjectId

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

client = MongoClient(config['MONGO_ADMIN'])
print(client.server_info())

db = client[DB_NAME]
journal_entry_collection = db[JOURNAL_ENTRY_COLLECTION]

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

PORT = 1234
if 'PORT' in config:
   PORT = config['PORT']


@app.route("/health", methods=['GET'])
def health_check():
   return ("it worky!\n", 200)


@app.route("/journals", methods=['GET'])
def get_journal():
   journal_id = request.args.get('id', default="", type=str)
   print(journal_id)
   print(ObjectId(journal_id))
   journal = journal_entry_collection.find({
      "_id": ObjectId(journal_id)
   })
   journal = journal[0]
   journal['_id'] = journal_id

   return (journal, 200)

@app.route("/journals", methods=['POST'])
def lang_note():
   json_content = request.get_json()
   print(json_content)
   document = language_v1.Document(
      content=json_content['text'],
      type_=language_v1.Document.Type.PLAIN_TEXT
   )

   doc_analyzed = lang_client.annotate_text(document=document, features=features)

   db_doc = {}
   db_doc['user'] = json_content['userid']
   db_doc['title'] = json_content['title']
   db_doc['text'] = json_content['text']
   db_doc['sentiment']  = handle_sentiment(doc_analyzed.document_sentiment)
   db_doc['entities']   = handle_entities(doc_analyzed.entities)
   db_doc['categories'] = handle_categories(doc_analyzed.categories)
   db_doc['sentences']  = handle_sentences(doc_analyzed.sentences)
   db_doc['language']  = doc_analyzed.language

   mongo_id = journal_entry_collection.insert_one(db_doc)
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
      output_i['type'] = entity.type_
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
      pos_output.append(output_i)

   neg_output = []
   for sentence in neg_sentence_list:
      output_i = {}
      output_i['text'] = sentence.text.content
      output_i['sentiment'] = {}
      output_i['sentiment']['score'] = sentence.sentiment.score
      output_i['sentiment']['magnitude'] = sentence.sentiment.magnitude
      neg_output.append(output_i)

   output = {
      "positive": pos_output,
      "negative": neg_output
   }

   return output

if __name__ == "__main__":
   app.run(port=PORT)

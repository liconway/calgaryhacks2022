from flask import Flask, request
from flask_cors import CORS
from pymongo import MongoClient
import os
# import json
from dotenv import load_dotenv
# Imports the Google Cloud client library
from google.cloud import language_v1

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
   return "it worky!\n"


@app.route("/dewit", methods=['GET'])
def get_data():
   content = request.args.to_dict()
   print(content)
   data = journal_entry_collection.find(content)
   return f"{data[0]}\n"


@app.route("/dewit", methods=['POST'])
def post_data():
   content = request.get_json()
   print(content)
   journal_entry_collection.insert_one(content)
   return f"Successfully inserted data :)\n"


@app.route("/note", methods=['POST'])
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

   journal_entry_collection.insert_one(db_doc)

   return f"Document successfully added!\n"


def handle_sentiment(sentiment):
   output = {}
   output['score'] = sentiment.score
   output['magnitude'] = sentiment.magnitude
   return output


def handle_entities(entities):
   entity_list = list(filter(lambda e: e.salience > 0.01, entities))
   entity_list.sort(key=lambda c: c.salience, reverse=True)
   entity_list = entity_list[0:3]

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
   output = []
   for sentence in sentences:
      output_i = {}
      output_i['text'] = sentence.text.content
      output_i['sentiment'] = {}
      output_i['sentiment']['score'] = sentence.sentiment.score
      output_i['sentiment']['magnitude'] = sentence.sentiment.magnitude
      output.append(output_i)

   return output

if __name__ == "__main__":
   app.run(port=PORT)

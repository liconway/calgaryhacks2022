from flask import Flask, request
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
PORT = 1234
if 'PORT' in config:
   PORT = config['PORT']


@app.route("/health", methods=['GET'])
def health_check():
   return "it worky!\n"


@app.route("/dewit", methods=['GET'])
def get_data():
   content = request.get_json()
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

   analyzation = lang_client.annotate_text(document=document, features=features)

   db_doc = {}
   db_doc['user'] = "userid123"
   db_doc['text'] = json_content['text']
   db_doc['sentiment']  = handle_sentiment(analyzation.document_sentiment)
   # db_doc['entities']   = handle_entities(analyzation.entities)
   # db_doc['categories'] = handle_categories(analyzation.categories)
   # db_doc['sentences']  = handle_sentences(analyzation.sentences)
   db_doc['language']  = analyzation.language

   journal_entry_collection.insert_one(db_doc)

   print(db_doc)

   return f"we dit it boooyysss!!!\n"


def handle_sentiment(sentiment):
   output = {}
   output['score'] = sentiment.score
   output['magnitude'] = sentiment.magnitude
   return output


def handle_entities(entities):
   entity_list = list(filter(lambda e: e.salience > 0.01, entities))
   entity_list.sort(key=lambda c: c.salience, reverse=True)
   entity_list = entity_list[0:3]

   for entity in entity_list:
      print(entity)
      pass
   return entity_list


def handle_categories(categories):
   return categories


def handle_sentences(sentences):
   return sentences

if __name__ == "__main__":
   app.run(port=PORT)

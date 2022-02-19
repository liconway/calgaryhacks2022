from encodings import utf_8
from sre_parse import CATEGORIES
from unicodedata import category
from flask import Flask, request
from pymongo import MongoClient
import os
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

client = MongoClient(config['MONGO_ADMIN'])
print(client.server_info())

db = client["test_db"]
test_collection = db["test_collection"]

app = Flask(__name__)
PORT = 1234
if 'PORT' in config:
   PORT = config['PORT']


@app.route("/health", methods=['GET'])
def health_check():
   return "it worky!\n"


@app.route("/user/data", methods=['GET'])
def get_data():
   content = request.get_json()
   print(content)
   data = test_collection.find(content)
   return f"{data[0]}\n"


@app.route("/dewit", methods=['POST'])
def post_data():
   content = request.get_json()
   print(content)
   test_collection.insert_one(content)
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

   handle_sentiment(analyzation.document_sentiment)
   handle_entities(analyzation.entities)
   handle_categories(analyzation.categories)
   handle_sentences(analyzation.sentences)
   print(f"Language: {analyzation.language}")

   return f"we dit it boooyysss!!!\n"


def handle_sentiment(sentiment):
   print(f"Score: {sentiment.score}")
   print(f"magnitude: {sentiment.magnitude}")


def handle_entities(entities):
   entity_list = list(filter(lambda e: e.salience > 0.01, entities))
   entity_list.sort(key=lambda c: c.salience, reverse=True)
   entity_list = entity_list[0:3]

   print("ENTITIES")
   for entity in entity_list: 
      print("ENTITY:")
      print(entity)


def handle_categories(categories):
   print("CATEGORIES")
   for category in categories:
      print("CATEGORY")
      print(category)

def handle_sentences(sentences):
   print("SENTENCES")
   for sentence in sentences:
      print("SENTENCE:")
      print(sentence)

if __name__ == "__main__":
   app.run(port=PORT)

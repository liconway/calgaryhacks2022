from flask import Flask, request
from pymongo import MongoClient
import os
from dotenv import dotenv_values

config = {
    **dotenv_values(".env"),
    **os.environ,
}

client = MongoClient(config['MONGO_ADMIN'])
print(client.server_info())

db = client["test_db"]
test_collection = db["test_collection"]

app = Flask(__name__)

PORT = 1234
if 'PORT' in os.environ:
   PORT = os.environ['PORT']


@app.route("/health", methods=['GET'])
def health_check():
   return "it worky!\n"


@app.route("/dewit", methods=['GET'])
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


if __name__ == "__main__":
   app.run(port=PORT)

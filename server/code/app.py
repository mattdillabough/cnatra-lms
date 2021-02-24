#### IMPORTS

# python imports
from dotenv import load_dotenv
from flask import Flask
from flask_mongoengine import MongoEngine
import os

# project imports


#### APP SETUP

# initialize app
app = Flask(__name__)
load_dotenv()

# connect db
DB_URI = os.getenv('DB_URI')
app.config['MONGODB_HOST'] = DB_URI
db = MongoEngine(app)


#### ROUTE CONFIG
@app.route('/')
def index():
    return 'Hello World'


#### RUN APP
if __name__ == "__main__":
    app.run(debug=True)

#### IMPORTS

# python imports
from flask import Flask
from flask_mongoengine import MongoEngine

# project imports


#### APP SETUP

# initialize app
app = Flask(__name__)

# connect db
app.config.from_object('config.DevConfig')
db = MongoEngine(app)


#### ROUTE CONFIG
@app.route('/')
def index():
    return 'Hello World'


#### RUN APP
if __name__ == "__main__":
    app.run()

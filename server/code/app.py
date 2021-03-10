#### IMPORTS

# python imports
from flask import Flask
from flask_mongoengine import MongoEngine
from flask_restful import Api

# project imports


#### APP SETUP

# initialize app
app = Flask(__name__)

# configure app
app.config.from_object('config.DevConfig')

# configure flask_restful
api = Api(app)

# connect db
db = MongoEngine(app)


#### ROUTE CONFIG
@app.route('/')
def index():
    return 'Hello World'


#### RUN APP
if __name__ == "__main__":
    app.run()

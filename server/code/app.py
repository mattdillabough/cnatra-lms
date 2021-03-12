#### IMPORTS

# python imports
from flask import Flask
from flask_mongoengine import MongoEngine
from flask_restful import Api

# project imports
from resources.students import Student
from resources.users import User, Users


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

api.add_resource(Student, '/server/students/<string:student_id>')
api.add_resource(User, '/server/users/<string:user_id>')
api.add_resource(Users, '/server/users')


#### RUN APP
if __name__ == "__main__":
    app.run()

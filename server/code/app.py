#### IMPORTS

# python imports
from flask import Flask
from flask_mongoengine import MongoEngine
from flask_restful import Api
from flask_cors import CORS


# project imports
from resources.grade_sheet_maneuvers import GradeSheetManeuver
from resources.grade_sheets import GradeSheet
from resources.students import Student
from resources.users import User, Users


#### APP SETUP

# initialize app
app = Flask(__name__)
CORS(app)

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

api.add_resource(GradeSheetManeuver, '/server/grade_sheet_maneuvers/<string:grade_sheet_maneuver_id>')
api.add_resource(GradeSheet, '/server/grade_sheets/<string:grade_sheet_id>')
api.add_resource(Student, '/server/students/<string:student_id>')
api.add_resource(User, '/server/users/<string:user_id>')
api.add_resource(Users, '/server/users')


#### RUN APP
if __name__ == "__main__":
    app.run()

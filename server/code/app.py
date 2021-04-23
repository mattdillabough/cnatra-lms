# IMPORTS

# python imports
from flask import Flask
from flask_mongoengine import MongoEngine
from flask_restful import Api
from flask_cors import CORS


# project imports
from resources.grade_sheet_maneuvers import GradeSheetManeuver, GradeSheetManeuvers
from resources.grade_sheets import GradeSheet, GradeSheetId
from resources.maneuver_item_files import StageManeuvers
from resources.students import Student
from resources.stages import Stages


# APP SETUP

# initialize app
app = Flask(__name__)
# app = Flask(__name__, static_folder='../../frontend/build',
#             static_url_path='/')
CORS(app)

# configure app
app.config.from_object('config.DevConfig')

# configure flask_restful
api = Api(app)

# connect db
db = MongoEngine(app)


# ROUTE CONFIG
@app.route('/')
def index():
    return 'Hello World'
    # return app.send_static_file('index.html')


api.add_resource(GradeSheetId, '/server/grade_sheets/<string:grade_sheet_id>')
api.add_resource(GradeSheetManeuver,'/server/grade_sheet_maneuvers/<string:grade_sheet_maneuver_id>')
api.add_resource(GradeSheet, '/server/students/<string:student_username>/grade_sheets/<string:event_code>')
api.add_resource(GradeSheetManeuvers, '/server/grade_sheets/<string:grade_sheet_id>/maneuvers')
api.add_resource(StageManeuvers, '/server/stages/<string:stage>/maneuvers')
api.add_resource(Student, '/server/students/<string:student_username>')
api.add_resource(Stages, '/server/stages')


# RUN APP
if __name__ == "__main__":
    app.run()

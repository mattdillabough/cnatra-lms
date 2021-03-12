# python imports
from flask_restful import Resource, reqparse

# project imports
from models.grade_sheet_maneuvers import GradeSheetManeuverModel

class GradeSheetManeuver(Resource):

    def get(self, grade_sheet_maneuver_id):

        # query for grade_sheet_maneuver
        grade_sheet_maneuver_model = GradeSheetManeuverModel.objects(grade_sheet_maneuver_id=grade_sheet_maneuver_id).first()
        grade_sheet_maneuver = grade_sheet_maneuver_model.as_dict()

        # return grade_sheet_maneuver or 404 (not found)
        if grade_sheet_maneuver:
            return {'grade_sheet_maneuver': grade_sheet_maneuver}
        return {'message': 'Grade sheet maneuver not found'}, 404

    
    def put(self, grade_sheet_maneuver_id):

        # parse request
        parser = reqparse.RequestParser()
        parser.add_argument('grade_sheet_maneuver_id')
        parser.add_argument('grade')
        parser.add_argument('comments')

        # get data from parser arguments
        data = parser.parse_args()

        # query for grade_sheet_maneuver
        grade_sheet_maneuver = GradeSheetManeuverModel.objects(grade_sheet_maneuver_id=grade_sheet_maneuver_id).first()

        # update record or return 409 (conflict)
        try:
            grade_sheet_maneuver.update(
                **{
                    'grade': data['grade'],
                    'comments': data['comments']
                }
            )
            return {'message': 'Grade sheet maneuver successfully updated'}
        except:
            return {'message': 'Grade sheet maneuver not updated'}, 409

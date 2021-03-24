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
        parser.add_argument('grade', type=int)
        parser.add_argument('comments')

        # get data from parser arguments
        args = parser.parse_args()

        # query for grade_sheet_maneuver
        grade_sheet_maneuver = GradeSheetManeuverModel.objects(grade_sheet_maneuver_id=grade_sheet_maneuver_id).first()

        # update record or return 409 (conflict)
        try:
            # find args that exist and are different
            grade_sheet_maneuver.update(**{k: args[k] for k in args if (args[k] is not None) & (args[k] != grade_sheet_maneuver[k])})
            return {'message': 'Grade sheet maneuver successfully updated'}
        except Exception as e:
            return {
                        'message': 'Grade sheet maneuver not updated',
                        'error': str(e)
                    }, 409


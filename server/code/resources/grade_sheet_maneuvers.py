# python imports
from flask_restful import Resource

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
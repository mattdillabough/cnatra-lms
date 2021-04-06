# python imports
from flask_restful import Resource, reqparse, inputs

# project imports
from models.grade_sheets import GradeSheetModel

class GradeSheet(Resource):

    def get(self, grade_sheet_id):

        # query for grade_sheet
        grade_sheet_model = GradeSheetModel.objects(grade_sheet_id=grade_sheet_id).first()
        grade_sheet = grade_sheet_model.as_dict()

        # format student and instructor data
        user_fields = ['user_id', 'first_name', 'last_name']
        grade_sheet['student'] = {k:grade_sheet['student'][k] for k in user_fields}
        grade_sheet['instructor'] = {k:grade_sheet['instructor'][k] for k in user_fields}

        # return grade_sheet or 404 (not found)
        if grade_sheet:
            return {'grade_sheet': grade_sheet}
        return {'message': 'Grade sheet not found'}, 404


    def put(self, grade_sheet_id):

        # parse request
        parser = reqparse.RequestParser()
        parser.add_argument('date')
        parser.add_argument('grade')
        parser.add_argument('status')
        parser.add_argument('comments')

        # get data from parser arguments
        args = parser.parse_args()

        # query for grade_sheet_maneuver
        grade_sheet = GradeSheetModel.objects(grade_sheet_id=grade_sheet_id).first()

        # update record or return 409 (conflict)
        try:
            # find args that exist and are different
            grade_sheet.update(**{k: args[k] for k in args if (args[k] is not None) & (args[k] != grade_sheet[k])})
            return {'message': 'Grade sheet successfully updated'}
        except Exception as e:
            return {
                        'message': 'Grade sheet not updated',
                        'error': str(e)
                    }, 409

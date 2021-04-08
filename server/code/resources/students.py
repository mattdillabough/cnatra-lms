# python imports
from flask_restful import Resource

# project imports
from models.grade_sheets import GradeSheetModel
from models.users import UserModel

class Student(Resource):

    def get(self, username):
        
        # query for student
        student_model = UserModel.objects(username=username).first()
        student = student_model.as_dict()

        # get student grade_sheets
        student['grade_sheets'] = [grade_sheet.as_dict() for grade_sheet in GradeSheetModel.objects(student=student_model)]

        # return student or 404 (not found)
        if student:
            return {'student': student}
        return {'message': 'Student not found'}, 404

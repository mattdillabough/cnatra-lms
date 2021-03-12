# python imports
from flask_restful import Resource

# project imports
from models.grade_sheets import GradeSheetModel
from models.users import UserModel

class User(Resource):

    def get(self, user_id):

        user = UserModel.objects(user_id=user_id).first()
        try:
            return {'user': user.as_dict()}
        except Error as e:
            return {'error': e}, 404


class Users(Resource):

    def get(self):
        return {'users': [user['user_id'] for user in UserModel.objects()]}

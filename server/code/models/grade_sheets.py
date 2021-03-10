# python imports
import mongoengine as me

# project imports
from models.default_values import uuid_value
from models.events import EventModel
from models.shared.base_mixin import BaseMixin
from models.users import UserModel

class GradeSheetModel(BaseMixin, me.Document):
    '''
    Grade sheets
    '''

    grade_sheet_id = me.StringField(primary_key=True, default=uuid_value)
    student = me.ReferenceField(UserModel, required=True)
    instructor = me.ReferenceField(UserModel, required=True)
    event = me.ReferenceField(EventModel, required=True)
    date = me.DateField()
    grade = me.StringField()
    status = me.StringField()
    lesson_type = me.StringField()
    comments = me.StringField(default="")

    meta = {'collection': 'grade_sheets'}
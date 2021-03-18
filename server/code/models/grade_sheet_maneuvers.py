# python imports
import mongoengine as me

# project imports
from models.default_values import uuid_value
from models.maneuver_item_files import ManeuverItemFileModel
from models.shared.base_mixin import BaseMixin

class GradeSheetManeuverModel(BaseMixin, me.Document):
    '''
    Grade sheet maneuvers
    '''

    grade_sheet_maneuver_id = me.StringField(primary_key=True, default=uuid_value)
    grade_sheet = me.StringField(required=True)
    maneuver_item_file = me.ReferenceField(ManeuverItemFileModel, required=True)
    grade = me.IntField()
    comments = me.StringField(default="")

    meta = {'collection': 'grade_sheet_maneuvers'}

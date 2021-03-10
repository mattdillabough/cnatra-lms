# python imports
import mongoengine as me

# project imports
from models.default_values import uuid_value
from models.grade_sheets import GradeSheetModel
from models.maneuver_item_file_maneuvers import ManeuverItemFileManeuverModel
from models.shared.base_mixin import BaseMixin

class GradeSheetManeuverModel(BaseMixin, me.Document):
    '''
    Grade sheet maneuvers
    '''

    grade_sheet_maneuver_id = me.StringField(primary_key=True, default=uuid_value)
    grade_sheet = me.ReferenceField(GradeSheetModel, required=True)
    maneuver_item_file_maneuver = me.ReferenceField(ManeuverItemFileManeuverModel, required=True)
    maneuver_in_grade_sheet = me.IntField()
    grade = me.IntField()
    comments = me.StringField(default="")

    meta = {'collection': 'grade_sheet_maneuvers'}

# python imports
import mongoengine as me

# project imports
from models.default_values import uuid_value
from models.maneuvers import ManeuverModel
from models.shared.base_mixin import BaseMixin

class ManeuverItemFileModel(BaseMixin, me.Document):
    '''
    Maneuver item files
    '''

    maneuver_item_file_id = me.StringField(primary_key=True, default=uuid_value)
    event = me.StringField(required=True)
    maneuver = me.ReferenceField(ManeuverModel, required=True)
    maneuver_in_maneuver_item_file = me.IntField()
    grade = me.IntField()
    is_required = me.BooleanField()

    meta = {'collection': 'maneuver_item_files'}


# python imports
import mongoengine as me

# project imports
from models.default_values import uuid_value
from models.maneuver_item_files import ManeuverItemFileModel
from models.maneuvers import ManeuverModel
from models.shared.base_mixin import BaseMixin

class ManeuverItemFileManeuverModel(BaseMixin, me.Document):
    '''
    Maneuver item file maneuvers
    '''
    maneuver_item_file_maneuver_id = me.StringField(primary_key=True, default=uuid_value)
    maneuver_item_file = me.ReferenceField(ManeuverItemFileModel, required=True)
    maneuver = me.ReferenceField(ManeuverModel, required=True)
    maneuver_in_maneuver_item_file = me.IntField()
    grade = me.IntField()
    is_required = me.BooleanField()

    meta = {'collection': 'maneuver_item_file_maneuvers'}


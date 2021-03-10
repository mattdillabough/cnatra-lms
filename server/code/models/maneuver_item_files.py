# python imports
import mongoengine as me

# project imports
from models.default_values import uuid_value
from models.events import EventModel
from models.shared.base_mixin import BaseMixin

class ManeuverItemFileModel(BaseMixin, me.Document):
    '''
    Maneuver item files
    '''

    maneuver_item_file_id = me.StringField(primary_key=True, default=uuid_value)
    event = me.ReferenceField(EventModel, required=True)

    meta = {'collection': 'maneuver_item_files'}


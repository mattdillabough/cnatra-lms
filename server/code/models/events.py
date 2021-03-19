# python imports
import mongoengine as me

# project imports
from models.default_values import uuid_value
from models.media_types import MediaTypeModel
from models.shared.base_mixin import BaseMixin


class EventModel(BaseMixin, me.Document):
    '''
    Events
    '''

    event_id = me.StringField(primary_key=True, default=uuid_value)
    event_code = me.StringField()
    media_type = me.ReferenceField(MediaTypeModel, required=True)
    title = me.StringField()
    hours = me.FloatField()
    event_in_block = me.IntField()
    block = me.StringField(required=True)

    meta = {'collection': 'events'}
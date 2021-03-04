# python imports
import mongoengine as me

# project imports
from models.blocks import BlockModel
from models.shared.base_mixin import BaseMixin


class EventModel(BaseMixin, me.Document):
    '''
    Events
    '''

    event_code = me.StringField(primary_key=True)
    media_type = me.StringField()
    title = me.StringField()
    hours = me.FloatField()
    event_in_block = me.IntField()
    is_last_event_in_block = me.BooleanField()
    block = me.ReferenceField(BlockModel)

    meta = {'collection': 'events'}
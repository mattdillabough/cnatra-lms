# python imports
import mongoengine as me

# project imports
from models.blocks import BlockModel
from models.medias import MediaModel
from models.shared.base_mixin import BaseMixin

class EventModel(BaseMixin, me.Document):
    '''
    Events
    '''

    event_number = me.StringField(primary_key=True)
    media = me.ReferenceField(MediaModel)
    block = me.ReferenceField(BlockModel)
    title = me.StringField()
    hours = me.DecimalField()
    sort_order = me.IntField()

    meta = {'collection': 'events'}
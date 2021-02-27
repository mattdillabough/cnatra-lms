# python imports
import mongoengine as me

# project imports
from models.default_values import uuid_value
from models.shared.base_mixin import BaseMixin

class MediaModel(BaseMixin, me.Document):
    '''
    Medias - relate to types of events
    '''

    id = me.StringField(primary_key=True, default=uuid_value)
    media = me.StringField(null=False)
    description = me.StringField()


    meta = {'collection': 'medias'}


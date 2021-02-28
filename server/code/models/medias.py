# python imports
import mongoengine as me

# project imports
from models.shared.base_mixin import BaseMixin

class MediaModel(BaseMixin, me.Document):
    '''
    Medias
    '''

    media_id = me.IntField(primary_key=True)
    media = me.StringField()

    meta = {'collection': 'medias'}
    
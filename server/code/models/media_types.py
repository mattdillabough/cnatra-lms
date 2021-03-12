# python imports
import mongoengine as me

# project imports
from models.shared.base_mixin import BaseMixin

class MediaTypeModel(BaseMixin, me.Document):
    '''
    Media types
    '''

    media_type_id = me.IntField(primary_key=True)
    media_type = me.StringField()

    meta = {'collection': 'media_types'}


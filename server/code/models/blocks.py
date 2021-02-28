# python imports
import mongoengine as me

# project imports
from models.shared.base_mixin import BaseMixin

class BlockModel(BaseMixin, me.Document):
    '''
    Blocks
    '''

    block_number = me.StringField(primary_key=True)
    title = me.StringField()
    block_name = me.StringField()

    meta = {'collection': 'blocks'}
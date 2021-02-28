# python imports
import mongoengine as me

# project imports
from models.blocks import BlockModel
from models.default_values import uuid_value
from models.shared.base_mixin import BaseMixin

class BlockPrerequisiteModel(BaseMixin, me.Document):
    '''
    Block prerequisites
    '''

    block_prerequisite_id = me.StringField(primary_key=True, default=uuid_value)
    block_prerequisite = me.StringField()
    block = me.ReferenceField(BlockModel)

    meta = {'collection': 'block_prerequisites'}
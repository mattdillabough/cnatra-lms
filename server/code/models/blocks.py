# python imports
import mongoengine as me

# project imports
from models.shared.base_mixin import BaseMixin
from models.stages import StageModel


class BlockModel(BaseMixin, me.Document):
    '''
    Blocks
    '''

    block_number = me.StringField(primary_key=True)
    title = me.StringField()
    block_in_stage = me.IntField()
    stage = me.ReferenceField(StageModel)

    meta = {'collection': 'blocks'}
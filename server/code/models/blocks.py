# python imports
import mongoengine as me

# project imports
from models.block_types import BlockTypeModel
from models.default_values import uuid_value
from models.shared.base_mixin import BaseMixin
from models.shared.start_date_end_date_mixin import StartDateEndDateMixin
from models.stages import StageModel

class BlockModel(BaseMixin, StartDateEndDateMixin, me.Document):
    '''
    Blocks - belong to Stages
    '''

    id = me.StringField(primary_key=True, default=uuid_value)
    block = me.StringField(null=False)
    block_type = me.ReferenceField(BlockTypeModel)
    stage = me.ReferenceField(StageModel)


    meta = {'collection': 'blocks'}


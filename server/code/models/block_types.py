# python imports
import mongoengine as me

# project imports
from models.stage_types import StageTypeModel
from models.shared.base_mixin import BaseMixin
from models.shares.available_choice_sort_order_mixin import AvailableChoiceSortOrderMixin

class BlockTypeModel(BaseMixin, AvailableChoiceSortOrderMixin, me.Document):
    '''
    Block types
    Blocks belong to Stages
    '''

    id = me.SequenceField(primary_key=True)
    block_type = me.StringField(null=False)
    stage_type = me.ReferenceField(StageTypeModel)

    meta = {'collection': 'block_types'}


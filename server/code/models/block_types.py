# python imports
import mongoengine as me

# project imports
from models.shared.base_mixin import BaseMixin
from models.shared.available_choice_sort_order_mixin import AvailableChoiceSortOrderMixin
from models.stage_types import StageTypeModel

class BlockTypeModel(BaseMixin, AvailableChoiceSortOrderMixin, me.Document):
    '''
    Block types - belong to Stage types

    '''

    id = me.SequenceField(primary_key=True)
    block_type = me.StringField(null=False)
    stage_type = me.ReferenceField(StageTypeModel)

    meta = {'collection': 'block_types'}


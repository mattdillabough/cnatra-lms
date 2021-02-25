# python imports
import mongoengine as me

# project imports
from models.shared.available_choice_sort_order_mixin import AvailableChoiceSortOrderMixin
from models.shared.base_mixin import BaseMixin

class PipelineTypeModel(BaseMixin, AvailableChoiceSortOrderMixin, me.Document):
    '''
    Pipeline types
    '''

    id = me.SequenceField(primary_key=True)
    pipeline_type = me.StringField(null=False)

    meta = {'collection': 'pipeline_types'}


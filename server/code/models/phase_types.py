# python imports
import mongoengine as me

# project imports
from models.pipeline_types import PipelineTypeModel
from models.shared.base_mixin import BaseMixin
from models.shares.available_choice_sort_order_mixin import AvailableChoiceSortOrderMixin

class PhaseTypeModel(BaseMixin, AvailableChoiceSortOrderMixin, me.Document):
    '''
    Phase types
    Phases belong to Pipelines
    '''

    id = me.SequenceField(primary_key=True)
    phase_type = me.StringField(null=False)
    pipeline_type = me.ReferenceField(PipelineTypeModel)

    meta = {'collection': 'phase_types'}


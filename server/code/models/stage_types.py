# python imports
import mongoengine as me

# project imports
from models.phase_types import PhaseTypeModel
from models.shared.base_mixin import BaseMixin
from models.shares.available_choice_sort_order_mixin import AvailableChoiceSortOrderMixin

class StageTypeModel(BaseMixin, AvailableChoiceSortOrderMixin, me.Document):
    '''
    Stage types
    Stages belong to Phases
    '''

    id = me.SequenceField(primary_key=True)
    stage_type = me.StringField(null=False)
    stage_type = me.ReferenceField(PhaseTypeModel)

    meta = {'collection': 'stage_types'}


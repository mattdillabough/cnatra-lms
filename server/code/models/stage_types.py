# python imports
import mongoengine as me

# project imports
from models.phase_types import PhaseTypeModel
from models.shared.available_choice_sort_order_mixin import AvailableChoiceSortOrderMixin
from models.shared.base_mixin import BaseMixin

class StageTypeModel(BaseMixin, AvailableChoiceSortOrderMixin, me.Document):
    '''
    Stage types - belong to Phase types
    '''

    id = me.SequenceField(primary_key=True)
    stage_type = me.StringField(null=False)
    phase_type = me.ReferenceField(PhaseTypeModel)

    meta = {'collection': 'stage_types'}


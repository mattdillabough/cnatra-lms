# python imports
import mongoengine as me

# project imports
from models.default_values import uuid_value
from models.phase_types import PhaseTypeModel
from models.shared.base_mixin import BaseMixin
from models.shared.start_date_end_date_mixin import StartDateEndDateMixin

class PhaseModel(BaseMixin, StartDateEndDateMixin, me.Document):
    '''
    Phases
    '''

    id = me.StringField(primary_key=True, default=uuid_value)
    phase = me.StringField(null=False)
    phase_type = me.ReferenceField(PhaseTypeModel)


    meta = {'collection': 'phases'}


# python imports
import mongoengine as me

# project imports
from models.default_values import uuid_value
from models.phases import PhaseModel
from models.stage_types import StageTypeModel
from models.shared.base_mixin import BaseMixin
from models.shared.start_date_end_date_mixin import StartDateEndDateMixin

class StageModel(BaseMixin, StartDateEndDateMixin, me.Document):
    '''
    Stages
    '''

    id = me.StringField(primary_key=True, default=uuid_value)
    stage = me.StringField(null=False)
    stage_type = me.ReferenceField(StageTypeModel)
    phase = me.ReferenceField(PhaseModel)


    meta = {'collection': 'stages'}


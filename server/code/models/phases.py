# python imports
import mongoengine as me

# project imports
from models.default_values import uuid_value
from models.pipelines import PipelineModel
from models.shared.base_mixin import BaseMixin
from models.shared.start_date_end_date_mixin import StartDateEndDateMixin

class PhaseModel(BaseMixin, StartDateEndDateMixin, me.Document):
    '''
    Phases - belong to Pipelines
    '''

    id = me.StringField(primary_key=True, default=uuid_value)
    phase = me.StringField(null=False)
    pipeline = me.ReferenceField(PipelineModel)
    description = me.StringField(null=False)


    meta = {'collection': 'phases'}


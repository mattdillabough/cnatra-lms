# python imports
import mongoengine as me

# project imports
from models.default_values import uuid_value
from models.pipeline_types import PipelineTypeModel
from models.shared.base_mixin import BaseMixin
from models.shared.start_date_end_date_mixin import StartDateEndDateMixin

class PipelineModel(BaseMixin, StartDateEndDateMixin, me.Document):
    '''
    Pipelines
    '''

    id = me.StringField(primary_key=True, default=uuid_value)
    pipeline = me.StringField(null=False)
    pipeline_type = me.ReferenceField(PipelineTypeModel)


    meta = {'collection': 'pipelines'}


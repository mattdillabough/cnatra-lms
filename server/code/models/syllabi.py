# python imports
import mongoengine as me

# project imports
from models.default_values import uuid_value
from models.pipelines import PipelineModel
from models.shared.base_mixin import BaseMixin

class SyllabusModel(BaseMixin, me.Document):
    '''
    Syllabi - relate to Pipelines
    '''

    id = me.StringField(primary_key=True, default=uuid_value)
    pipeline = me.ReferenceField(PipelineModel)


    meta = {'collection': 'syllabi'}


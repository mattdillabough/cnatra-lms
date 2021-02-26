# python imports
import mongoengine as me

# project imports
from models.default_values import uuid_value
from models.shared.base_mixin import BaseMixin
from models.shared.course_mixin import CourseMixin

class PipelineModel(BaseMixin, CourseMixin, me.Document):
    '''
    Pipelines
    '''

    id = me.StringField(primary_key=True, default=uuid_value)
    pipeline = me.StringField(null=False, unique=True)


    meta = {'collection': 'pipelines'}


# python imports
import mongoengine as me

# project imports
from models.courses import CourseModel
from models.default_values import uuid_value
from models.shared.base_mixin import BaseMixin

class PrerequisiteTrainingModel(BaseMixin, me.Document):
    '''
    Prerequisite Training
    '''

    id = me.StringField(primary_key=True, default=uuid_value)
    prerequisite_training_id = me.StringField(default=uuid_value)
    prerequisite_training = me.StringField()
    course = me.ReferenceField(CourseModel)


    meta = {'collection': 'prerequisite_trainings'}


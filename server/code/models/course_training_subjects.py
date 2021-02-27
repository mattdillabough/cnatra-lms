# python imports
import mongoengine as me

# project imports
from models.courses import CourseModel
from models.default_values import uuid_value
from models.shared.base_mixin import BaseMixin

class CourseTrainingSubjectModel(BaseMixin, me.Document):
    '''
    Course training subjects
    '''

    course_training_subject_id = me.StringField(primary_key=True, default=uuid_value)
    course_training_subject = me.StringField()
    course = me.ReferenceField(CourseModel)


    meta = {'collection': 'course_training_subjects'}


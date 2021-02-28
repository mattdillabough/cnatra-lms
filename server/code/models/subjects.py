# python imports
import mongoengine as me

# project imports
from models.course_training_subjects import CourseTrainingSubjectModel
from models.default_values import uuid_value
from models.shared.base_mixin import BaseMixin

class SubjectModel(BaseMixin, me.Document):
    '''
    Subjects
    '''

    subject_id = me.StringField(primary_key=True, default=uuid_value)
    subject = me.StringField()
    symbol = me.StringField()
    hours = me.DecimalField()
    sort_order = me.IntField()
    course_training_subject = me.ReferenceField(CourseTrainingSubjectModel)

    meta = {'collection': 'subjects'}

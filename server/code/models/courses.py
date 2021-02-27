# python imports
import mongoengine as me

# project imports
from models.default_values import uuid_value
from models.shared.base_mixin import BaseMixin

class CourseModel(BaseMixin, me.Document):
    '''
    Courses
    '''
    id = me.StringField(primary_key=True, default=uuid_value)
    course_title = me.StringField()
    cin = me.StringField()
    location = me.StringField()
    course_status = me.StringField()
    course_mission = me.StringField()
    security_clearance_requirements = me.StringField()
    follow_on_training = me.StringField()
    course_length_training_days = me.DecimalField()
    course_length_calendar_weeks = me.DecimalField()
    class_capacity = me.StringField()
    instructor_requirements = me.StringField()
    course_curriculum_model_manager = me.StringField()
    quota_management_authority = me.StringField()
    quota_control = me.StringField()


    meta = {'collection': 'courses'}


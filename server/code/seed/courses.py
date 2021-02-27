# python imports

# project imports
from models.courses import CourseModel

# records to insert
courses = [
    {
        'course_title': 'Advanced Helicopter Multi-Service Pilot Training System (MPTS)',
        'cin': 'Q-2C-3156',
        'location': 'Naval Air Station, Whiting Field, Milton, Florida 32570',
        'course_status': 'active',
        'course_mission': 'The mission of this training is to teach the skills necessary for flying rotarywing aircraft and to qualify Student Naval Aviators for rotary-wing and Naval Aviator designations, and a standard instrument rating',
        'security_clearance_requirements': 'None',
        'follow_on_training': 'As required by each service for each specific assignment',
        'course_length_training_days': 143.2,
        'course_length_calendar_weeks': 31.8,
        'class_capacity': 'variable',
        'instructor_requirements': 'As established by Chief of Naval Air Training planning factors',
        'course_curriculum_model_manager': 'Commander, Training Air Wing FIVE (COMTRAWING FIVE)',
        'quota_management_authority': 'Chief of Naval Air Training',
        'quota_control': 'Chief of Naval Operations'
    }
]

def create_courses():

    # delete records (if any)
    CourseModel.objects().delete()

    # loop through list
    for course_dict in courses:
        # create record
        course_model = CourseModel(**course_dict)
        # insert record
        course_model.save()


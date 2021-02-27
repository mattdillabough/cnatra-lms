# python imports

# project imports
from models.course_training_subjects import CourseTrainingSubjectModel
from models.courses import CourseModel

# records to insert
course_training_subjects = [
    {
       'course_training_subject': 'Ground Training',
       'course': 'Advanced Helicopter Multi-Service Pilot Training System (MPTS)',
       'sort_order': 1
    },
    {
        'course_training_subject': 'Flight Support',
        'course': 'Advanced Helicopter Multi-Service Pilot Training System (MPTS)',
        'sort_order': 2
    },
    {
        'course_training_subject': 'Flight Training',
        'course': 'Advanced Helicopter Multi-Service Pilot Training System (MPTS)',
        'sort_order': 3
    }
]

def create_course_training_subjects():

    # delete records (if any)
    CourseTrainingSubjectModel.objects().delete()

    # loop through list
    for course_training_subject_dict in course_training_subjects:
        # find course_model
        course = course_training_subject_dict['course']
        
        course_model = CourseModel.objects(course_title=course).first()
        course_training_subject_dict['course'] = course_model
        # create record
        course_training_subject_model = CourseTrainingSubjectModel(**course_training_subject_dict)
        # insert record
        course_training_subject_model.save()


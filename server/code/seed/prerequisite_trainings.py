# python imports

# project imports
from models.courses import CourseModel
from models.prerequisite_trainings import PrerequisiteTrainingModel

# records to insert
prerequisite_trainings = [
    {
       'prerequisite_training': 'Successful completion of T-6B Joint Primary Pilot Training (JPPT), (TW4: Q-2A-3166 or TW5: Q-2A-4166)',
       'course': 'Advanced Helicopter Multi-Service Pilot Training System (MPTS)',
       'sort_order': 1
    },
    {
        'prerequisite_training': ' Successful completion of Naval Aviation Survival Training Program (NASTP) Supplemental Emergency Breathing Device (SEBD) training',
        'course': 'Advanced Helicopter Multi-Service Pilot Training System (MPTS)',
        'sort_order': 2
    }
]

def create_prerequisite_trainings():

    # delete records (if any)
    PrerequisiteTrainingModel.objects().delete()

    # loop through list
    for prerequisite_training_dict in prerequisite_trainings:
        # find course_model
        course = prerequisite_training_dict['course']
        
        course_model = CourseModel.objects(course_title=course).first()
        prerequisite_training_dict['course'] = course_model
        # create record
        prerequisite_training_model = PrerequisiteTrainingModel(**prerequisite_training_dict)
        # insert record
        prerequisite_training_model.save()


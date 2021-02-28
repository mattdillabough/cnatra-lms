# python imports

# project imports
from app import db
from seed.course_training_subjects import create_course_training_subjects
from seed.courses import create_courses
from seed.prerequisite_trainings import create_prerequisite_trainings
from seed.subjects import create_subjects

#  ORDER OF INSERTION MATTERS

try:    
    create_courses()
    print("Added courses")
except Exception as e:
    print(f"Error when adding courses:")
    print(e)

try:    
    create_prerequisite_trainings()
    print("Added prerequisite trainings")
except Exception as e:
    print(f"Error when adding prerequisite trainings:")
    print(e)

try:    
    create_course_training_subjects()
    print("Added course training subjects")
except Exception as e:
    print(f"Error when adding course training subjects:")
    print(e)

try:    
    create_subjects()
    print("Added subjects")
except Exception as e:
    print(f"Error when adding subjects:")
    print(e)

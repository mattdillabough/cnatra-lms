# python imports

# project imports
from app import db
from seed.courses import create_courses
from seed.prerequisite_trainings import create_prerequisite_trainings

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

# python imports

# project imports
from app import db
from seed.phases import create_phases
from seed.pipelines import create_pipelines

#  ORDER OF INSERTION MATTERS

try:    
    create_pipelines()
    print("Added pipelines")
except Exception as e:
    print(f"Error when adding pipelines:")
    print(e)

try:    
    create_phases()
    print("Added phases")
except Exception as e:
    print(f"Error when adding phases:")
    print(e)
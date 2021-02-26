# python imports

# project imports
from app import db
from seed.pipelines import create_pipelines

#  ORDER OF INSERTION MATTERS

try:    
    create_pipelines()
    print("Added pipelines")
except Exception as e:
    print(f"Error when adding pipelines:")
    print(e)
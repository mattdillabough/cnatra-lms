# python imports

# project imports
from app import db
from seed.pipeline_types import create_pipeline_types


try:    
    create_pipeline_types()
    print("Added pipeline_types")
except Exception as e:
    print(f"Error when adding pipeline_types:")
    print(e)
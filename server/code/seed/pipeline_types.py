# python imports

# project imports
from models.pipeline_types import PipelineTypeModel


# records to insert
pipeline_types = [
   "Helicopter Pilot",
   "Tiltrotor Pilot",
   "Helicopter Instructor Under Training",
   "Aviation Medical Specialist",
   "Multiengine Pilot",
   "Jet Pilot",
   "Maritime Naval Flight Officer",
   "Jet Naval Flight Office"
]
pipeline_types.sort()

def create_pipeline_types():

    # delete records (if any)
    PipeTypeModel.objects().delete()

    # loop through list and insert records
    for i, pipeline_type in enumerate(pipeline_types):
        pipeline_type_model = PipelineTypeModel(**{
            'pipeline_type': pipeline_type,
            'sort_order': i+1
        })
        pipeline_type_model.save()

    
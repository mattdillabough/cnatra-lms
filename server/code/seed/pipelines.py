# python imports
import datetime

# project imports
from models.pipelines import PipelineModel

# records to insert
pipelines = [
   "Helicopter Pilot",
   "Tiltrotor Pilot",
   "Helicopter Instructor Under Training",
   "Aviation Medical Specialist",
   "Multiengine Pilot",
   "Jet Pilot",
   "Maritime Naval Flight Officer",
   "Jet Naval Flight Office"
]
start_date = datetime.datetime(2021, 1, 1)
end_date = datetime.datetime(2021, 6, 30)

def create_pipelines():

    # delete records (if any)
    PipelineModel.objects().delete()

    # loop through list
    for pipeline in pipelines:
        # create record
        pipeline_model = PipelineModel(**{
            'pipeline': pipeline,
            'description': f"{pipeline} pipeline",
            'start_date': start_date,
            'end_date': end_date
        })
        # insert record
        pipeline_model.save()


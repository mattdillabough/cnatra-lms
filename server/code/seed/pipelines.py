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
description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque blandit sem in semper auctor. Vivamus dignissim ipsum eros, sit amet tristique arcu tincidunt eget. Quisque pretium augue at nisl interdum, posuere cursus velit tincidunt. Nam laoreet cursus odio non viverra. Suspendisse potenti. Curabitur mauris massa, semper ac congue accumsan, tempus at dolor.'

def create_pipelines():

    # delete records (if any)
    PipelineModel.objects().delete()

    # loop through list and insert records
    for i, pipeline in enumerate(pipelines):
        pipeline_model = PipelineModel(**{
            'pipeline': pipeline,
            'description': description,
            'start_date': start_date,
            'end_date': end_date
        })
        pipeline_model.save()


# python imports
import datetime

# project imports
from models.phases import PhaseModel
from models.pipelines import PipelineModel


# records to insert
phases = [
    {
        'pipeline': 'Helicopter Pilot',
        'phase': 'Ground School Training',
        'description': '2 months of ground school that teaches them basic aviation weather, aerodynamics, general aircraft systems, map reading and navigation, and general aviation rules and regulations.',
        'start_date': datetime.datetime(2021, 1, 1),
        'end_date': datetime.datetime(2021, 2, 28)
    },
    {
        'pipeline': 'Helicopter Pilot',
        'phase': 'Initial Flight Training',
        'description': '6 months of initial flight training in the T-6B, a small single engine training airplane.',
        'start_date': datetime.datetime(2021, 3, 1),
        'end_date': datetime.datetime(2021, 8, 31)
    },
    {
        'pipeline': 'Helicopter Pilot',
        'phase': 'Helicopter Advanced',
        'description': 'Helicopter Advanced is approximately 6 months long and consists of the following types of events: Wing and squadron check-in, Water survival, Initial helicopter ground school, Flights and simulators, ...',
        'start_date': datetime.datetime(2021, 9, 1),
        'end_date': datetime.datetime(2022, 2, 28)
    }
]

def create_phases():

    # delete records (if any)
    PhaseModel.objects().delete()

    # loop through list
    for phase in phases:
        # find pipeline model for phase
        pipeline_model = PipelineModel.objects(pipeline=phase['pipeline']).first()
        # create record
        phase_model = PhaseModel(**phase)
        phase_model['pipeline'] = pipeline_model
        # insert record
        phase_model.save()
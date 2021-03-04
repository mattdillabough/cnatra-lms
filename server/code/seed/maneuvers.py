# python imports

# project imports
from models.maneuvers import ManeuverModel


# records to insert
maneuvers = [
    {
        'maneuver_id': 1,
        'maneuver': 'General Knowledge/Procedures'
    },
    {
        'maneuver_id': 2,
        'maneuver': 'Headwork/Situational Awareness'
    },
    {
        'maneuver_id': 3,
        'maneuver': 'Crew Resource Management'
    },
    {
        'maneuver_id': 4,
        'maneuver': 'Cockpit Management'
    },
    {
        'maneuver_id': 5,
        'maneuver': 'Checklist Management'
    },
    {
        'maneuver_id': 6,
        'maneuver': 'Radio Procedures'
    }
]

# function to insert
def insert_maneuvers():

    # delete records (if any)
    ManeuverModel.objects().delete()

    # loop through records
    for maneuver in maneuvers:
        # create record
        maneuver_model = ManeuverModel(**maneuver)
        # insert record
        maneuver_model.save()
# python imports

# project imports
from models.events import EventModel
from models.maneuver_item_files import ManeuverItemFileModel
from models.maneuvers import ManeuverModel


# records to insert
maneuver_item_files = [
    {
        'event': 'FAM2002A',
        'maneuver': 'General Knowledge/Procedures',
        'grade': 3,
        'is_required': True
    },
    {
        'event': 'FAM2002A',
        'maneuver': 'Headwork/Situational Awareness',
        'grade': 2,
        'is_required': True
    },
    {
        'event': 'FAM2002A',
        'maneuver': 'Crew Resource Management',
        'grade': 3,
        'is_required': True
    }
]

# function to insert
def insert_maneuver_item_files():

    # delete records (if any)
    ManeuverItemFileModel.objects().delete()

    # loop through records
    for maneuver_item_file in maneuver_item_files:
        # find event_model
        maneuver_item_file['event'] = EventModel.objects(event_code=maneuver_item_file['event']).first()
        # find maneuver_model
        maneuver_item_file['maneuver'] = ManeuverModel.objects(maneuver=maneuver_item_file['maneuver']).first()
        # create record
        maneuver_item_file_model = ManeuverItemFileModel(**maneuver_item_file)
        # insert record
        maneuver_item_file_model.save()
# python imports

# project imports
from models.events import EventModel
from models.maneuver_item_files import ManeuverItemFileModel


# records to insert
maneuver_item_files = [
    {
        'event': 'N4301'
    },
    {
        'event': 'N4302'
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
        # create record
        maneuver_item_file_model = ManeuverItemFileModel(**maneuver_item_file)
        # insert record
        maneuver_item_file_model.save()
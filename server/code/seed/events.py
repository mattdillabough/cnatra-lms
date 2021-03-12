# python imports

# project imports
from models.blocks import BlockModel
from models.events import EventModel
from models.media_types import MediaTypeModel


# records to insert
events = [
    {
        'event_code': 'N4301',
        'media_type': 'TH-57C',
        'title': 'Low-Level Navigation Flight 1',
        'hours': 1.8,
        'event_in_block': 1,
        'block': 'N43'
    },
    {
        'event_code': 'N4302',
        'media_type': 'TH-57C',
        'title': 'Low-Level Navigation Flight 2',
        'hours': 1.8,
        'event_in_block': 2,
        'block': 'N43'
    }
]

# function to insert
def insert_events():

    # delete records (if any)
    EventModel.objects().delete()

    # loop through records
    for event in events:
        # find media_type record
        event['media_type'] = MediaTypeModel.objects(media_type=event['media_type']).first()
        # find block record
        event['block'] = BlockModel.objects(block_number=event['block']).first()
        # create record
        event_model = EventModel(**event)
        # insert record
        event_model.save()
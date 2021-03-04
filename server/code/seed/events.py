# python imports

# project imports
from models.blocks import BlockModel
from models.events import EventModel


# records to insert
events = [
    {
        'event_code': 'FAM2001A',
        'media_type': 'CPT (TH57B/FTD-6)',
        'title': 'Cockpit Procedures',
        'hours': 1.3,
        'event_in_block': 1,
        'is_last_event_in_block': False,
        'block': 'FAM20'
    },
    {
        'event_code': 'FAM2002A',
        'media_type': 'CPT (TH57B/FTD-6)',
        'title': 'Cockpit Procedures',
        'hours': 1.3,
        'event_in_block': 2,
        'is_last_event_in_block': True,
        'block': 'FAM20'
    }
]

# function to insert
def insert_events():

    # delete records (if any)
    EventModel.objects().delete()

    # loop through records
    for event in events:

         # find block record
        event['block'] = BlockModel.objects(block_number=event['block']).first()
        # create record
        event_model = EventModel(**event)
        # insert record
        event_model.save()
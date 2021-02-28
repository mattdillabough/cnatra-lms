# python imports

# project imports
from models.blocks import BlockModel
from models.medias import MediaModel

# records to insert
events = [
    {
        'event_number': 'GND0101A',
        'media': 'Sqdn',
        'block': 'GND01',
        'title': 'Check-In',
        'hours': 2.0
    },
    {
        'event_number': 'GND0102A',
        'media': 'Issue',
        'block': 'GND01',
        'title': 'Training Publications Issue',
        'hours': 0.5
    },
    {
        'event_number': 'GND0103A',
        'media': 'Sqdn',
        'block': 'GND01',
        'title': 'Curriculum Indoctrination and Flight Leader’s Brief',
        'hours': 2.0
    },
    {
        'event_number': 'GND0104A',
        'media': 'Sqdn',
        'block': 'GND01',
        'title': 'Welcome Aboard',
        'hours': 3.0
    }
]

def create_events():

    # delete records (if any)
    EventModel.objects().delete()

    # loop through list
    for event_dict in events:

        # find media_model
        media = event_dict['media']
        media_model = MediaModel.objects(media=media).first()
        event_dict['media'] = media_model
        
        # find block_model
        block = event_dict['block']
        block_model = BlockModel(block_number=block).first()
        event_dict['block'] = block_model

        # create record
        event_model = EventModel(**event_dict)
        # insert record
        event_model.save()
# python imports
import datetime

# project imports
from models.medias import MediaModel

# records to insert
medias = [
    {
        'media': 'Sqdn',
        'description': 'Administrative Event'
    },
    {
        'media': 'Exam',
        'description': 'Examination'
    },
    {
        'media': 'ICW',
        'description': 'Interactive Courseware (Self-Study)'
    },
    {
        'media': 'FD',
        'description': 'Facilitated Discussion (Instructor lead group class)'
    },
    {
        'media': 'PTT',
        'description': 'Partial Task Trainer (Individual or instructor lead)'
    },
    {
        'media': 'FTD-6/7',
        'description': 'Flight Simulator'
    },
    {
        'media': 'Aircraft',
        'description': 'Flown in TH-73A'
    }
]

def create_medias():

    # delete records (if any)
    MediaModel.objects().delete()

    # loop through list
    for media in medias:
        # create record
        media_model = MediaModel(**media)
        # insert record
        media_model.save()


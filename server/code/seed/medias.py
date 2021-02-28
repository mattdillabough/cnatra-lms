# python imports

# project imports
from models.medias import MediaModel

# records to insert
medias = [
    {
        'media_id': 1,
        'media': 'Sqdn',
        'description': 'Administrative event'
    },
    {
        'media_id': 2,
        'media': 'Issue',
        'description': 'Issue'
    }
]

def create_medias():

    # delete records (if any)
    MediaModel.objects().delete()

    # loop through list
    for media_dict in medias:
        # create record
        media_model = MediaModel(**media_dict)
        # insert record
        media_model.save()

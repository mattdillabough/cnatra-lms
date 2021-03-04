# python imports

# project imports
from models.media_types import MediaTypeModel


# records to insert
media_types = [
    {
        'media_type_id': 1,
        'media_type': 'CPT (TH57B/FTD-6)'
    }
]

# function to insert
def insert_media_types():

    # delete records (if any)
    MediaTypeModel.objects().delete()

    # loop through records
    for media_type in media_types:
        # create record
        media_type_model = MediaTypeModel(**media_type)
        # insert record
        media_type_model.save()
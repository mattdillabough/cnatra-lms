# python imports

# project imports
from models.blocks import BlockModel

# records to insert
blocks = [
    {
        'block_number': 'GND01',
        'title': 'Indoctrination',
        'block_name': 'INDOC'
    }
]

def create_blocks():

    # delete records (if any)
    BlockModel.objects().delete()

    # loop through list
    for block_dict in blocks:
        # create record
        block_model = BlockModel(**block_dict)
        # insert record
        block_model.save()

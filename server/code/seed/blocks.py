# python imports

# project imports
from models.blocks import BlockModel
from models.stages import StageModel


# records to insert
blocks = [
    {
        'block_number': 'FAM20',
        'title': 'Cockpit Procedures',
        'block_in_stage': 1,
        'stage': 'FAM'
    }
]

# function to insert
def insert_blocks():

    # delete records (if any)
    BlockModel.objects().delete()

    # loop through records
    for block in blocks:

         # find stage record
        block['stage'] = StageModel.objects(stage_id=block['stage']).first()
        # create record
        block_model = BlockModel(**block)
        # insert record
        block_model.save()
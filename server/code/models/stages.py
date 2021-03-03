# python imports
import mongoengine as me

# project imports
from models.shared.base_mixin import BaseMixin


class StageModel(BaseMixin, me.Document):
    '''
    Stages
    '''

    stage_id = me.StringField(primary_key=True)
    stage = me.StringField()

    meta = {'collection': 'stages'}
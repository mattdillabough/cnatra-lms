# python imports
import mongoengine as me

# project imports
from models.default_values import uuid_value
from models.shared.base_mixin import BaseMixin


class StageModel(BaseMixin, me.Document):
    '''
    Stages
    '''

    stage_id = me.StringField(primary_key=True, default=uuid_value)
    stage = me.StringField()
    stage_name = me.StringField()

    meta = {'collection': 'stages'}
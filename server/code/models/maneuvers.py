# python imports
import mongoengine as me

# project imports
from models.shared.base_mixin import BaseMixin

class ManeuverModel(BaseMixin, me.Document):
    '''
    Maneuvers
    '''

    maneuver_id = me.IntField(primary_key=True)
    maneuver = me.StringField()

    meta = {'collection': 'maneuvers'}


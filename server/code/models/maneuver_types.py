# python imports
import mongoengine as me

# project imports
from models.shared.base_mixin import BaseMixin
from models.shares.available_choice_sort_order_mixin import AvailableChoiceSortOrderMixin

class ManeuverTypeModel(BaseMixin, AvailableChoiceSortOrderMixin, me.Document):
    '''
    Maneuver types
    '''

    id = me.SequenceField(primary_key=True)
    maneuver_type = me.StringField(null=False)

    meta = {'collection': 'maneuver_types'}


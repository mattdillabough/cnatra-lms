# python imports
import mongoengine as me

# project imports
from models.shared.available_choice_sort_order_mixin import AvailableChoiceSortOrderMixin
from models.shared.base_mixin import BaseMixin

class ManeuverTypeModel(BaseMixin, AvailableChoiceSortOrderMixin, me.Document):
    '''
    Maneuver types
    '''

    id = me.SequenceField(primary_key=True)
    maneuver_type = me.StringField(null=False)

    meta = {'collection': 'maneuver_types'}


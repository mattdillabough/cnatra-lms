# python imports
import mongoengine as me

# project imports
from models.shared.base_mixin import BaseMixin

class UserTypeModel(BaseMixin, me.Document):
    '''
    User types
    '''

    user_type_id = me.IntField(primary_key=True)
    user_type = me.StringField()

    meta = {'collection': 'user_types'}


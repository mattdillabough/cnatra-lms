# python imports
import mongoengine as me

# project imports
from models.shared.base_mixin import BaseMixin
from models.user_types import UserType

class UserType(BaseMixin, UserType, me.Document):
    '''
    User types
    '''

    id = me.SequenceField(primary_key=True)
    first_name = me.StringField(required=True)
    last_name = me.StringField(required=True)
    email_address = me.EmailField(required=True)
    password = me.StringField(required=True)
    user_type = me.ReferenceField(UserType)


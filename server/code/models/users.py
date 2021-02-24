# python imports
import mongoengine as me

# project imports
from models.shared.base_mixin import BaseMixin
from models.user_types import UserTypeModel

class UserModel(BaseMixin, UserType, me.Document):
    '''
    Users
    '''

    id = me.SequenceField(primary_key=True)
    first_name = me.StringField(required=True)
    last_name = me.StringField(required=True)
    email_address = me.EmailField(required=True, unique=True)
    password = me.StringField(required=True)
    user_type = me.ReferenceField(UserType)


# python imports
import mongoengine as me

# project imports
from models.default_values import uuid_value
from models.shared.base_mixin import BaseMixin
from models.user_types import UserTypeModel

class UserModel(BaseMixin, me.Document):
    '''
    Users
    '''

    id = me.StringField(primary_key=True, default=uuid_value)
    first_name = me.StringField()
    last_name = me.StringField()
    email_address = me.EmailField()
    password = me.StringField()
    user_type = me.ReferenceField(UserTypeModel)

    meta = {'collection': 'users'}


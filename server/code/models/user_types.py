# python imports
import mongoengine as me

# project imports
from models.shared.base_mixin import BaseMixin

class UserType(BaseMixin, me.Document):
    '''
    User types
    '''

    id = me.SequenceField(primary_key=True)
    user_type = me.StringField(null=False)


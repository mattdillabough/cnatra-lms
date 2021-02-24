# python imports
import mongoengine as me

# project imports
from models.default_values import uuid_value, current_timestamp

class BaseMixin(me.Document):
    '''
    Base model from which all other tables inherit
    '''

    guid = me.StringField(default=default_uuid_value)
    created_at = me.DateTimeField(default=current_timestamp)
    updated_at = me.DateTimeField(default=current_timestamp)


    # allows for 'inheritance' while allowing other models to be created as separate collections
    meta = {'abstract': True}
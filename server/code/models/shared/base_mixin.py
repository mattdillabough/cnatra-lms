# python imports
import mongoengine as me

# project imports
from models.default_values import default_uuid_value

class BaseMixin(me.Document):
    '''
    Base model from which all other tables inherit
    '''

    uuid = me.StringField(default=default_uuid_value)


    # allows for 'inheritance' while allowing other models to be created as separate collections
    meta = {'abstract': True}
# python imports
import datetime
import mongoengine as me

# project imports
from models.default_values import uuid_value, current_timestamp

class BaseMixin(me.Document):
    '''
    Base model from which all other tables inherit
    '''

    guid = me.StringField(null=False, default=uuid_value)
    created_at = me.DateTimeField(null=False, default=current_timestamp)
    updated_at = me.DateTimeField(null=False, default=current_timestamp)


    # allows for 'inheritance' while allowing other models to be created as separate collections
    meta = {'abstract': True}

    def as_dict(self):

        self_dict = {}

        for field in self._fields:
            # handle dates
            if isinstance(self[field], datetime.date):
                self_dict[field] = self[field].isoformat()
            # handle custom classes
            elif isinstance(self[field], BaseMixin):
                self_dict[field] = self[field].as_dict()
            else:
                self_dict[field] = self[field]
        return self_dict
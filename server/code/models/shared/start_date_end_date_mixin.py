# python imports
import mongoengine as me

# project imports

class StartDateEndDateMixin(me.Document):
    '''
    Adds date columns to table to indicate start and end
    '''

    start_date = me.DateTimeField(required=True)
    end_date = me.DateTimeField(required=True)


    # allows for 'inheritance' while allowing other models to be created as separate collections
    meta = {'abstract': True}
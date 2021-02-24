# python imports
import mongoengine as me

# project imports

class AvailableChoiceSortOrderMixin(me.Document):
    '''
    Adds columns to a table that has choices to determine how/which choices are displayed
    '''

    available_choice = me.BooleanField(null=False, default=True)
    sort_order = me.IntField(null=False, unique=True)


    # allows for 'inheritance' while allowing other models to be created as separate collections
    meta = {'abstract': True}
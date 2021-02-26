# python imports
import mongoengine as me

# project imports

class CourseMixin(me.Document):
    '''
    Adds course-related columns to tables
    '''

    description = me.StringField(null=False)
    start_date = me.DateTimeField(required=True)
    end_date = me.DateTimeField(required=True)


    # allows for 'inheritance' while allowing other models to be created as separate collections
    meta = {'abstract': True}
# python imports

# project imports
from models.user_types import UserTypeModel


# records to insert
user_types = [
    {
        'user_type_id': 1,
        'user_type': 'student'
    },
    {
        'user_type_id': 2,
        'user_type': 'instructor'
    },
    {
        'user_type_id': 3,
        'user_type': 'administrator'
    }
]

# function to insert
def insert_user_types():

    # delete records (if any)
    UserTypeModel.objects().delete()

    # loop through records
    for user_type in user_types:
        # create record
        user_type_model = UserTypeModel(**user_type)
        # save record
        user_type_model.save()
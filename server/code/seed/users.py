# python imports

# project imports
from models.user_types import UserTypeModel
from models.users import UserModel


# reords to insert
users = [
    {
        'first_name': 'Daniel',
        'last_name': 'Canham',
        'email_address': 'daniel@canham.com',
        'password': 'password',
        'user_type': 'student'
    },
    {
        'first_name': 'Greg',
        'last_name': 'Sharp',
        'email_address': 'greg@sharp.com',
        'password': 'password',
        'user_type': 'instructor'
    },
    {
        'first_name': 'Parley',
        'last_name': 'Williams',
        'email_address': 'parley@williams.com',
        'user_type': 'instructor'
    }
]

# function to insert
def insert_users():

    # delete records (if any)
    UserModel.objects().delete()

    # loop through records
    for user in users:

        # find user_type record
        user['user_type'] = UserTypeModel.objects(user_type=user['user_type']).first()
        # create record
        user_model = UserModel(**user)
        # insert record
        user_model.save()
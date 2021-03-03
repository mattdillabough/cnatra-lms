# python imports

# project imports
from models.user_types import UserTypeModel
from models.users import UserModel


# reords to insert
users = [
    {
        'first_name': 'Victoria',
        'last_name': 'Lee',
        'email_address': 'victoria@lee.com',
        'password': 'password',
        'user_type': 'student'
    },
    {
        'first_name': 'Justin',
        'last_name': 'Devies',
        'email_address': 'justin@devies.com',
        'password': 'password',
        'user_type': 'student'
    },
    {
        'first_name': 'Aneesh',
        'last_name': 'Kodali',
        'email_address': 'aneesh@kodali.com',
        'password': 'password',
        'user_type': 'student'
    },
    {
        'first_name': 'Danny',
        'last_name': 'Canham',
        'email_address': 'danny@canham.com',
        'password': 'password',
        'user_type': 'instructor'
    },
    {
        'first_name': 'Joshua',
        'last_name': 'Strand',
        'email_address': 'joshua@strand.com',
        'password': 'password',
        'user_type': 'administrator'
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
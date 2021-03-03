# python imports

# project imports
from app import db
from seed.stages import insert_stages
from seed.user_types import insert_user_types
from seed.users import insert_users


# ORDER OF INSERTION MATTERS
models = [
    'user_types',
    'users',
    'stages'
]

for model in models:
    try:
        exec(f"insert_{model}()")
        print(f"Added {model}")
    except Exception as e:
        print(f"{model} error: {e}")

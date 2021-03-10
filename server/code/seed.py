# python imports

# project imports
from app import db



# ORDER OF INSERTION MATTERS
models = [
      'user_types'
    , 'users'
    , 'stages'
    , 'blocks'
    , 'media_types'
    , 'events'
    , 'maneuvers'
    , 'maneuver_item_files'
    , 'maneuver_item_file_maneuvers'
]

for model in models:
    try:
        model_import = f"seed.{model}"
        model_function = f"insert_{model}"
        exec(f"from {model_import} import {model_function}")
        exec(f"{model_function}()")
        print(f"Added {model}")
    except Exception as e:
        print(f"{model} error: {e}")

#for model in models:
#    try:
#        exec(f"insert_{model}()")
#        print(f"Added {model}")
#    except Exception as e:
#        print(f"{model} error: {e}")

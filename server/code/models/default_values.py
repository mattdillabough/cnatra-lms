# python imports
from uuid import uuid4
import datetime

# project imports

uuid_value = lambda: str(uuid4()).replace('-','')
current_timestamp = datetime.datetime.now

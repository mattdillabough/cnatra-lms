# python imports

# project imports
from models.events import EventModel
from models.maneuver_item_files import ManeuverItemFileModel
from models.maneuvers import ManeuverModel

# records to insert
maneuver_item_files = [
    {
        'event': 'N4301',
        'maneuver': 'GENERAL KNOWLEDGE/PROCEDURES',
        'maneuver_in_maneuver_item_file': 1,
        'grade': 4,
        'is_required': True
    },
    {
        'event': 'N4301',
        'maneuver': 'EMER PROCEDURES/SYS FAILURES',
        'maneuver_in_maneuver_item_file': 2,
        'grade': 4,
        'is_required': True
    },
    {
        'event': 'N4301',
        'maneuver': 'HEADWORK/SITUATIONAL AWARENESS',
        'maneuver_in_maneuver_item_file': 3,
        'grade': 4,
        'is_required': True
    },
    {
        'event': 'N4301',
        'maneuver': 'BASIC AIR WORK',
        'maneuver_in_maneuver_item_file': 4,
        'grade': 4,
        'is_required': True
    },
    {
        'event': 'N4301',
        'maneuver': 'FLIGHT PLANNING',
        'maneuver_in_maneuver_item_file': 5,
        'grade': 4,
        'is_required': True
    },
    {
        'event': 'N4301',
        'maneuver': 'GROUND OPERATIONS',
        'maneuver_in_maneuver_item_file': 6,
        'grade': 4,
        'is_required': True
    },
    {
        'event': 'N4301',
        'maneuver': 'CRM',
        'maneuver_in_maneuver_item_file': 7,
        'grade': 4,
        'is_required': True
    },
    {
        'event': 'N4301',
        'maneuver': 'COCKPIT MANAGEMENT',
        'maneuver_in_maneuver_item_file': 8,
        'grade': 4,
        'is_required': True
    },
    {
        'event': 'N4301',
        'maneuver': 'RADIO PROCEDURES',
        'maneuver_in_maneuver_item_file': 9,
        'grade': 4,
        'is_required': True
    },
    {
        'event': 'N4301',
        'maneuver': 'VERTICAL TAKEOFF',
        'maneuver_in_maneuver_item_file': 10,
        'grade': 4,
        'is_required': True
    },
    {
        'event': 'N4301',
        'maneuver': 'NO-HOVER TAKEOFF',
        'maneuver_in_maneuver_item_file': 11,
        'grade': 4,
        'is_required': True
    },
    {
        'event': 'N4301',
        'maneuver': 'TRANSITION TO FORWARD FLIGHT',
        'maneuver_in_maneuver_item_file': 12,
        'grade': 4,
        'is_required': True
    },
    {
        'event': 'N4301',
        'maneuver': 'GROUNDSPEED/FUEL CHECKS',
        'maneuver_in_maneuver_item_file': 13,
        'grade': 4,
        'is_required': True
    },
    {
        'event': 'N4301',
        'maneuver': 'NORMAL APPROACH',
        'maneuver_in_maneuver_item_file': 14,
        'grade': 4,
        'is_required': True
    },
    {
        'event': 'N4301',
        'maneuver': '360-, 180-, 90-DEGREE APPROACH',
        'maneuver_in_maneuver_item_file': 15,
        'grade': 3,
        'is_required': True
    },
    {
        'event': 'N4301',
        'maneuver': 'LOW-LEVEL NAVIGATION',
        'maneuver_in_maneuver_item_file': 16,
        'grade': 3,
        'is_required': True
    },
    {
        'event': 'N4301',
        'maneuver': 'TIMING',
        'maneuver_in_maneuver_item_file': 17,
        'grade': 4,
        'is_required': True
    },
    {
        'event': 'N4301',
        'maneuver': 'VERTICAL LANDING',
        'maneuver_in_maneuver_item_file': 18,
        'grade': 4,
        'is_required': True
    },
    {
        'event': 'N4301',
        'maneuver': 'SPECIAL SYLLABUS REQUIREMENTS',
        'maneuver_in_maneuver_item_file': 19,
        'grade': 1,
        'is_required': False
    }
]

# function to insert
def insert_maneuver_item_files():

    # delete records (if any)
    ManeuverItemFileModel.objects().delete()

    # loop through records
    for maneuver_item_file in maneuver_item_files:
        # find maneuver_item_file_model
        maneuver_item_file['event'] = EventModel.objects(event_code=maneuver_item_file['event']).first()
        # find maneuver_model
        maneuver_item_file['maneuver'] = ManeuverModel.objects(maneuver=maneuver_item_file['maneuver']).first()
        # create record
        maneuver_item_file_model = ManeuverItemFileModel(**maneuver_item_file)
        # insert record
        maneuver_item_file_model.save()

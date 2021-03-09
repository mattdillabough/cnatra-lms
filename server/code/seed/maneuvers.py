# python imports

# project imports
from models.maneuvers import ManeuverModel


# records to insert
maneuvers = [
    {
        'maneuver_id': 1,
        'maneuver': 'GENERAL KNOWLEDGE/PROCEDURES'
    },
    {
        'maneuver_id': 2,
        'maneuver': 'EMER PROCEDURES/SYS FAILURES'
    },
    {
        'maneuver_id': 3,
        'maneuver': 'HEADWORK/SITUATIONAL AWARENESS'
    },
    {
        'maneuver_id': 4,
        'maneuver': 'BASIC AIR WORK'
    },
    {
        'maneuver_id': 5,
        'maneuver': 'FLIGHT PLANNING'
    },
    {
        'maneuver_id': 6,
        'maneuver': 'GROUND OPERATIONS'
    },
    {
        'maneuver_id': 7,
        'maneuver': 'CRM'
    },
    {
        'maneuver_id': 8,
        'maneuver': 'COCKPIT MANAGEMENT'
    },
    {
        'maneuver_id': 9,
        'maneuver': 'RADIO_PROCEDURES'
    },
    {
        'maneuver_id': 10,
        'maneuver': 'VERTICAL_TAKEOFF'
    },
    {
        'maneuver_id': 11,
        'maneuver': 'NO-HOVER TAKEOFF'
    },
    {
        'maneuver_id': 12,
        'maneuver': 'TRANSITION TO FORWARD FLIGHT'
    },
    {
        'maneuver_id': 13,
        'maneuver': 'GROUNDSPEED/FUEL CHECKS'
    },
    {
        'maneuver_id': 14,
        'maneuver': 'NORMAL APPROACH'
    },
    {
        'maneuver_id': 15,
        'maneuver': '360-, 180-, 90-DEGREE APPROACH'
    },
    {
        'maneuver_id': 16,
        'maneuver': 'LOW-LEVEL NAVIGATION'
    },
    {
        'maneuver_id': 17,
        'maneuver': 'TIMING'
    },
    {
        'maneuver_id': 18,
        'maneuver': 'VERTICAL LANDING'
    },
    {
        'maneuver_id': 19,
        'maneuver': 'SPECIAL SYLLABUS REQUIREMENTS'
    }
]

# function to insert
def insert_maneuvers():

    # delete records (if any)
    ManeuverModel.objects().delete()

    # loop through records
    for maneuver in maneuvers:
        # create record
        maneuver_model = ManeuverModel(**maneuver)
        # insert record
        maneuver_model.save()
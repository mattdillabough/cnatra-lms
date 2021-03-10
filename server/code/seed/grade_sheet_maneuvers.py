# python imports
from mongoengine.queryset.visitor import Q

# project imports
from models.events import EventModel
from models.grade_sheet_maneuvers import GradeSheetManeuverModel
from models.grade_sheets import GradeSheetModel
from models.maneuver_item_file_maneuvers import ManeuverItemFileManeuverModel
from models.maneuver_item_files import ManeuverItemFileModel
from models.maneuvers import ManeuverModel

# records to insert
grade_sheet_maneuvers = [
    {
        'grade_sheet': 'N4301',
        'maneuver_item_file_maneuver': 'GENERAL KNOWLEDGE/PROCEDURES',
        'maneuver_in_grade_sheet': 1,
        'grade': 4,
        'comments': ""
    },
    {
        'grade_sheet': 'N4301',
        'maneuver_item_file_maneuver': 'EMER PROCEDURES/SYS FAILURES',
        'maneuver_in_grade_sheet': 2,
        'grade': 4,
        'comments': ""
    },
    {
        'grade_sheet': 'N4301',
        'maneuver_item_file_maneuver': 'HEADWORK/SITUATIONAL AWARENESS',
        'maneuver_in_grade_sheet': 3,
        'grade': 4,
        'comments': ""
    },
    {
        'grade_sheet': 'N4301',
        'maneuver_item_file_maneuver': 'BASIC AIR WORK',
        'maneuver_in_grade_sheet': 4,
        'grade': 4,
        'comments': ""
    },
    {
        'grade_sheet': 'N4301',
        'maneuver_item_file_maneuver': 'FLIGHT PLANNING',
        'maneuver_in_grade_sheet': 5,
        'grade': 4,
        'comments': ""
    },
    {
        'grade_sheet': 'N4301',
        'maneuver_item_file_maneuver': 'GROUND OPERATIONS',
        'maneuver_in_grade_sheet': 6,
        'grade': 4,
        'comments': ""
    },
    {
        'grade_sheet': 'N4301',
        'maneuver_item_file_maneuver': 'CRM',
        'maneuver_in_grade_sheet': 7,
        'grade': 4,
        'comments': ""
    },
    {
        'grade_sheet': 'N4301',
        'maneuver_item_file_maneuver': 'COCKPIT MANAGEMENT',
        'maneuver_in_grade_sheet': 8,
        'grade': 4,
        'comments': ""
    },
    {
        'grade_sheet': 'N4301',
        'maneuver_item_file_maneuver': 'RADIO PROCEDURES',
        'maneuver_in_grade_sheet': 9,
        'grade': 4,
        'comments': ""
    },
    {
        'grade_sheet': 'N4301',
        'maneuver_item_file_maneuver': 'VERTICAL TAKEOFF',
        'maneuver_in_grade_sheet': 10,
        'grade': 4,
        'comments': ""
    },
    {
        'grade_sheet': 'N4301',
        'maneuver_item_file_maneuver': 'NO-HOVER TAKEOFF',
        'maneuver_in_grade_sheet': 11,
        'grade': 4,
        'comments': ""
    },
    {
        'grade_sheet': 'N4301',
        'maneuver_item_file_maneuver': 'TRANSITION TO FORWARD FLIGHT',
        'maneuver_in_grade_sheet': 12,
        'grade': 4,
        'comments': ""
    },
    {
        'grade_sheet': 'N4301',
        'maneuver_item_file_maneuver': 'GROUNDSPEED/FUEL CHECKS',
        'maneuver_in_grade_sheet': 13,
        'grade': 4,
        'comments': ""
    },
    {
        'grade_sheet': 'N4301',
        'maneuver_item_file_maneuver': 'NORMAL APPROACH',
        'maneuver_in_grade_sheet': 14,
        'grade': 4,
        'comments': ""
    },
    {
        'grade_sheet': 'N4301',
        'maneuver_item_file_maneuver': '360-, 180-, 90-DEGREE APPROACH',
        'maneuver_in_grade_sheet': 15,
        'grade': 4,
        'comments': "Was very smooth on the controls but just be sure to work that airspeed a little more in the turn to arrive on 60 knots at the 90 for a solid final on parameters 45-55 knots. Had a tendency to roll on final a little slow (35 kias) but then carry too much speed at the bottom. Set the attitude once on final and then control descent with collective. Will need to keep positive pressure on the collective through ground effect to avoid getting into a hover taxi."
    },
    {
        'grade_sheet': 'N4301',
        'maneuver_item_file_maneuver': 'LOW-LEVEL NAVIGATION',
        'maneuver_in_grade_sheet': 16,
        'grade': 5,
        'comments': "Maintained exceptional situation awareness through entire route of flight. Never allowed course to deviate from intended path and backed IP on flight instruments. Fed the plan of attack before each CP with clear instructions. Gave distant steer then also gave intermediate CP's along the way."
    },
    {
        'grade_sheet': 'N4301',
        'maneuver_item_file_maneuver': 'TIMING',
        'maneuver_in_grade_sheet': 17,
        'grade': 5,
        'comments': "Within 3 sec overall timing!"
    },
    {
        'grade_sheet': 'N4301',
        'maneuver_item_file_maneuver': 'VERTICAL LANDING',
        'maneuver_in_grade_sheet': 18,
        'grade': 4,
        'comments': ""
    },
    {
        'grade_sheet': 'N4301',
        'maneuver_item_file_maneuver': 'SPECIAL SYLLABUS REQUIREMENTS',
        'maneuver_in_grade_sheet': 19,
        'grade': 2,
        'comments': "IP demo'd brief and first 4 CP's."
    },
]

# function to insert
def insert_grade_sheet_maneuvers():

    # delete records (if any)
    GradeSheetManeuverModel.objects().delete()

    # loop through records
    for grade_sheet_maneuver in grade_sheet_maneuvers:
        # find grade_sheet_model
        event_model = EventModel.objects(event_code=grade_sheet_maneuver['grade_sheet']).first()
        grade_sheet_maneuver['grade_sheet'] = GradeSheetModel.objects(event=event_model).first()
        # find maneuver_item_file_maneuver_model
        maneuver_item_file_model = ManeuverItemFileModel.objects(event=event_model).first()
        maneuver_model = ManeuverModel.objects(maneuver=grade_sheet_maneuver['maneuver_item_file_maneuver']).first()
        grade_sheet_maneuver['maneuver_item_file_maneuver'] = ManeuverItemFileManeuverModel.objects(Q(maneuver_item_file=maneuver_item_file_model) & Q(maneuver=maneuver_model)).first()
        # create record
        grade_sheet_maneuver_model = GradeSheetManeuverModel(**grade_sheet_maneuver)
        # insert record
        grade_sheet_maneuver_model.save()
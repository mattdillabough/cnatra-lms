# python imports
from mongoengine.queryset.visitor import Q

# project imports
from models.events import EventModel
from models.grade_sheet_maneuvers import GradeSheetManeuverModel
from models.grade_sheets import GradeSheetModel
from models.maneuver_item_files import ManeuverItemFileModel
from models.maneuvers import ManeuverModel
from models.users import UserModel

# records to insert
grade_sheet_maneuvers = [
    {
        'grade_sheet': 'N4301',
        'student': 'daniel@canham.com',
        'maneuver_item_file': 'GENERAL KNOWLEDGE/PROCEDURES',
        'grade': 4,
        'comments': ""
    },
    {
        'grade_sheet': 'N4301',
        'student': 'daniel@canham.com',
        'maneuver_item_file': 'EMER PROCEDURES/SYS FAILURES',
        'grade': 4,
        'comments': ""
    },
    {
        'grade_sheet': 'N4301',
        'student': 'daniel@canham.com',
        'maneuver_item_file': 'HEADWORK/SITUATIONAL AWARENESS',
        'grade': 4,
        'comments': ""
    },
    {
        'grade_sheet': 'N4301',
        'student': 'daniel@canham.com',
        'maneuver_item_file': 'BASIC AIR WORK',
        'grade': 4,
        'comments': ""
    },
    {
        'grade_sheet': 'N4301',
        'student': 'daniel@canham.com',
        'maneuver_item_file': 'FLIGHT PLANNING',
        'grade': 4,
        'comments': ""
    },
    {
        'grade_sheet': 'N4301',
        'student': 'daniel@canham.com',
        'maneuver_item_file': 'GROUND OPERATIONS',
        'grade': 4,
        'comments': ""
    },
    {
        'grade_sheet': 'N4301',
        'student': 'daniel@canham.com',
        'maneuver_item_file': 'CRM',
        'grade': 4,
        'comments': ""
    },
    {
        'grade_sheet': 'N4301',
        'student': 'daniel@canham.com',
        'maneuver_item_file': 'COCKPIT MANAGEMENT',
        'grade': 4,
        'comments': ""
    },
    {
        'grade_sheet': 'N4301',
        'student': 'daniel@canham.com',
        'maneuver_item_file': 'RADIO PROCEDURES',
        'grade': 4,
        'comments': ""
    },
    {
        'grade_sheet': 'N4301',
        'student': 'daniel@canham.com',
        'maneuver_item_file': 'VERTICAL TAKEOFF',
        'grade': 4,
        'comments': ""
    },
    {
        'grade_sheet': 'N4301',
        'student': 'daniel@canham.com',
        'maneuver_item_file': 'NO-HOVER TAKEOFF',
        'grade': 4,
        'comments': ""
    },
    {
        'grade_sheet': 'N4301',
        'student': 'daniel@canham.com',
        'maneuver_item_file': 'TRANSITION TO FORWARD FLIGHT',
        'grade': 4,
        'comments': ""
    },
    {
        'grade_sheet': 'N4301',
        'student': 'daniel@canham.com',
        'maneuver_item_file': 'GROUNDSPEED/FUEL CHECKS',
        'grade': 4,
        'comments': ""
    },
    {
        'grade_sheet': 'N4301',
        'student': 'daniel@canham.com',
        'maneuver_item_file': 'NORMAL APPROACH',
        'grade': 4,
        'comments': ""
    },
    {
        'grade_sheet': 'N4301',
        'student': 'daniel@canham.com',
        'maneuver_item_file': '360-, 180-, 90-DEGREE APPROACH',
        'grade': 4,
        'comments': "Was very smooth on the controls but just be sure to work that airspeed a little more in the turn to arrive on 60 knots at the 90 for a solid final on parameters 45-55 knots. Had a tendency to roll on final a little slow (35 kias) but then carry too much speed at the bottom. Set the attitude once on final and then control descent with collective. Will need to keep positive pressure on the collective through ground effect to avoid getting into a hover taxi."
    },
    {
        'grade_sheet': 'N4301',
        'student': 'daniel@canham.com',
        'maneuver_item_file': 'LOW-LEVEL NAVIGATION',
        'grade': 5,
        'comments': "Maintained exceptional situation awareness through entire route of flight. Never allowed course to deviate from intended path and backed IP on flight instruments. Fed the plan of attack before each CP with clear instructions. Gave distant steer then also gave intermediate CP's along the way."
    },
    {
        'grade_sheet': 'N4301',
        'student': 'daniel@canham.com',
        'maneuver_item_file': 'TIMING',
        'grade': 5,
        'comments': "Within 3 sec overall timing!"
    },
    {
        'grade_sheet': 'N4301',
        'student': 'daniel@canham.com',
        'maneuver_item_file': 'VERTICAL LANDING',
        'grade': 4,
        'comments': ""
    },
    {
        'grade_sheet': 'N4301',
        'student': 'daniel@canham.com',
        'maneuver_item_file': 'SPECIAL SYLLABUS REQUIREMENTS',
        'grade': 2,
        'comments': "IP demo'd brief and first 4 CP's."
    },
    {
        'grade_sheet': 'N4302',
        'student': 'daniel@canham.com',
        'maneuver_item_file': 'GENERAL KNOWLEDGE/PROCEDURES',
        'grade': 4,
        'comments': "Make sure to get several practice briefs if able so that the brief is smooth and confident."
    },
    {
        'grade_sheet': 'N4302',
        'student': 'daniel@canham.com',
        'maneuver_item_file': 'EMER PROCEDURES/SYS FAILURES',
        'grade': 4,
        'comments': ""
    },
    {
        'grade_sheet': 'N4302',
        'student': 'daniel@canham.com',
        'maneuver_item_file': 'HEADWORK/SITUATIONAL AWARENESS',
        'grade': 4,
        'comments': ""
    },
    {
        'grade_sheet': 'N4302',
        'student': 'daniel@canham.com',
        'maneuver_item_file': 'BASIC AIR WORK',
        'grade': 4,
        'comments': ""
    },
    {
        'grade_sheet': 'N4302',
        'student': 'daniel@canham.com',
        'maneuver_item_file': 'FLIGHT PLANNING',
        'grade': 4,
        'comments': ""
    },
    {
        'grade_sheet': 'N4302',
        'student': 'daniel@canham.com',
        'maneuver_item_file': 'GROUND OPERATIONS',
        'grade': 4,
        'comments': ""
    },
    {
        'grade_sheet': 'N4302',
        'student': 'daniel@canham.com',
        'maneuver_item_file': 'CRM',
        'grade': 4,
        'comments': ""
    },
    {
        'grade_sheet': 'N4302',
        'student': 'daniel@canham.com',
        'maneuver_item_file': 'COCKPIT MANAGEMENT',
        'grade': 4,
        'comments': ""
    },
    {
        'grade_sheet': 'N4302',
        'student': 'daniel@canham.com',
        'maneuver_item_file': 'RADIO PROCEDURES',
        'grade': 4,
        'comments': ""
    },
    {
        'grade_sheet': 'N4302',
        'student': 'daniel@canham.com',
        'maneuver_item_file': 'VERTICAL TAKEOFF',
        'grade': 4,
        'comments': ""
    },
    {
        'grade_sheet': 'N4302',
        'student': 'daniel@canham.com',
        'maneuver_item_file': 'NO-HOVER TAKEOFF',
        'grade': 4,
        'comments': ""
    },
    {
        'grade_sheet': 'N4302',
        'student': 'daniel@canham.com',
        'maneuver_item_file': 'TRANSITION TO FORWARD FLIGHT',
        'grade': 4,
        'comments': ""
    },
    {
        'grade_sheet': 'N4302',
        'student': 'daniel@canham.com',
        'maneuver_item_file': 'GROUNDSPEED/FUEL CHECKS',
        'grade': 4,
        'comments': ""
    },
    {
        'grade_sheet': 'N4302',
        'student': 'daniel@canham.com',
        'maneuver_item_file': 'NORMAL APPROACH',
        'grade': 4,
        'comments': ""
    },
    {
        'grade_sheet': 'N4302',
        'student': 'daniel@canham.com',
        'maneuver_item_file': '360-, 180-, 90-DEGREE APPROACH',
        'grade': 4,
        'comments': "Nice approaches."
    },
    {
        'grade_sheet': 'N4302',
        'student': 'daniel@canham.com',
        'maneuver_item_file': 'LOW-LEVEL NAVIGATION',
        'grade': 5,
        'comments': "Excellent navigation through out the flight."
    },
    {
        'grade_sheet': 'N4302',
        'student': 'daniel@canham.com',
        'maneuver_item_file': 'TIMING',
        'grade': 5,
        'comments': "Excellent A/S adjustments to hit the timing!"
    },
    {
        'grade_sheet': 'N4302',
        'student': 'daniel@canham.com',
        'maneuver_item_file': 'VERTICAL LANDING',
        'grade': 4,
        'comments': ""
    },
    {
        'grade_sheet': 'N4302',
        'student': 'daniel@canham.com',
        'maneuver_item_file': 'SPECIAL SYLLABUS REQUIREMENTS',
        'grade': 0,
        'comments': ""
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
        student_model = UserModel.objects(email_address=grade_sheet_maneuver['student']).first()
        grade_sheet_maneuver['grade_sheet'] = GradeSheetModel.objects(Q(event=event_model) & Q(student=student_model)).first()['grade_sheet_id']
        grade_sheet_maneuver.pop('student', None)
        # find maneuver_item_file_model
        maneuver_model = ManeuverModel.objects(maneuver=grade_sheet_maneuver['maneuver_item_file']).first()
        grade_sheet_maneuver['maneuver_item_file'] = ManeuverItemFileModel.objects(Q(event=event_model['event_id']) & Q(maneuver=maneuver_model)).first()
        # create record
        grade_sheet_maneuver_model = GradeSheetManeuverModel(**grade_sheet_maneuver)
        # insert record
        grade_sheet_maneuver_model.save()
# python imports
import datetime

# project imports
from models.events import EventModel
from models.grade_sheets import GradeSheetModel
from models.users import UserModel

# records to insert
grade_sheets = [
    {
        'student': 'daniel@canham.com',
        'instructor': 'greg@sharp.com',
        'event': 'N4301',
        'date': datetime.date(2012, 3, 27),
        'grade': 'PASS',
        'status': 'CMP',
        'lesson_type': 'NA',
        'comments': "One of the best N4301's I've seen for the navigation portion! SMA followed process at every CP and communicated well with IP his plan of attack before arriving at each CP including fuel and instrument checks. Understood a/s g/s corrections to arrive  within 3 seconds overall timing. Nice!"
    },
    {
        'student': 'daniel@canham.com',
        'instructor': 'parley@williams.com',
        'event': 'N4302',
        'date': datetime.date(2012, 3, 28),
        'grade': 'PASS',
        'status': 'CMP',
        'lesson_type': 'NA',
        'comments': "1stLt Canham was a bit nervous in the brief, but covered the information well. Overall, very solid flight!"
    }
]

# function to insert
def insert_grade_sheets():

    # delete records (if any)
    GradeSheetModel.objects().delete()

    # loop through records
    for grade_sheet in grade_sheets:
        # find student_model
        grade_sheet['student'] = UserModel.objects(email_address=grade_sheet['student']).first()
        # find instructor_model
        grade_sheet['instructor'] = UserModel.objects(email_address=grade_sheet['instructor']).first()
        # find event_model
        grade_sheet['event'] = EventModel.objects(event_code=grade_sheet['event']).first()
        # create record
        grade_sheet_model = GradeSheetModel(**grade_sheet)
        # insert record
        grade_sheet_model.save()

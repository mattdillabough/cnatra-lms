# python imports

# project imports
from models.course_training_subjects import CourseTrainingSubjectModel
from models.subjects import SubjectModel

# records to insert
subjects = [
    {
        'subject': 'Indoctrination',
        'symbol': 'GND01',
        'hours': 7.5,
        'sort_order': 1,
        'course_training_subject': 'Ground Training'
    },
    {
        'subject': 'Safety',
        'symbol': 'GND02',
        'hours': 1.0,
        'sort_order': 2,
        'course_training_subject': 'Ground Training'
    },
    {
        'subject': 'Global Positioning System',
        'symbol': 'GND03',
        'hours': 7.0,
        'sort_order': 3,
        'course_training_subject': 'Ground Training'
    },
    {
        'subject': 'Mission Planning System',
        'symbol': 'GND04',
        'hours': 3.0,
        'sort_order': 4,
        'course_training_subject': 'Ground Training'
    },
    {
        'subject': 'Checkout',
        'symbol': 'GND05',
        'hours': 1.0,
        'sort_order': 5,
        'course_training_subject': 'Ground Training'
    },
    {
        'subject': "Systems 'B'",
        'symbol': 'SYS01',
        'hours': 9.5,
        'sort_order': 1,
        'course_training_subject': 'Flight Support'
    },
    {
        'subject': 'Basic Helicopter Aerodynamics',
        'symbol': 'AER01',
        'hours': 14.4,
        'sort_order': 2,
        'course_training_subject': 'Flight Support'
    },
    {
        'subject': 'Crew Resource Management - Familiarization Stage',
        'symbol': 'CRM01',
        'hours': 1.0,
        'sort_order': 3,
        'course_training_subject': 'Flight Support'
    },
    {
        'subject': 'Course Rules Flight Procedures',
        'symbol': 'CR01',
        'hours': 4.0,
        'sort_order': 4,
        'course_training_subject': 'Flight Support'
    },
    {
        'subject': 'NATOPS Examinations',
        'symbol': 'NAT01',
        'hours': 5.0,
        'sort_order': 5,
        'course_training_subject': 'Flight Support'
    },
    {
        'subject': "Preflight and Cockpit Procedures 'B'",
        'symbol': 'FAM01',
        'hours': 6.0,
        'sort_order': 6,
        'course_training_subject': 'Flight Support'
    },
    {
        'subject': 'Autorotation Aerodynamics',
        'symbol': 'AER02',
        'hours': 2.5,
        'sort_order': 7,
        'course_training_subject': 'Flight Support'
    },
    {
        'subject': 'Emergency Procedures',
        'symbol': 'EP01',
        'hours': 1.5,
        'sort_order': 8,
        'course_training_subject': 'Flight Support'
    },
    {
        'subject': 'Tail Rotor Aerodynamics',
        'symbol': 'AER03',
        'hours': 3.0,
        'sort_order': 9,
        'course_training_subject': 'Flight Support'
    },
    {
        'subject': 'Course Rules Flight Procedures',
        'symbol': 'CR02',
        'hours': 1.75,
        'sort_order': 10,
        'course_training_subject': 'Flight Support'
    },
    {
        'subject': 'Advanced Aerodynamics',
        'symbol': 'AER04',
        'hours': 3.0,
        'sort_order': 11,
        'course_training_subject': 'Flight Support'
    },
    {
        'subject': 'Logistics Flight Procedures',
        'symbol': 'LOG01',
        'hours': 0.5,
        'sort_order': 12,
        'course_training_subject': 'Flight Support'
    },
    {
        'subject': "Systems 'C'",
        'symbol': 'SYS02',
        'hours': 3.0,
        'sort_order': 13,
        'course_training_subject': 'Flight Support'
    },
    {
        'subject': 'Basic Instrument Flight Procedures',
        'symbol': 'INS01',
        'hours': 1.5,
        'sort_order': 14,
        'course_training_subject': 'Flight Support'
    },
    {
        'subject': 'Visual Navigation Flight Procedures',
        'symbol': 'NAV01',
        'hours': 2.5,
        'sort_order': 15,
        'course_training_subject': 'Flight Support'
    },
    {
        'subject': 'Instrument Navigation',
        'symbol': 'INS02',
        'hours': 24.5,
        'sort_order': 16,
        'course_training_subject': 'Flight Support'
    },
    {
        'subject': 'Radio Instruments',
        'symbol': 'RI01',
        'hours': 5.0,
        'sort_order': 17,
        'course_training_subject': 'Flight Support'
    },
    {
        'subject': 'Crew Resource Management – Instrument Stage',
        'symbol': 'CRM02',
        'hours': 2.0,
        'sort_order': 18,
        'course_training_subject': 'Flight Support'
    },
    {
        'subject': 'TERF Navigation',
        'symbol': 'TRF01',
        'hours': 2.5,
        'sort_order': 19,
        'course_training_subject': 'Flight Support'
    },
    {
        'subject': 'Shipboard Operations',
        'symbol': 'SHP01',
        'hours': 0.5,
        'sort_order': 20,
        'course_training_subject': 'Flight Support'
    },
    {
        'subject': 'Search and Rescue',
        'symbol': 'SAR01',
        'hours': 0.5,
        'sort_order': 21,
        'course_training_subject': 'Flight Support'
    },
    {
        'subject': 'Formation Procedures',
        'symbol': 'FRM01',
        'hours': 3.0,
        'sort_order': 22,
        'course_training_subject': 'Flight Support'
    },
    {
        'subject': 'Advanced Aerodynamics',
        'symbol': 'AER05',
        'hours': 1.0,
        'sort_order': 23,
        'course_training_subject': 'Flight Support'
    },
    {
        'subject': 'NITE Lab',
        'symbol': 'NVG01',
        'hours': 8.0,
        'sort_order': 24,
        'course_training_subject': 'Flight Support'
    }
]

def create_subjects():

    # delete records (if any)
    SubjectModel.objects().delete()

    # loop through list
    for subject_dict in subjects:

        # find course_training_subject model
        course_training_subject = subject_dict['course_training_subject']
        course_training_subject_model = CourseTrainingSubjectModel.objects(course_training_subject=course_training_subject).first()
        subject_dict['course_training_subject'] = course_training_subject_model

        # create record
        subject_model = SubjectModel(**subject_dict)

        # insert record
        subject_model.save()
//Finding gradesheetIds if they're not given by props

function findGradesheet(studentDetails, eventCode) {
  let gradesheetId = "";
  for (let gradesheet of studentDetails.grade_sheets) {
    if (gradesheet.event.event_code === eventCode) {
      gradesheetId = gradesheet.grade_sheet_id;
      break;
    }
  }
  return gradesheetId;
}

export default findGradesheet;

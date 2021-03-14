//Event Grade sheet
//External Imports
import React, { useState, useEffect } from "react";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
import { connect, useSelector, useDispatch } from "react-redux";

//Internal imports
import Maneuver from "./Maneuver";
import TOI from "./TextOrInput";
import { mockGradesheetData } from "./mockGradesheetData";

import { getGradesheet } from "../../Store/grades";

const gradesheet_id = "fe8119fdbbf34fcfbb1f33007d736150";

function Gradesheet({ gradeDetails, fetchGradesheet, ...props }) {
  //Managing state
  const [dropdown, setDropDown] = useState(false);
  const toggleDropDown = () => {
    setDropDown(!dropdown);
  };

  const [edit, setEditMode] = useState(false);
  const toggleEditMode = () => setEditMode(!edit);

  const dispatch = useDispatch();
  const details = useSelector((state) => state.grades.details);
  // const [details, setDetails] = useState({});

  useEffect(() => {
    dispatch(getGradesheet(gradesheet_id));

    // let mounted = true;
    // fetchGradesheet(gradesheet_id)
    //   .then((data) => {
    //     if (mounted) {
    //       setDetails(data);
    //     }
    //   })
    //   .catch((error) => {
    //     console.log("There was an error in gradesheet useEffect", error);
    //   });

    // //Cleans up / unsubscribe when component unmounts
    // return () => (mounted = false);
  }, [dispatch]);

  if (!details || !details.grade_sheet) {
    return <div className="Gradesheet container">Loading...</div>;
  }

  return (
    <>
      <div className="Gradesheet container">
        <button type="button" onClick={toggleEditMode}>
          {edit === true ? "Cancel" : "Edit"}
        </button>
        <h2
          className="student-name"
          title="Student Name"
        >{`${mockGradesheetData.student.rank} ${mockGradesheetData.student.name}`}</h2>
        <h4 className="event-identifier" title="Event Identifier and title">
          {`[${mockGradesheetData.eventId}] - ${mockGradesheetData.title}` ||
            "[Event ID] - [Event Name]"}
        </h4>
        <div className="gradesheet-submission">
          <div title="Date of event">
            {details?.grade_sheet.date ||
              new Date(mockGradesheetData.date).toLocaleDateString(undefined, {
                month: "long",
                day: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
              })}
          </div>
          <div title="Gradesheet submitter">
            <strong>Submitted by: </strong>
            {`${mockGradesheetData.instructor.rank} ${mockGradesheetData.instructor.name}`}
          </div>
        </div>
        <div
          className="gradesheet-details container-fluid"
          title="Event Details"
        >
          <div
            className={
              mockGradesheetData.status === "Complete"
                ? "details-header positive-status"
                : "details-header pending-status"
            }
            title="Event Status | Grade"
          >
            <div>
              {mockGradesheetData.status} | {mockGradesheetData.lessonGrade}
            </div>
            <div className="col-1 event-dropdown">
              <button
                type="button"
                className="toggle-dropdown btn"
                data-bs-toggle="collapse"
                data-bs-target="#collapseEvent"
                aria-expanded="false"
                aria-controls="collapse"
                onClick={toggleDropDown}
              >
                {dropdown ? <RiArrowUpSFill /> : <RiArrowDownSFill />}
              </button>
            </div>
          </div>
          <div
            className={
              dropdown ? "details-body collapse show" : "details-body collapse"
            }
            id="collapseEvent"
            aria-expanded="false"
            aria-controls="collapse"
          >
            <div className="row">
              <div className="col-12">
                <h5>Flight Lesson</h5>
                <div className="event-details-section">
                  <TOI
                    className="constrain-input"
                    labeltxt="Instructor: "
                    defaultValue={mockGradesheetData.instructor.name}
                    editable={edit}
                    displayVal={mockGradesheetData.instructor.name}
                  />
                  <TOI
                    className="constrain-input"
                    labeltxt="Start Date / Time: "
                    defaultValue={mockGradesheetData.date}
                    type="datetime-local"
                    editable={edit}
                    displayVal={new Date(
                      mockGradesheetData.date
                    ).toLocaleDateString(undefined, {
                      month: "short",
                      day: "2-digit",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: false,
                    })}
                  />
                  <TOI
                    className="constrain-input"
                    labeltxt="Duration: "
                    defaultValue={mockGradesheetData.flightTimelog.fltDur}
                    type="number"
                    step={0.1}
                    editable={edit}
                    displayVal={mockGradesheetData.flightTimelog.fltDur}
                  />
                </div>
                <h5>Details</h5>
                <div className="event-details-section">
                  <label>
                    <div>Modifier: </div>
                  </label>
                  <label>
                    <div>Instruction: </div>
                  </label>
                  <TOI
                    name="status-select"
                    type="select"
                    labeltxt="Status: "
                    options={["Complete", "Incomplete"]}
                    displayVal={mockGradesheetData.status}
                    defaultValue={mockGradesheetData.status}
                    editable={edit}
                  />
                  <TOI
                    type="radio"
                    name="clear-for-solo"
                    labeltxt="Cleared for Solo: "
                    options={["N/A", "Yes", "No"]}
                    displayVal={mockGradesheetData.clearedForSolo}
                    defaultValue={mockGradesheetData.clearedForSolo}
                    editable={edit}
                  />
                  <div>Writeups upload: </div>
                  <div>Reason:</div>
                  <div>Activities: </div>
                  <div>Miscellaneous: </div>
                  <div>Flight Record: </div>
                  <div>Winds: </div>
                  <div>Weather: </div>
                  <div>Overall Grade: </div>
                  <div>Progression: </div>
                </div>
              </div>
              <div className="col-12">
                <h5>Event Comments: </h5>
                <TOI
                  type="textarea"
                  rows="5"
                  defaultValue={mockGradesheetData.comments}
                  autoComplete="on"
                  editable={edit}
                  displayVal={mockGradesheetData.comments}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Maps out event's maneuvers */}
        {mockGradesheetData.maneuvers.map((maneuver) => {
          return <Maneuver key={maneuver.id} maneuver={maneuver} />;
        })}
      </div>
    </>
  );
}

// //Retreive properties from redux store's state
// const mapStateToProps = (state) => {
//   return {
//     gradeDetails: state.grades.details,
//   };
// };
// //Sends/dispatches changes to the redux store
// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchGradesheet: (id) => dispatch(getGradesheet(id)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Gradesheet);

export default Gradesheet;

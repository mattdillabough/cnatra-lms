//Event Grade sheet

//External Imports
import React, { useState, useEffect } from "react";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
// import { debounce } from "lodash";

//Internal imports
import Maneuver from "./Maneuver";
import { EventForm } from "./useEventForm";
// import TOI from "./TextOrInput";
import { mockGradesheetData } from "./mockGradesheetData";
import { getGradesheet } from "../../Store/grades";

const gradesheet_id = "a8d5bd938e2442619217ead735a73e0d";

function Gradesheet({ gradeDetails, fetchGradesheet, ...props }) {
  //MANAGING STATE
  const [dropdown, setDropDown] = useState(false);
  const toggleDropDown = () => {
    setDropDown(!dropdown);
  };

  const [edit, setEditMode] = useState(false);
  const toggleEditMode = () => setEditMode(!edit);

  //Accessing REDUX state & methods
  const dispatch = useDispatch();
  const details = useSelector((state) => state.grades.details);

  //FETCH gradesheet data
  useEffect(() => {
    dispatch(getGradesheet(gradesheet_id));
  }, [dispatch]);

  // MANAGE FORM DATA
  const [values, setValues] = useState({
    grade: details?.grade_sheet?.grade,
    clearedForSolo: mockGradesheetData.clearedForSolo,
    instructorName: mockGradesheetData.instructor.name,
    date: details?.grade_sheet.date,
    fltDur: mockGradesheetData.flightTimelog.fltDur,
    status: details?.grade_sheet.status,
    comments: details?.grade_sheet.comments,
  });

  useEffect(() => {
    setValues({
      grade: details?.grade_sheet?.grade,
      clearedForSolo: mockGradesheetData.clearedForSolo,
      instructorName: mockGradesheetData.instructor.name,
      date: details?.grade_sheet?.date,
      fltDur: mockGradesheetData.flightTimelog.fltDur,
      status: details?.grade_sheet.status,
      comments: details?.grade_sheet.comments,
    });
    console.log("Updated!");
  }, [details]);

  // Displays LOADING page if props from redux haven't been received yet
  if (!details?.grade_sheet.grade) {
    return <div className="Gradesheet container">Loading...</div>;
  }

  return (
    <>
      <div className="Gradesheet-wrap container-fluid">
        <div className="edit-controls d-flex justify-content-center justify-content-md-end container">
          <div className="btn-group">
            {edit ? (
              <button type="submit" form="event-details-form">
                Save
              </button>
            ) : (
              ""
            )}
            <button type="button" onClick={toggleEditMode}>
              {edit === true ? "Cancel" : "Edit"}
            </button>
          </div>
        </div>
        <div className="Gradesheet container">
          <h2
            className="student-name"
            title="Student Name"
          >{`${mockGradesheetData.student.rank} ${mockGradesheetData.student.name}`}</h2>
          <h4 className="event-identifier" title="Event Identifier and title">
            {`[${mockGradesheetData.eventId}] - ${mockGradesheetData.title}` ||
              "[Event ID] - [Event Name]"}
          </h4>
          <div className="gradesheet-submission">
            <div title="Date submitted">
              {new Date(details?.grade_sheet.date).toLocaleDateString("en-US", {
                month: "long",
                day: "2-digit",
                year: "numeric",
                timeZone: "UTC",
              })}
            </div>
            <div title="Gradesheet submitter">
              <strong>Submitted by: </strong>
              {`${mockGradesheetData.instructor.rank} ${mockGradesheetData.instructor.name}`}
            </div>
          </div>
          <div className="gradesheet-details container-fluid">
            <div
              className={
                details.grade_sheet.status === "CMP" &&
                details.grade_sheet.grade === "PASS"
                  ? "details-header positive-status"
                  : "details-header pending-status"
              }
              title="Event Status | Grade"
            >
              <div>
                {details.grade_sheet.status === "CMP"
                  ? "Complete"
                  : "Incomplete"}{" "}
                |{" "}
                {details.grade_sheet.grade === "PASS"
                  ? "Pass"
                  : "Unsatisfactory"}
              </div>
              <div className="col-1 event-dropdown">
                <button
                  title="Toggle Event Details"
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
                dropdown
                  ? "details-body collapse show"
                  : "details-body collapse"
              }
              id="collapseEvent"
              aria-expanded="false"
              aria-controls="collapse"
            >
              {/* EVENT DETAILS FORM */}
              {details?.grade_sheet?.grade ? (
                <EventForm edit={edit} values={values} />
              ) : (
                <div>Loading...</div>
              )}
            </div>
          </div>
          {/* Maps out event's maneuvers */}
          {mockGradesheetData.maneuvers.map((maneuver) => {
            return <Maneuver key={maneuver.id} maneuver={maneuver} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Gradesheet;

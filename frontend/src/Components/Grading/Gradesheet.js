//Event Grade sheet

//External Imports
import React, { useState, useEffect } from "react";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";

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

  //Accessing redux state & methods
  const dispatch = useDispatch();
  const details = useSelector((state) => state.grades.details);

  useEffect(() => {
    dispatch(getGradesheet(gradesheet_id));
  }, [dispatch]);

  //Displays loading page if props from redux haven't been received yet
  if (!details || !details.grade_sheet) {
    return <div className="Gradesheet container">Loading...</div>;
  }

  return (
    <>
      <div className="Gradesheet-wrap container-fluid">
        <div className="edit-controls d-flex justify-content-center justify-content-md-end container">
          <div className="btn-group">
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
            <div title="Date of event">
              {new Date(details.grade_sheet.date).toLocaleDateString("en-US", {
                month: "long",
                day: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
                timeZone: "EST",
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
                    {/* Fix time*/}
                    <TOI
                      className="constrain-input"
                      labeltxt="Start Date / Time: "
                      defaultValue={
                        details?.grade_sheet.date &&
                        details.grade_sheet.date[
                          details.grade_sheet.date.length - 6
                        ] === "T"
                          ? details.grade_sheet.date
                          : String(`${details.grade_sheet.date}T12:30`)
                      }
                      type="datetime-local"
                      editable={edit}
                      displayVal={new Date(
                        details.grade_sheet.date
                      ).toLocaleDateString(undefined, {
                        month: "short",
                        day: "2-digit",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: false,
                        timeZone: "UTC",
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
                    <TOI
                      name="status-select"
                      type="select"
                      labeltxt="Status: "
                      options={["Complete", "Incomplete"]}
                      displayVal={
                        details.grade_sheet.status === "CMP"
                          ? "Complete"
                          : "Incomplete"
                      }
                      defaultValue={
                        details.grade_sheet.status === "CMP"
                          ? "Complete"
                          : "Incomplete"
                      }
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
                    <div>Overall Grade: </div>
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
      </div>
    </>
  );
}

export default Gradesheet;

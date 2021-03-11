//Event Grade sheet
import React, { useState } from "react";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";

import Maneuver from "./Maneuver";
import { mockGradesheetData } from "./mockGradesheetData";

//To simulate different user types
const user = "student";

function Gradesheet() {
  const [dropdown, setDropDown] = useState(false);
  const toggleDropDown = () => {
    setDropDown(!dropdown);
  };

  const [edit, setEditMode] = useState(false);
  const toggleEditMode = () => setEditMode(!edit);

  //Would likely check state or local storage for user type
  const elementType = user === "instructor" ? "input" : "div";
  //TOI = text or input (conditionally render html elements based on user role); Thinking this functionality can be used when the 'edit' btn is implemented
  function TOI({
    labeltxt,
    type,
    defaultValue,
    displayVal,
    editable = false,
    ...props
  }) {
    return (
      <label>
        {labeltxt}
        {elementType === "div" ? (
          <div>{displayVal}</div>
        ) : type === "textarea" ? (
          <textarea
            disabled={!editable}
            defaultValue={defaultValue}
            {...props}
          ></textarea>
        ) : (
          <input
            disabled={!editable}
            type={type}
            defaultValue={defaultValue}
            {...props}
          />
        )}
      </label>
    );
  }

  return (
    <>
      <div className="Gradesheet container">
        <button type="button" onClick={toggleEditMode}>
          {edit === true ? "View" : "Edit"}
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
            {new Date(mockGradesheetData.date).toLocaleDateString(undefined, {
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
                    displayVal={mockGradesheetData.date}
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
                  <label>
                    Cleared for Solo:
                    <div>
                      {["N/a", "Yes", "No"].map((option, idx) => {
                        return (
                          <label key={`COS_${idx}`}>
                            {option}
                            <input
                              type="radio"
                              id={option}
                              name="clear-for-solo"
                              value={option}
                              disabled={!edit}
                              checked={
                                mockGradesheetData.clearedForSolo === option
                                  ? true
                                  : false
                              }
                            />
                          </label>
                        );
                      })}
                    </div>
                  </label>
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
        {mockGradesheetData.maneuvers.map((maneuver) => {
          return <Maneuver key={maneuver.id} maneuver={maneuver} />;
        })}
      </div>
    </>
  );
}

export default Gradesheet;

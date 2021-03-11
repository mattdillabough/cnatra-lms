//Event Grade sheet
import React, { useState } from "react";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";

import Maneuver from "./Maneuver";
import { mockGradesheetData } from "./mockGradesheetData";

//To simulate different user types
const user = "instructor";

function Gradesheet() {
  const [dropdown, setDropDown] = useState(false);
  const toggleDropDown = () => {
    setDropDown(!dropdown);
  };
  //Would likely check state or local storage for user type
  const elementType = user === "instructor" ? "input" : "div";
  //text or input
  function TOI({ labeltxt, editable = false, ...props }) {
    if (elementType === "input") {
      console.log("TOI PROPS", props);
    }
    return (
      <label>
        {labeltxt}
        {elementType === "div" ? (
          <div>{props.value}</div>
        ) : (
          <input disabled={!editable} {...props} />
        )}
      </label>
    );
  }

  return (
    <>
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
          <div title="Date of event">{mockGradesheetData.date}</div>
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
                    labeltxt="Instructor: "
                    placeholder={mockGradesheetData.instructor.name}
                  />
                  <TOI
                    labeltxt="Start Date / Time: "
                    defaultValue={mockGradesheetData.date}
                    type="datetime-local"
                    editable={true}
                  />
                  <TOI
                    labeltxt="Duration"
                    placeholder={mockGradesheetData.flightTimelog.fltDur}
                    type="number"
                    step={0.1}
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
                      <label>
                        <input
                          type="radio"
                          id="clear-solo-N/A"
                          name="clear-for-solo"
                          value="N/A"
                        ></input>
                        N/A
                      </label>
                      <label>
                        <input
                          type="radio"
                          id="clear-solo-Yes"
                          name="clear-for-solo"
                          value="Yes"
                        ></input>
                        Yes
                      </label>
                      <label>
                        <input
                          type="radio"
                          id="clear-solo-No"
                          name="clear-for-solo"
                          value="No"
                        ></input>
                        No
                      </label>
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
                <div>{mockGradesheetData.comments}</div>
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

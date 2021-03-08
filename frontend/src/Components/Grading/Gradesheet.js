//Event Grade sheet
import React, { useState } from "react";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";

import Maneuver from "./Maneuver";
import { mockGradesheetData } from "./mockGradesheetData";

function Gradesheet() {
  const [dropdown, setDropDown] = useState(false);
  const toggleDropDown = () => {
    setDropDown(!dropdown);
  };

  return (
    <>
      <div className="Gradesheet container">
        <h2 className="student-name">{`${mockGradesheetData.student.rank} ${mockGradesheetData.student.name}`}</h2>
        <h4 className="event-identifier">
          {`[${mockGradesheetData.eventId}] - ${mockGradesheetData.title}` ||
            "[Event ID] - [Event Name]"}
        </h4>
        <div className="gradesheet-submission">
          <div>{mockGradesheetData.date}</div>
          <div>
            <strong>Submitted by: </strong>
            {`${mockGradesheetData.instructor.rank} ${mockGradesheetData.instructor.name}`}
          </div>
        </div>
        <div className="gradesheet-details container-fluid">
          <div
            className={
              mockGradesheetData.status === "Complete"
                ? "details-header positive-status"
                : "details-header pending-status"
            }
            title="Event Details"
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
            Will also likely be a drop-down...Suspendisse at gravida tellus.
            Vivamus placerat maximus ligula nec facilisis. Etiam suscipit at
            risus in luctus. In hac habitasse platea dictumst. Etiam sit amet
            leo et sapien hendrerit fringilla. Sed facilisis condimentum odio in
            luctus. Suspendisse tempus malesuada felis ut volutpat. Etiam eget
            ex convallis, feugiat neque eget, scelerisque orci. Nunc at
            vestibulum tellus, quis mattis ex. Pellentesque suscipit metus dui,
            a luctus velit tincidunt sit amet.
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

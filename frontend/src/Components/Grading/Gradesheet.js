//Event Grade sheet
import React, { useState } from "react";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";

import Maneuver from "./Maneuver";

function Gradesheet() {
  const [dropdown, setDropDown] = useState(false);
  const toggleDropDown = () => {
    setDropDown(!dropdown);
  };

  const mockGradesheetData = {
    eventId: "H3l1c0p73r",
    title: "Helicopter Flight",
    date: "02-Mar-21",
    hours: 5,
    lessonGrade: "Pass",
    status: "Complete",
    type: "flight",
    deviceType: "TH-57C",
    student: {
      name: "Avatar, Aang",
      rank: "1st Lt",
      classNo: 20114851,
      totalMarks: {
        MIF: 70,
        N: 1,
        U: 0,
        F: 0,
        G: 16,
        E: 2,
      },
      score: 1.057143,
      totalCarried: {
        MIF: 351,
        N: 0,
        U: 0,
        F: 1,
        G: 84,
        E: 3,
      },
      NSSCumulative: {
        MIF: 421,
        N: 0,
        U: 0,
        F: 1,
        G: 100,
        E: 5,
      },
      NSSCumulativeScore: 1.016627,
    },
    instructor: {
      name: "Monk, Gyatso",
      rank: "Lt",
      signature: "",
    },
    flightTimelog: {
      fltDur: 1.7,
      fpt: 0.7,
      cpt: 1.0,
      sct: "",
      night: "",
      instrument: {
        act: "",
        sim: "",
      },
      landings: {
        typeNo: "6/6",
      },
      approaches: {
        typeNo: "",
      },
    },
    comments: "Student was amazing!",
    maneuvers: [
      {
        id: 1,
        description: "General Knowledge / Procedures",
        MIF: "4+",
        grade: "G", //corresponds to 4,
        comments: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 2,
        description: "Emer Procedures / Sys Failure",
        MIF: "4+",
        grade: "U", //corresponds to 2
        comments: "",
      },
      {
        id: 3,
        description: "No Hover Takeoff",
        MIF: "4+",
        grade: "F", //corresponds to 3
        comments:
          "Praesent tempus ligula suscipit mauris pretium, id sodales ligula placerat. Nulla malesuada laoreet bibendum. Nam a dapibus lacus, sed pellentesque diam. Proin ligula lorem, hendrerit in facilisis id, sagittis non magna. Aliquam pellentesque ut tellus non ornare. Integer suscipit dui ut quam aliquet ultricies. Pellentesque auctor odio ut tellus maximus suscipit. Donec finibus risus euismod tellus ullamcorper aliquam. Integer dolor tellus, rutrum et risus id, lobortis consequat sem.",
      },
      {
        id: 4,
        description: "Low-level Navigation",
        MIF: "4+",
        grade: "E", //corresponds to 5
        comments:
          "Nam quis sollicitudin lectus. Sed mi elit, sollicitudin at mi eu, dapibus pharetra orci. Etiam eu neque vitae mauris mollis interdum. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
      },
      {
        id: 5,
        description: "Special Syllabus Requirements",
        MIF: "1",
        grade: "N", //corresponds to 1 (not graded)
        comments:
          "Nulla at congue orci. Nulla ut leo ipsum. Sed fringilla libero a magna aliquet sodales. Nam feugiat quam vitae congue hendrerit. Suspendisse ac eros euismod nisi lacinia ultricies. Ut vel tempus justo, eu consectetur sapien. Suspendisse at gravida tellus. Vivamus placerat maximus ligula nec facilisis. Etiam suscipit at risus in luctus. In hac habitasse platea dictumst. Etiam sit amet leo et sapien hendrerit fringilla. Sed facilisis condimentum odio in luctus. Suspendisse tempus malesuada felis ut volutpat. Etiam eget ex convallis, feugiat neque eget, scelerisque orci. Nunc at vestibulum tellus, quis mattis ex. Pellentesque suscipit metus dui, a luctus velit tincidunt sit amet.",
      },
    ],
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
            <div className="col-1">
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

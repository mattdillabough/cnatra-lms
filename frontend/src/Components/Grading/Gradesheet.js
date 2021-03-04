//Event Grade sheet
import React from "react";
// import {RiArrowDownSFill} from "react-icons/ri";

import Maneuver from "./Maneuver";

function Gradesheet(){
  const mockGradesheetData = {
    eventId: "H3l1c0p73r",
    title: "Helicopter Procedures",
    date: "02-Mar-21",
    hours: 5,
    lessonGrade: "pass",
    status: "complete",
    type: "flight",
    deviceType: "TH-57C",
    student: {
      name: "Avatar, Aang",
      rank: "1stLt",
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
      }
    },
    comments: "Student was amazing!",
    manuvers: [
     { id: 1,
      description: "General Knowledge / Procedures",
      MIF: "4+",
      grade: "G", //corresponds to 4
      },
     { id: 2,
      description: "Emer Procedures / Sys Failure",
      MIF: "4+",
      grade: "U", //corresponds to 2
      },
     { id: 3,
      description: "No Hover Takeoff",
      MIF: "4+",
      grade: "F", //corresponds to 3
      },
     { id: 4,
      description: "Low-level Navigation",
      MIF: "4+",
      grade: "E", //corresponds to 5
      },
     { id: 5,
      description: "Special Syllabus Requirements",
      MIF: "1",
      grade: "N", //corresponds to 1 (not graded)
      },
    ]
  }

  return(
    <div className="Gradesheet container">
      <h2 className="event-identifier">[Event ID] - [Event Name]</h2>
        <Maneuver/>
    </div>
  )
}

export default Gradesheet;

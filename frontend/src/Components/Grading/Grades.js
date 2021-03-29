import React from "react";
import { Link } from "react-router-dom";

function Grades() {
  //Would receive from redux store
  const mockGradeData = {
    gradesheetId: "2402007d1bab4f61a1f2238c93ab72cb",
    phaseName: "Helicopter",

    pastGradebooks: [
      { gradesheetId: "Pr1marY", phaseName: "Primary" },
      { gradesheetId: "G40un9", phaseName: "Ground" },
      { gradesheetId: "07h3r", phaseName: "Other Course" },
    ],
  };

  return (
    <div className="Grades container-fluid">
      <h2>This is the landing page for Grades</h2>
      <div className="container">
        <div className="card-group">
          <h4 className="cardgroup-title">Current Phase Gradebook</h4>
          <div className="card">
            <label className="card-title">{mockGradeData.phaseName}</label>
            <Link to={`/Grades/${mockGradeData.gradesheetId}`}>
              <button type="button">Open Gradebook</button>
            </Link>
          </div>
        </div>
        <div className="card-group">
          <h4 className="cardgroup-title">Past Gradebooks</h4>
          {mockGradeData.pastGradebooks.map((phase, idx) => {
            return (
              <div className="card" key={`phase_${idx}`}>
                <label className="card-title">{phase.phaseName}</label>
                <Link to={`/Grades/${phase.gradesheetId}`}>
                  <button type="button">Open Gradebook</button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Grades;

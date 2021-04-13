import React from "react";
import { Link } from "react-router-dom";

function Grades() {
  //Would receive from redux store
  const mockGradeData = {
    gradesheetId: "d6a592f205a046a284c0b5ac4f358986",
    phaseStage: "Helicopter-navigation",

    pastGradebooks: [
      { gradesheetId: "Pr1marY", phaseStage: "Primary" },
      { gradesheetId: "G40un9", phaseStage: "Ground" },
      { gradesheetId: "07h3r", phaseStage: "Other Course" },
    ],
  };

  return (
    <div className="Grades container-fluid">
      <h2>This is the landing page for Grades</h2>
      <div className="container">
        <div className="card-group">
          <h4 className="cardgroup-title">Current Phase Gradebook</h4>
          <div className="card">
            <label className="card-title">{mockGradeData.phaseStage}</label>
            <Link to={`/Grades/${mockGradeData.phaseStage}`}>
              <button type="button">Open Gradebook</button>
            </Link>
          </div>
        </div>
        <div className="card-group">
          <h4 className="cardgroup-title">Past Gradebooks</h4>
          {mockGradeData.pastGradebooks.map((phase, idx) => {
            return (
              <div className="card" key={`phase_${idx}`}>
                <label className="card-title">{phase.phaseStage}</label>
                <Link to={`/Grades/${phase.phaseStage}`}>
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

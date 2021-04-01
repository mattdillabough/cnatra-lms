import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { fetchStudent } from "../../Store/students";

function Grades() {
  //Would receive from redux store
  const mockGradeData = {
    gradesheetId: "e6a6d719f136442db539a501c2428bde",
    phaseName: "Helicopter",

    pastGradebooks: [
      { gradesheetId: "Pr1marY", phaseName: "Primary" },
      { gradesheetId: "G40un9", phaseName: "Ground" },
      { gradesheetId: "07h3r", phaseName: "Other Course" },
    ],
  };

  const userId = "bb7cefa2936648bdaab12ea89b048bec"; //student id

  const { student } = useSelector((state) => state.students);
  const dispatch = useDispatch();

  //Fetching student info here, but it's assumed that after clicking 'Open Gradebook' the user would probably choose a student's gradebook to view
  useEffect(() => {
    if (!student?.first_name) {
      dispatch(fetchStudent(userId));
    }
  }, [dispatch, student]);

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

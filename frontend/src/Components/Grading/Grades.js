import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { fetchStages } from "../../Store/stages";

function Grades() {
  //Grades should receive all the stages active in the current phase & past stages graded (for instructor)
  const mockGradeData = {
    phaseName: "Helicopter",
    gradesheetId: "d6a592f205a046a284c0b5ac4f358986",
    phaseStage: "Navigation",

    pastGradebooks: [
      { gradesheetId: "Pr1marY", phaseStage: "Primary" },
      { gradesheetId: "G40un9", phaseStage: "Ground" },
      { gradesheetId: "07h3r", phaseStage: "OtherCourse" },
    ],
  };

  const dispatch = useDispatch();
  //Fetch references for each stage in the current phase. The references would be used to link each gradebook to each Link option and pass along its identifier.
  const { stages } = useSelector((state) => state.stages);

  useEffect(() => {
    if (!stages?.length) {
      dispatch(fetchStages());
    }
  }, [dispatch, stages]);

  if (!stages || !stages.length) {
    return (
      <div className="container text-center">
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div className="Grades container-fluid">
      <h2 className="text-center" title="Phase name">
        {mockGradeData.phaseName}
      </h2>
      <div className="container">
        <div className="card-group">
          <h4 className="cardgroup-title">Active Gradebooks</h4>
          <div className="card">
            <label className="card-title" title="stage">
              {mockGradeData.phaseStage}
            </label>
            {/* Here a defined state is passed to this Link but should be changed to map out the appropriate stage value once there is more stage/grade data */}
            <Link
              to={{
                pathname: `/Grades/${mockGradeData.phaseName.toLowerCase()}/${mockGradeData.phaseStage.toLowerCase()}`,
                state: stages[0],
              }}
            >
              <button type="button">Open Gradebook</button>
            </Link>
          </div>
        </div>
        <div className="card-group">
          <h4 className="cardgroup-title">Past Gradebooks</h4>
          {mockGradeData.pastGradebooks.map((phase, idx) => {
            return (
              <div className="card" key={`phase_${idx}`}>
                <label className="card-title" title="stage">
                  {phase.phaseStage}
                </label>
                <Link to="#">
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

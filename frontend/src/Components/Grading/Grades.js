import React from "react"
import {Link} from "react-router-dom"

function Grades() {
  //Would receive from redux store
  const mockGradeData = {
    phaseId: "H3l1c0p73r",
    phaseName: "Helicopter",

    pastGradebooks: [
      { phaseId: "Pr1marY",
      phaseName: "Primary",
      },
      { phaseId: "G40un9",
      phaseName: "Ground",
      },
      { phaseId: "07h3r",
      phaseName: "Other Course",
      },
    ]
  }

  return(
    <div className="Grades container-fluid">
      <h2 >This is the landing page for Grades</h2>
      <div className="container">
        <div className="card-group">
          <h3 className="cardgroup-title">Current Phase Gradebook</h3>
          <div className="card">
            <label className="card-title">{mockGradeData.phaseName}</label>
            <Link to={`/Grades/${mockGradeData.phaseId}`}>
            <button type="button">Open Gradebook</button>
            </Link>
          </div>
        </div>
        <div className="card-group">
          <h3 className="cardgroup-title">Past Gradebooks</h3>
          {mockGradeData.pastGradebooks.map((phase, idx)=>{
            return (
              <div className="card" key={`phase_${idx}`}>
                <label className="card-title">{phase.phaseName}</label>
                <Link to={`/Grades/${phase.phaseId}`}>
                  <button type="button">Open Gradebook</button>
                 </Link>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Grades;

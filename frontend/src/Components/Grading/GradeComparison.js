import React from "react";

function GradeComparison() {
  /*TODO:
  - Receive data for all maneuver data for events in a phase/stage/block
  - Add links to each respective gradesheet in header
  - Conditionally style
  */
  return (
    <>
      <div className="container">
        Grade Comparisons Hardcoded
        <div className="table-responsive">
          <table className="table table-light table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Maneuvers</th>
                <th scope="col">MIF</th>
                {/* Columns passed here should probably be mapped out given the number of events being compared/ events in block/stage/phase */}
                <th scope="col">Evt1</th>
                <th scope="col">Evt2</th>
                <th scope="col">Evt3</th>
                <th scope="col">Evt4</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-success">
                <th scope="row">1</th>
                <td>General Knowledge / Procedures</td>
                <td>4+</td>
                <td>3</td>
                <td>4</td>
                <td>4</td>
                <td>4</td>
              </tr>
              <tr className="table-success">
                <th scope="row">2</th>
                <td>Emergency Procedures / System Failure</td>
                <td>4+</td>
                <td>0</td>
                <td>4</td>
                <td>4</td>
                <td>4</td>
              </tr>
              <tr className="table=secondary">
                <th scope="row">3</th>
                <td>Headwork / Situational Awareness</td>
                <td>1</td>
                <td>0</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr className="table-danger">
                <th scope="row">4</th>
                <td>Basic Air Work</td>
                <td>4+</td>
                <td>0</td>
                <td>2</td>
                <td>2</td>
                <td>2</td>
              </tr>
              <tr className="table-warning">
                <th scope="row">5</th>
                <td>Flight Planning</td>
                <td>4+</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr className="table-warning">
                <th scope="row">6</th>
                <td>Ground Operations</td>
                <td>4+</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td className="bg-danger">0</td>
              </tr>
              <tr className="table-success">
                <th scope="row">7</th>
                <td>CRM</td>
                <td>4+</td>
                <td>3</td>
                <td>4</td>
                <td>4</td>
                <td>4</td>
              </tr>
              <tr className="table-success">
                <th scope="row">8</th>
                <td>Cockpit Management</td>
                <td>4+</td>
                <td>4</td>
                <td>4</td>
                <td>4</td>
                <td>4</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default GradeComparison;

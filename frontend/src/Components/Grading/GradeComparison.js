import React, { useState, useEffect } from "react";
import { useTable } from "react-table";
import { useSelector, useDispatch } from "react-redux";

import { fetchManeuvers, fetchGrades } from "../../Store/eventsInStage";
import { fetchStudent } from "../../Store/students";

import configureData from "./stageGradeConfig";

function GradeComparison(props) {
  /*TODO:
  - Add links to each respective gradesheet in header
  - Conditionally style
  */
  const dispatch = useDispatch();
  const { student } = useSelector((state) => state.students);

  //Fetch student info if not already available
  useEffect(() => {
    if (!student?.first_name) {
      dispatch(fetchStudent(props.match.params.username));
    }
  }, [dispatch, student, props.match.params.username]);

  //Fetch grade comparison grades
  useEffect(() => {
    if (student?.first_name) {
      const gradeSheetIds = student.grade_sheets.map((gradesheet) => {
        return {
          eventCode: gradesheet.event.event_code,
          id: gradesheet.grade_sheet_id,
        };
      });
      dispatch(fetchGrades(gradeSheetIds));
    }
  }, [dispatch, student]);

  //Fetch grade comparison maneuvers
  useEffect(() => {
    dispatch(fetchManeuvers("N"));
  }, [dispatch]);

  const { stageEvents, stageGrades } = useSelector((state) => state.EIS);

  const [columns, setColumns] = useState([]);
  const [data, setData] = useState([]);

  //Formatting data for table
  useEffect(() => {
    if (stageEvents && stageGrades) {
      let { columns, data } = configureData(stageEvents.maneuvers, stageGrades);
      setColumns(columns);
      setData(data);
    }
  }, [stageEvents, stageGrades]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  if (!student?.first_name || !stageEvents || !stageGrades) {
    return (
      <div className="container text-center">
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <>
      <div className="container">
        <h4 className="row text-capitalize">
          <span className="col-sm-12 col-md-3 text-sm-center text-md-start">{`${student.last_name}, ${student.first_name}`}</span>
          <span className="col-sm-12 col-md-9 text-md-end">
            {`${props.match.params.phaseName} - ${props.match.params.stageName}`}{" "}
            Grade Comparison
          </span>
        </h4>
        <div className="table-responsive">
          <table className="table table-light table-hover" {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row);

                return (
                  <tr
                    {...row.getRowProps({
                      className:
                        row.cells[row.cells.length - 1].value >=
                        Number(row.values.MIF.slice(0, 1))
                          ? "pass-MIF"
                          : "below-MIF",
                    })}
                  >
                    {row.cells.map((cell) => {
                      return (
                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );

  // return (
  //   <>
  //     <div className="container">
  //       <div className="table-responsive">
  //         <table className="table table-light table-striped table-hover">
  //           <thead>
  //             <tr>
  //               <th scope="col">#</th>
  //               <th scope="col">Maneuvers</th>
  //               <th scope="col">MIF</th>
  //               <th scope="col">Evt1</th>
  //               <th scope="col">Evt2</th>
  //               <th scope="col">Evt3</th>
  //               <th scope="col">Evt4</th>
  //             </tr>
  //           </thead>
  //           <tbody>
  //             <tr className="table-success">
  //               <th scope="row">1</th>
  //               <td>General Knowledge / Procedures</td>
  //               <td>4+</td>
  //               <td>3</td>
  //               <td>4</td>
  //               <td>4</td>
  //               <td>4</td>
  //             </tr>
  //             <tr className="table-success">
  //               <th scope="row">2</th>
  //               <td>Emergency Procedures / System Failure</td>
  //               <td>4+</td>
  //               <td>0</td>
  //               <td>4</td>
  //               <td>4</td>
  //               <td>4</td>
  //             </tr>
  //             <tr className="table=secondary">
  //               <th scope="row">3</th>
  //               <td>Headwork / Situational Awareness</td>
  //               <td>1</td>
  //               <td>0</td>
  //               <td>1</td>
  //               <td>1</td>
  //               <td>1</td>
  //             </tr>
  //             <tr className="table-danger">
  //               <th scope="row">4</th>
  //               <td>Basic Air Work</td>
  //               <td>4+</td>
  //               <td>0</td>
  //               <td>2</td>
  //               <td>2</td>
  //               <td>2</td>
  //             </tr>
  //             <tr className="table-warning">
  //               <th scope="row">5</th>
  //               <td>Flight Planning</td>
  //               <td>4+</td>
  //               <td>0</td>
  //               <td>0</td>
  //               <td>0</td>
  //               <td>0</td>
  //             </tr>
  //             <tr className="table-warning">
  //               <th scope="row">6</th>
  //               <td>Ground Operations</td>
  //               <td>4+</td>
  //               <td>0</td>
  //               <td>0</td>
  //               <td>0</td>
  //               <td className="bg-danger">0</td>
  //             </tr>
  //             <tr className="table-success">
  //               <th scope="row">7</th>
  //               <td>CRM</td>
  //               <td>4+</td>
  //               <td>3</td>
  //               <td>4</td>
  //               <td>4</td>
  //               <td>4</td>
  //             </tr>
  //             <tr className="table-success">
  //               <th scope="row">8</th>
  //               <td>Cockpit Management</td>
  //               <td>4+</td>
  //               <td>4</td>
  //               <td>4</td>
  //               <td>4</td>
  //               <td>4</td>
  //             </tr>
  //           </tbody>
  //         </table>
  //       </div>
  //     </div>
  //   </>
  // );
}

export default GradeComparison;

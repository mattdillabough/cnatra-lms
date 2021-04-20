import React, { useState, useEffect } from "react";
import { useTable } from "react-table";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import Loading from "../Utils/Loading";

import { fetchManeuvers, fetchGrades } from "../../Store/eventsInStage";
import { fetchStudent } from "../../Store/students";
import { setGradeSheetId } from "../../Store/grades";

import configureData from "./stageGradeConfig";

function GradeComparison(props) {
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

  //Retrieve data for table
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

  function styleRows(MIF, value) {
    let computedClass = "";
    let requirement = MIF.slice(MIF.length - 1) === "+" ? true : false;
    let numMIF = Number(MIF.slice(0, 1));
    if (requirement) {
      if (value === 0) {
        computedClass += "incomplete-maneuver incomplete";
      } else {
        if (value >= numMIF) {
          computedClass += "pass-MIF";
        } else {
          computedClass += "below-MIF";
        }
      }
    } else {
      if (value >= numMIF) {
        computedClass += "not-required-maneuver";
      } else {
        computedClass += "not-required-maneuver incomplete";
      }
    }
    return computedClass;
  }

  //Will save gradesheetId in redux
  function setGradeSheet() {
    dispatch(setGradeSheetId(student.grade_sheets[0].grade_sheet_id));
  }

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
    initialState: { hiddenColumns: ["grade_status"] },
  });

  if (!student?.first_name || !stageEvents || !stageGrades) {
    return <Loading />;
  }

  return (
    <>
      <div className="GradeComparison container">
        <div className="table-responsive">
          <h5 className="row text-capitalize p-2">
            <span className="p-0 col-sm-12 col-md-3">{`${student.last_name}, ${student.first_name}`}</span>
            <span className="p-0 col-sm-12 col-md-9">
              {`${props.match.params.phaseName} - ${props.match.params.stageName}`}{" "}
              Grade Comparison
            </span>
          </h5>
          <table className="table table-light table-hover" {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => {
                    if (column.id.slice(0, 5) === "event") {
                      return (
                        <th {...column.getHeaderProps()}>
                          <Link
                            onClick={() => setGradeSheet(column.grade_sheet)}
                            to={(location) => ({
                              ...location,
                              pathname: `${location.pathname}/${column.Header}`,
                            })}
                          >
                            {column.render("Header")}
                          </Link>
                        </th>
                      );
                    }
                    return (
                      <th {...column.getHeaderProps()}>
                        {column.render("Header")}
                      </th>
                    );
                  })}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <tr
                    {...row.getRowProps({
                      className: `maneuver
                        ${styleRows(row.values.MIF, row.values.grade_status)}
                        `,
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
}

export default GradeComparison;

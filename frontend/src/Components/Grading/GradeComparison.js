import React, { useMemo, useEffect } from "react";
import { useTable } from "react-table";
import { useSelector, useDispatch } from "react-redux";

import { fetchEvents } from "../../Store/eventsInStage";

function GradeComparison() {
  /*TODO:
  - Receive data for all maneuver data for events in a phase/stage/block
  - Add links to each respective gradesheet in header
  - Conditionally style
  */

  //Fetch grade comparison data
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEvents("N"));
  }, [dispatch]);

  const { stageEvents } = useSelector((state) => state.EIS);
  console.log("EIS maneuvers: ", stageEvents);

  const data = useMemo(
    () => [
      {
        maneuver_id: 1,
        maneuver: "GENERAL KNOWLEDGE/PROCEDURES",
        MIF: "4+",
        event_code1: 0,
        event_code2: 4,
      },
      {
        maneuver_id: 2,
        maneuver: "EMER PROCEDURES/SYS FAILURES",
        MIF: "4+",
        event_code1: 3,
        event_code2: 2,
      },
      {
        maneuver_id: 3,
        maneuver: "HEADWORK/SITUATIONAL AWARENESS",
        MIF: "4+",
        event_code1: 0,
        event_code2: 0,
      },
      {
        maneuver_id: 4,
        maneuver: "BASIC AIR WORK",
        MIF: "4+",
        event_code1: 3,
        event_code2: 0,
      },
      {
        maneuver_id: 5,
        maneuver: "FLIGHT PLANNING",
        MIF: "4+",
        event_code1: 4,
        event_code2: 0,
      },
      {
        maneuver_id: 6,
        maneuver: "GROUND OPERATIONS",
        MIF: "4+",
        event_code1: 2,
        event_code2: 4,
      },
      {
        maneuver_id: 7,
        maneuver: "CRM",
        MIF: "1",
        event_code1: 0,
        event_code2: 0,
      },
      {
        maneuver_id: 8,
        maneuver: "COCKPIT MANAGEMENT",
        MIF: "1",
        event_code1: 0,
        event_code2: 0,
      },
      {
        maneuver_id: 9,
        maneuver: "OTHER",
        MIF: "1",
        event_code1: 0,
        event_code2: 0,
      },
      {
        maneuver_id: 10,
        maneuver: "OTHER",
        MIF: "1",
        event_code1: 0,
        event_code2: 0,
      },
      {
        maneuver_id: 11,
        maneuver: "OTHER",
        MIF: "1",
        event_code1: 0,
        event_code2: 0,
      },
      {
        maneuver_id: 12,
        maneuver: "OTHER",
        MIF: "1",
        event_code1: 0,
        event_code2: 0,
      },
      {
        maneuver_id: 13,
        maneuver: "OTHER",
        MIF: "1",
        event_code1: 0,
        event_code2: 0,
      },
      {
        maneuver_id: 14,
        maneuver: "OTHER",
        MIF: "1",
        event_code1: 0,
        event_code2: 0,
      },
      {
        maneuver_id: 15,
        maneuver: "OTHER",
        MIF: "1",
        event_code1: 0,
        event_code2: 0,
      },
      {
        maneuver_id: 16,
        maneuver: "OTHER",
        MIF: "1",
        event_code1: 0,
        event_code2: 0,
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: "#",
        accessor: "maneuver_id",
      },
      {
        Header: "Maneuver",
        accessor: "maneuver",
      },
      {
        Header: "MIF",
        accessor: "MIF",
      },
      {
        Header: "N4301",
        accessor: "event_code" + String(1), //event_code + event_in_block
      },
      {
        Header: "N4302",
        accessor: "event_code" + String(2),
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <>
      <div className="container">
        <div className="table-responsive">
          <table
            className="table table-light table-hover table-striped"
            {...getTableProps()}
          >
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
                  <tr {...row.getRowProps()}>
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

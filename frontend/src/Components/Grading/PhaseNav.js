import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { fetchStudent } from "../../Store/students";
import mockStdData from "./mockStudentData";

function PhaseNav(props) {
  const userId = "bb7cefa2936648bdaab12ea89b048bec"; //student id

  const { student } = useSelector((state) => state.students);
  const dispatch = useDispatch();

  //Fetching a specific student's info here, but it's assumed that when the user clicks the button to open this phase's gradebook a class roster will be provided to this component to map out
  useEffect(() => {
    if (!student?.first_name) {
      dispatch(fetchStudent(userId));
    }
  }, [dispatch, student]);
  console.log("Student info: ", student);

  if (!student || !student.first_name) {
    return (
      <div className="container">
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <>
      <div className="container">
        Students will be listed here
        <div>
          <div>{`${student.last_name}, ${student.first_name}`}</div>
          <button type="button">View Grade Comparison</button>
          <Link
            to={`/Grades/${props.match.params.phaseName}/${student.grade_sheets[0].grade_sheet_id}`}
          >
            <button type="button">Most Recent Grade</button>
          </Link>
        </div>
        {mockStdData.map((stdt, idx) => {
          return (
            <div key={`${stdt.user_id}_${idx}`}>
              <div>{`${stdt.last_name}, ${stdt.first_name}`}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default PhaseNav;

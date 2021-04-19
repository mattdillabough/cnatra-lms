import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import Loading from "../Utils/Loading";

import { fetchStudent } from "../../Store/students";
import mockStdData from "./mockStudentData";

function StageNav(props) {
  const userName = "danielcanham"; //student username

  const { student } = useSelector((state) => state.students);
  const dispatch = useDispatch();

  //Fetching a specific student's info here, but it's assumed that when the user clicks the button to open this phase's gradebook a class roster will be provided to this component to map out
  useEffect(() => {
    if (!student?.first_name) {
      dispatch(fetchStudent(userName));
    }
  }, [dispatch, student]);

  if (!student || !student.first_name || !props) {
    return <Loading />;
  }

  return (
    <>
      <div className="stageNav container text-center">
        <div className="h2-header student-row row justify-content-center">
          Class Roster
        </div>
        <div className="student-row row row-columns-3 mx-xs-1">
          <div className="col-sm-12 col-md-3">{`${student.last_name}, ${student.first_name}`}</div>
          <div className="col-sm-12 col-md-9">
            <div className="row">
              <div className="col">
                <Link
                  to={(location) => ({
                    ...location,
                    pathname: `${location.pathname}/${student.username}`,
                    state: {
                      stage_code: props?.location?.state?.stage,
                    },
                  })}
                >
                  <button className="px-3 m-0.5" type="button">
                    Grade Comparison
                  </button>
                </Link>
              </div>
              <div className="col">
                <label>
                  {/* View Most Recent Gradesheet: */}
                  <Link
                    to={(location) => ({
                      pathname: `${location.pathname}/${student.username}/${student.grade_sheets[0].event.event_code}`,
                      state: {
                        gradesheetId: student.grade_sheets[0].grade_sheet_id,
                      },
                    })}
                  >
                    <button className="px-3 m-0.5" type="button">
                      Most Recent
                    </button>
                  </Link>
                </label>
              </div>
            </div>
          </div>
        </div>
        {mockStdData.map((stdt, idx) => {
          return (
            <div
              key={`${stdt.user_id}_${idx}`}
              className="student-row row row-columns-3 mx-xs-1"
            >
              <div className="col-sm-12 col-md-3">{`${stdt.last_name}, ${stdt.first_name}`}</div>
              <div className="col-sm-12 col-md-9">
                <div className="row">
                  <div className="col">
                    <label>
                      {/* View Grade Progression: */}
                      <button className="px-3 m-0.5" type="button">
                        Grade Comparison
                      </button>
                    </label>
                  </div>
                  <div className="col">
                    <label>
                      {/* View Most Recent Gradesheet: */}
                      <Link to={`#`}>
                        <button className="px-3 m-0.5" type="button">
                          Most Recent
                        </button>
                      </Link>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default StageNav;

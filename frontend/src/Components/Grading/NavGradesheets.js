import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

function NavGradesheets({
  direction,
  EIB,
  sheet_code,
  sheet_id,
  length,
  phase,
  stage,
  username,
}) {
  //EIB = Event in block

  return (
    <>
      {direction === "prev" ? (
        <Link
          to={{
            pathname: `/Grades/${phase}/${stage}/${username}/${sheet_code}`,
            state: { gradesheetId: sheet_id },
          }}
          className="nav-sheets-lk"
        >
          <button disabled={EIB && EIB === 1}>
            <div className="nav-sheets">
              <IoIosArrowDropleft />
              <span>{sheet_code || "Prev"}</span>
            </div>
          </button>
        </Link>
      ) : (
        <Link
          to={{
            pathname: `/Grades/${phase}/${stage}/${username}/${sheet_code}`,
            state: { gradesheetId: sheet_id },
          }}
          className="nav-sheets-lk"
        >
          <button disabled={EIB === length}>
            <div className="nav-sheets">
              <span>{sheet_code || "Next"}</span>
              <IoIosArrowDropright />
            </div>
          </button>
        </Link>
      )}
    </>
  );
}

export default NavGradesheets;

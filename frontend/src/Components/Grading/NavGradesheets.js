import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

function NavGradesheets({ direction, EIB }) {
  //EIB = Event in block
  const nextGradesheet = "5e5740dac9fb404089bde611c7be4c0c";
  const handleClick = (e) => {
    console.log("clicked: ", e.target.value);
  };

  return (
    <>
      {direction === "prev" ? (
        <button
          className="nav-sheets-btn left"
          disabled={EIB && EIB === 1}
          onClick={handleClick}
        >
          <div className="nav-sheets">
            <IoIosArrowDropleft />
            <span>Previous Gradesheet</span>
          </div>
        </button>
      ) : (
        <Link to={`/Grades/${nextGradesheet}`}>
          <button className="nav-sheets-btn right">
            <div className="nav-sheets">
              <span>Next Gradesheet</span>
              <IoIosArrowDropright />
            </div>
          </button>
        </Link>
      )}
    </>
  );
}

export default NavGradesheets;

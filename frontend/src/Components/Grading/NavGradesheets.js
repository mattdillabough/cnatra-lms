import React from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

function NavGradesheets({ direction }) {
  return (
    <>
      {direction === "prev" ? (
        <button className="nav-sheets-btn left">
          <div className="nav-sheets">
            <IoIosArrowDropleft />
            <span>Previous Gradesheet</span>
          </div>
        </button>
      ) : (
        <button className="nav-sheets-btn right">
          <div className="nav-sheets">
            <span>Next Gradesheet</span>
            <IoIosArrowDropright />
          </div>
        </button>
      )}
    </>
  );
}

export default NavGradesheets;

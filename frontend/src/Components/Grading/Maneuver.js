import React, { useState } from "react";

import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";

function Maneuver({ maneuver }) {
  // console.log("props?", maneuver)
  const [dropdown, setDropDown] = useState(false);
  const toggleDropDown = () => {
    setDropDown(!dropdown);
  };

  const gradeValues = {
    1: "N - Not graded",
    2: "U - Unsafe",
    3: "F - Fair",
    4: "G - Good",
    5: "E - Excellent",
  };

  return (
    <div
      className={
        maneuver.grade >= maneuver.MIF
          ? "maneuver container-fluid"
          : "maneuver container-fluid below-MIF"
      }
    >
      <div className="maneuver-header row">
        <div className="col-10">
          <div className="row">
            <div className="col-sm-12 col-md-8" title="Maneuver Description">
              {maneuver.description || "Maneuver Name"}
            </div>
            <div className="col-6 col-md-2" title={gradeValues[maneuver.grade]}>
              {`Grade: ${maneuver.grade}` || "Grade"}
            </div>
            <div className="col-6 col-md-2" title="Maneuver Item File">
              {`MIF: ${maneuver.MIF}` || "MIF"}
              {maneuver.MIF > 1 ? "+" : ""}
            </div>
          </div>
        </div>
        <div className="col-1">
          <button
            type="button"
            className="toggle-dropdown btn"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
            onClick={toggleDropDown}
          >
            {dropdown ? <RiArrowUpSFill /> : <RiArrowDownSFill />}
          </button>
        </div>
      </div>
      <div
        className={
          dropdown ? "maneuver-body collapse show" : "maneuver-body collapse"
        }
        id="collapseExample"
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        <div title="Maneuver comments">
          {maneuver.comments || "No comments"}
        </div>
      </div>
    </div>
  );
}

export default Maneuver;

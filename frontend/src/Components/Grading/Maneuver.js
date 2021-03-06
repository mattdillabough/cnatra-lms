import React, { useState } from "react";

import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";

function Maneuver({ maneuver }) {
  // console.log("props?", maneuver)
  const [dropdown, setDropDown] = useState(false);
  const toggleDropDown = () => {
    setDropDown(!dropdown);
  };

  return (
    <div className="maneuver container-fluid">
      <div className="maneuver-header row">
        <div className="col-10">
          <div className="row">
            <div className="col-sm-12 col-md-8">
              {maneuver.description || "Maneuver Name"}
            </div>
            <div className="col-6 col-md-2">
              {`Grade: ${maneuver.grade}` || "Grade"}
            </div>
            <div className="col-6 col-md-2">
              {`MIF: ${maneuver.MIF}` || "MIF"}
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
        <div>{maneuver.comments || "No comments"}</div>
      </div>
    </div>
  );
}

export default Maneuver;

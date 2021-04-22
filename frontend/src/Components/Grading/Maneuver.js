import React, { useState, useEffect } from "react";

import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";

function Maneuver({ maneuver, editable, register, idx, expand }) {
  //Manage dropdown state
  const [dropdown, setDropDown] = useState(false);
  const toggleDropDown = () => {
    setDropDown(!dropdown);
  };

  useEffect(() => {
    setDropDown(expand);
  }, [expand]);

  //Required maneuvers have different styling from nonrequired maneuvers
  const requirement = maneuver?.maneuver_item_file.is_required;
  const [maneuverStyling, setManeuverStyling] = useState("");

  //Style maneuvers accordingly
  useEffect(() => {
    if (requirement) {
      if (maneuver?.grade === 0) {
        setManeuverStyling("incomplete-maneuver incomplete");
      } else {
        if (maneuver?.grade >= maneuver?.maneuver_item_file.grade) {
          setManeuverStyling("pass-MIF");
        } else {
          setManeuverStyling("below-MIF");
        }
      }
    } else {
      if (maneuver?.grade >= maneuver?.maneuver_item_file.grade) {
        setManeuverStyling("not-required-maneuver");
      } else {
        setManeuverStyling("not-required-maneuver incomplete");
      }
    }
  }, [maneuver, requirement]);

  //Reference for hover titles
  const gradeValues = {
    0: "Incomplete",
    1: "N - Not graded",
    2: "U - Unsafe",
    3: "F - Fair",
    4: "G - Good",
    5: "E - Excellent",
  };

  return (
    <div className={`maneuver container-fluid ${maneuverStyling}`}>
      <div className="maneuver-header row">
        <div className="col-10">
          <div className="row">
            <div
              className="col-sm-12 col-md-8 text-break"
              title="Maneuver Description"
            >
              {maneuver.maneuver_item_file.maneuver.maneuver || "Maneuver Name"}
            </div>
            {editable ? (
              <div className="col-6 col-md-2">
                {/* For convenience, inputMode attr is set to decimal here to allow a number pad (rather than the normal keyboard) to appear when app is run on a mobile device */}
                <input
                  name={`[${idx}].grade`}
                  className="maneuver-grade"
                  type="number"
                  step={1}
                  min={0}
                  max={5}
                  placeholder="grade"
                  inputMode="decimal"
                  defaultValue={maneuver?.grade || 0}
                  ref={register({ min: 0, max: 5, required: requirement })}
                ></input>
              </div>
            ) : (
              <div
                className="col-6 col-md-2"
                title={`${requirement ? gradeValues[maneuver.grade] : ""} ${
                  maneuver.grade >= maneuver.maneuver_item_file.grade
                    ? ""
                    : "- below MIF"
                }`}
              >
                {`Grade: ${maneuver.grade}` || "--"}
              </div>
            )}
            <div
              className="col-6 col-md-2"
              title={
                requirement
                  ? "Maneuver Item File - required"
                  : "Maneuver Item File - NOT required"
              }
            >
              {`MIF: ${maneuver.maneuver_item_file.grade}` || "MIF"}
              {requirement ? "+" : ""}
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
        className={`maneuver-body collapse px-2
         ${dropdown ? "show" : ""}`}
        id="collapseExample"
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        {editable ? (
          <textarea
            name={`[${idx}].comments`}
            defaultValue={maneuver?.comments}
            placeholder="Maneuver comments"
            rows="4"
            ref={register}
          ></textarea>
        ) : (
          <div title="Maneuver comments">
            {maneuver.comments || "No comments"}
          </div>
        )}
      </div>
    </div>
  );
}

export default Maneuver;

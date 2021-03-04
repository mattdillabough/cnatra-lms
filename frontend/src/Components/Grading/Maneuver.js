import React from "react";

import {RiArrowDownSFill} from "react-icons/ri";


function Maneuver(){
  return(
    <div className="maneuver container-fluid">
        <div className="maneuver-header">
          <div>Manuver Name</div>
          <div>Grade</div>
          <div>MIF</div>
          <button type="button"><RiArrowDownSFill/></button>
        </div>
        <div className="maneuver-body">
          <div></div>
        </div>
      </div>
  )
}

export default Maneuver;

import React from "react";

import {RiArrowDownSFill} from "react-icons/ri";


function Maneuver({maneuver}){
  // console.log("props?", maneuver)
  return(
    <div className="maneuver container-fluid">
        <div className="maneuver-header">
          <div>{maneuver.description|| "Maneuver Name"}</div>
          <div>{maneuver.grade||"Grade"}</div>
          <div>{maneuver.MIF||"MIF"}</div>
          <button type="button"><RiArrowDownSFill/></button>
        </div>
        <div className="maneuver-body">
          <div>{maneuver.comments||"No comments"}</div>
        </div>
      </div>
  )
}

export default Maneuver;

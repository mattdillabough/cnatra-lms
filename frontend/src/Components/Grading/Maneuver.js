import React, {useState} from "react";

import {RiArrowDownSFill} from "react-icons/ri";


function Maneuver({maneuver}){
  // console.log("props?", maneuver)
  const [dropdown, setDropDown] = useState(false);
  const toggleDropDown = () => {setDropDown(!dropdown)}

  return(
    <div className="maneuver container-fluid">
        <div className="maneuver-header">
          <div>{maneuver.description|| "Maneuver Name"}</div>
          <div>{maneuver.grade||"Grade"}</div>
          <div>{maneuver.MIF||"MIF"}</div>
          <button type="button" className="toggle-maneuver btn" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" onClick={toggleDropDown}><RiArrowDownSFill/></button>
        </div>
        <div className={dropdown ? "maneuver-body collapse show" : "maneuver-body collapse" } id="collapseExample" aria-expanded="false" aria-controls="collapseExample">
          <div>{maneuver.comments||"No comments"}</div>
        </div>
      </div>
  )
}

export default Maneuver;

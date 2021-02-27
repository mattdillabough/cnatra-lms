import React from "react"
import {FaBars, FaHome, FaGraduationCap} from "react-icons/fa"
import {RiBookMarkLine, RiLogoutBoxLine} from "react-icons/ri"
import {IoSettingsOutline} from "react-icons/io5"
import {IconContext} from "react-icons";

function NavigationBar() {
  return (
    <>
    <IconContext.Provider value={{className: "react-icons"}}>
      <div className="NavigationBar">
        <FaBars title="Open menu"/>
        <FaHome title="Home"/>
        <FaGraduationCap title="Academics"/>
        <RiBookMarkLine title="Gradebooks"/>
        <IoSettingsOutline title="Settings"/>
        <RiLogoutBoxLine title="Logout"/>
      </div>
    </IconContext.Provider>
    </>
  );
}

export default NavigationBar;

import React, {useState} from "react";
import {Link} from "react-router-dom";

import {FaBars} from "react-icons/fa";
import {RiLogoutBoxLine} from "react-icons/ri";
import {IoClose} from "react-icons/io5";
import {IconContext} from "react-icons";

import SubNav from "./SubNavigation";

//Thinking we can conditionally load nav icons based on type of user
import InstructorSidebarData from "./InstructorSidebarData";

function NavigationBar() {
  const [sidebar, setSidebar] = useState(false);

  //Toggles state of sidebar
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
    <IconContext.Provider value={{className: "react-icons"}}>
      <div className={sidebar? "NavigationBar open": "NavigationBar"}>
          <Link to="#" >
            <FaBars className="menu-bars tray-icon" title="Open menu" onClick={showSidebar}/>
          </Link>
          {InstructorSidebarData.map((nav, idx)=>{
            return(
                <Link key={`navIcon_${idx}`} to={nav.path} className="tray-icon">
                  {nav.icon}
                </Link>
             )
          })}
          <Link to="/Logout">
            <RiLogoutBoxLine className="tray-icon" title="Logout"/>
          </Link>
      </div>
      <nav className={sidebar? "nav-menu active": "nav-menu"}>
        <ul className="nav-menu-items" >
          <li className="navbar-toggle" >
                <Link to="#" className="menu-bars tray-icon">
                  <IoClose title="close"onClick={showSidebar}/>
                </Link>
          </li>
              {InstructorSidebarData.map((navItem, idx)=>{
                return(
                  <SubNav key={`navItem_${idx}`} item={navItem}/>
              )
            })}
          <li className="nav-text" onClick={showSidebar}>
            <Link to="/Logout">
              <RiLogoutBoxLine title="Logout"/>
              <span>Logout</span>
            </Link>
          </li>
        </ul>
      </nav>
    </IconContext.Provider>
    </>
  );
}

export default NavigationBar;
import React, {useState} from "react"
import {Link} from "react-router-dom";

import {FaBars} from "react-icons/fa"
import {RiLogoutBoxLine} from "react-icons/ri"
import {IoClose} from "react-icons/io5"
import {IconContext} from "react-icons";

//Thinking we can conditionally load nav icons based on type of user
import InstructorSidebarData from "./InstructorSidebarData";

function NavigationBar() {
  const [sidebar, setSidebar] = useState(false);

  //Toggles state of sidebar
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
    <IconContext.Provider value={{className: "react-icons"}}>
      <div className="NavigationBar">
          <Link to="#" className="menu-bars">
            <FaBars title="Open menu" onClick={showSidebar}/>
          </Link>
          {InstructorSidebarData.map((nav, idx)=>{
            return(
                <Link key={`navIcon_${idx}`} to={nav.path}>
                  {nav.icon}
                </Link>
             )
          })}
          <Link to="/Logout">
            <RiLogoutBoxLine title="Logout"/>
          </Link>
      </div>
      <nav className={sidebar? "nav-menu active": "nav-menu"}>
        <ul className="nav-menu-items" >
          <li className="navbar-toggle" onClick={showSidebar}>
                <Link to="#" className="menu-bars">
                  <IoClose title="close"/>
                </Link>
          </li>
              {InstructorSidebarData.map((nav, idx)=>{
                return(
                  <li key={idx} className={nav.cName} onClick={showSidebar}>
                    <Link to={nav.path}>
                      {nav.icon}
                      <span>{nav.title}</span>
                    </Link>
                </li>
              )
            })}
          <li className="nav-text">
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

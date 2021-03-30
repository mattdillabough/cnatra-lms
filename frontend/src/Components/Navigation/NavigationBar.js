import React from "react";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { TOGGLE_NAVBAR } from "../../Store/navigation";

import { FaBars } from "react-icons/fa";
import { RiLogoutBoxLine } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { IconContext } from "react-icons";

import SubNav from "./SubNavigation";

//Thinking we can conditionally load nav icons based on type of user
import InstructorSidebarData from "./InstructorSidebarData";

function NavigationBar() {
  const navbar = useSelector((state) => state.navigation.navBar);
  const dispatch = useDispatch();

  //Toggles state of sidebar
  // const showSidebar = () => setSidebar(!sidebar);
  const showSidebar = () => dispatch({ type: TOGGLE_NAVBAR });

  return (
    <>
      <IconContext.Provider value={{ className: "react-icons" }}>
        <div className={navbar ? "NavigationBar open" : "NavigationBar"}>
          <Link to="#" className="tray-icon">
            <FaBars
              className="menu-bars"
              title="Open menu"
              onClick={showSidebar}
            />
          </Link>
          {InstructorSidebarData.map((nav, idx) => {
            return (
              <Link key={`navIcon_${idx}`} to={nav.path} className="tray-icon">
                {nav.icon}
              </Link>
            );
          })}
          <Link to="/Logout" className="tray-icon">
            <RiLogoutBoxLine title="Logout" />
          </Link>
        </div>
        <nav className={navbar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items">
            <li className="navbar-toggle">
              <Link to="#" className="tray-icon">
                <IoClose
                  className="close"
                  title="close"
                  onClick={showSidebar}
                />
              </Link>
            </li>
            {InstructorSidebarData.map((navItem, idx) => {
              return (
                <SubNav
                  key={`navItem_${idx}`}
                  item={navItem}
                  onClick={() => showSidebar}
                />
              );
            })}
            <li className="nav-text" onClick={showSidebar}>
              <Link to="/Logout">
                <RiLogoutBoxLine title="Logout" />
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

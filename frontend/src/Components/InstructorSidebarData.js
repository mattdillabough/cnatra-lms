import React from "react"
import {FaHome, FaGraduationCap} from "react-icons/fa"
import {RiBookMarkLine} from "react-icons/ri"
import {IoSettingsOutline} from "react-icons/io5"


const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <FaHome title="Home"/>,
    cName: "nav-text",
  },
  {
    title: "Academics",
    path: "/Academics",
    icon: <FaGraduationCap title="Academics"/>,
    cName: "nav-text",
  },
  {
    title: "Gradebooks",
    path: "/Grades",
    icon: <RiBookMarkLine title="Gradebooks"/>,
    cName: "nav-text",
  },
  {
    title: "Settings",
    path: "/Settings",
    icon: <IoSettingsOutline title="Settings"/>,
    cName: "nav-text",
  },
]

export default SidebarData;

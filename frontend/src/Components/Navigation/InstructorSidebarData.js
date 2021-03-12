import React from "react"
import {FaHome, FaGraduationCap} from "react-icons/fa"
import {RiBookMarkLine, RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri"
import {IoSettingsOutline} from "react-icons/io5"
import {IoIosPaper} from "react-icons/io";


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

    iconClosed: <RiArrowDownSFill/>,
    iconOpened: <RiArrowUpSFill/>,

    subNav: [
      {
        title: "Phase 1",
        path: "/Academics/Phase-1",
        icon: <IoIosPaper />
      },
      {
        title: "Phase 2",
        path: "/Academics/Phase-2",
        icon: <IoIosPaper />
      },
    ]
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

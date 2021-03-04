import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";

import {toggleNav} from "../../Store/navigation";


function SubNav({item}) {
  const [subNav, setSubnav] = useState(false);
  const showSubNav = () => setSubnav(!subNav);
  const dispatch = useDispatch();

  return (
    <>
    <li className={`${item.cName}`}>
      <span className="nav-section">
        <Link to={item.path} onClick={()=>dispatch(toggleNav())} >
          <span className="nav-tab">
            {item.icon}
            <span>{item.title}</span>
          </span>
        </Link>
          <span className="drop-down" onClick={item.subNav && showSubNav}>
            {item.subNav && subNav?
            item.iconOpened:
              item.subNav ?
              item.iconClosed:
              null}
          </span>
      </span>
    </li>
        <ul className="subNav-drawer">
        {subNav && item.subNav.map((item, index)=>{
        return(
          <li key={`subNav_${index}`} className="drop-down-link">
            <Link to={item.path} onClick={()=>dispatch(toggleNav())} >
              {item.icon}
              <span>{item.title}</span>
            </Link>
          </li>
        )
      })}
      </ul>
    </>
  )
}

export default SubNav;


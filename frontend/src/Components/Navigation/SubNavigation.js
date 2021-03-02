import React, {useState} from "react";
import {Link} from "react-router-dom"


function SubNav({item}) {
  const [subNav, setSubnav] = useState(false)

  const showSubNav = () => setSubnav(!subNav)
  return (
    <li className={`${item.cName}`}>
      <span className="nav-section">
        <Link to={item.path} >
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
        <ul>
        {subNav && item.subNav.map((item, index)=>{
        return(
          <li key={`subNav_${index}`} className="drop-down-link">
            <Link to={item.path} >
              {item.icon}
              <span>{item.title}</span>
            </Link>
          </li>
        )
      })}
      </ul>
    </li>
  )
}

export default SubNav;


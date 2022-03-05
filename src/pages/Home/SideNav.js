import React from "react";
import "./Home.css";
const SideNav = ({ info, type }) => {
  return (
    <div className="side-nav-container">
      <h2 className="side-nav-title">{type}</h2>
      <div className="border-bottom"></div>
      <div className="list-of-elements">
        <ul>
          <li>
            <a href="#">{info[0]}</a>
          </li>
          <li>
            <a href="#">{info[1]}</a>
          </li>
          <li>
            <a href="#">{info[2]}</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;

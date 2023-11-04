import React, { useState } from "react";
import { NavLink, activeclassname } from "react-router-dom";
import "./Sidebar.css";
import { componentsArray } from "../../App";

function Sidebar() {
  return (
    <nav className="navbar">
      <div className="nav-section">
        <div className="nav-items-section">
          {componentsArray.map((comp) => {
            return (
              <NavLink
                className="link nav-item"
                to={`/${comp.toLowerCase()}`}
                activeclassname="active"
              >
                <p>{comp}</p>
              </NavLink>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;

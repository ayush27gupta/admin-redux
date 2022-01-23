import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <div className="nav-container">
      <div className="nav">
        <div className="nav-ul">
          <ul className="navlist" type="none">
            <div className="li-item">
              <li>
                <NavLink to="/home">Home</NavLink>
              </li>
            </div>
            <div className="li-item">
              <li>
                <NavLink to="/students">Students</NavLink>
              </li>
            </div>
            <div className="li-item">
              <li>
                <NavLink to="/contact">Contact Us</NavLink>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

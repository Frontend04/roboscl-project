import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
const MenuNav: React.FC = () => {
  return (
      <nav className="nav">
        <ul>
          <li>
            <NavLink end to="/" className={"item"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={"item"}>
              About us
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacts" className={"item"}>
              Contacts
            </NavLink>
          </li>
        </ul>
      </nav>
  );
};

export default MenuNav;

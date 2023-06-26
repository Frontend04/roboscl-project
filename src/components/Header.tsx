import React from "react";
import MenuNav from "./MenuNav";
import "../App.css";

import logo from "../assets/logo.png";

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="headerTop container">
        <a href="#">
          <img src={logo} alt="logo" />
        </a>
        <MenuNav />
        <a href="tel:+78000001122" className="tel">
          +7 800 000 11 22
        </a>
      </div>
    </div>
  );
};

export default Header;

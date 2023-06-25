import React from "react";
import "../App.css";
import logo from "../assets/logo.png";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="inner container">
        <a href="#">
          <img src={logo} alt="logo" />
          <span>&copy; ROBO.SCHOOL</span>
        </a>
        <a href="tel:+78000001122" className="tel">
          +7 800 000 11 22
        </a>
      </div>
    </div>
  );
};

export default Footer;

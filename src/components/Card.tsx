import React from "react";
import { CardProps } from "../types";
import "../App.css";
const Card: React.FC<CardProps> = ({ number, text }) => {
  return (
    <div className="card">
      <div className="card-number">{number}</div>
      <div className="card-text">{text}</div>
    </div>
  );
};

export default Card;

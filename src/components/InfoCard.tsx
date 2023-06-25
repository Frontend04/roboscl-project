import React from "react";
import { InfoCardProps } from "../types";

const InfoCard: React.FC<InfoCardProps> = ({ title, text }) => {
  return (
    <div>
      <div className="infoCard">
        <div className="title">{title}</div>
        <div className="text">{text}</div>
      </div>
    </div>
  );
};

export default InfoCard;

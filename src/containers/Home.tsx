import React from "react";
import Header from "../components/Header";
import "../App.css";

const Home: React.FC = () => {
  return (
    <div>
      <div className="main">
        <div className="container">
          <Header />
          <div className="main-wrap">
            <div className="wrap-1">
              <h1>ROBO SCHOOL</h1>
              
            </div>
            <div className="wrap-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

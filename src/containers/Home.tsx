import React from "react";
import Header from "../components/Header";
import "../App.css";
import mainPhoto from "../assets/main-photo.png";
import Card from "../components/Card";
import InfoCard from "../components/InfoCard";
const Home: React.FC = () => {
  return (
    <div>
      <div className="main">
        <div className="container">
          <Header />
          <div className="main-wrap">
            <div className="wrap-1">
              <h1>ROBO SCHOOL</h1>
              <p>
                Курсы повышения квалификации по робототехнике для педагогов
                начальной школы
              </p>
              <button className="wrap-button">Записаться на курс</button>
            </div>
            <div className="wrap-2">
              <img src={mainPhoto} alt="girl" />
            </div>
          </div>
        </div>
      </div>
      <div className="best-block container">
        <span>
          <b>Robo School</b> - учреждение для формирования кадрового
          педагогического резерва в сфере робототехники и программирования
        </span>
        <div className="cards">
          <Card
            number={10}
            text="УМК по различным направлениям по робототехнике"
          />
          <Card number={20} text="Школ, в которых запущена робототехника" />
          <Card
            number={100}
            text="Педагогов прошедших курсы повышения квалификации"
          />
          <Card
            number={"10 000"}
            text="Обученных детей на базе собственных центров"
          />
        </div>
      </div>
      <div className="course-block">
        <div className="info-block container">
          <h2>Что вы получите после курса</h2>
          <div className="InfoCard-block">
            <InfoCard
              title={"Удостоверение"}
              text={
                "Дающее право преподавать робототехнику для детей 6-12 лет в образовательных учреждениях"
              }
            />
            <InfoCard
              title={"Знания"}
              text={
                "По основам разработки учебно-методических комплексов по робототехнике и программированию"
              }
            />
            <InfoCard
              title={"Практику"}
              text={
                "Возможность пройти практику по преподаванию робототехники на базе R:ED LAB (в оффлайн или онлайн формате)"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

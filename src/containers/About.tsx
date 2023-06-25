import React from "react";
import Header from "../components/Header";
import "../App.css";
import AddTaskIcon from "@mui/icons-material/AddTask";
import BasicCard from "../components/BasicCard";
const About = () => {
  return (
    <div>
      <Header />
      <div className="about-main">
        <div className="about-title container">
          <h2>ROBO SCOOl</h2>
          <div className="aboutWrap">
            <div className="about-desc">
              <h3>ROBO AT A GLANCE</h3>
              <p>
                Founded in 1993, ROBO develops future leaders for the democratic
                transformation of Central Asia. American University of Central
                Asia is an international, multi-disciplinary learning community
                in the American liberal arts tradition. AUCA is the first
                university in Central Asia to offer US accredited degrees in
                liberal arts programs through a partnership with Bard College in
                the United States. In addition to Bard, ROBO maintains
                partnerships with a number of universities and organizations
                worldwide.
              </p>
              <a href="#">
                <AddTaskIcon className="AddTaskIcon" />
                Mission, Values, and Goals
              </a>
              <a href="#">
                <AddTaskIcon className="AddTaskIcon" />
                Academic programs
              </a>
              <a href="#">
                <AddTaskIcon className="AddTaskIcon" />
                Alumni Success Stories
              </a>
              <a href="#">
                <AddTaskIcon className="AddTaskIcon" />
                Awards and Distinctions
              </a>
            </div>
            <BasicCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

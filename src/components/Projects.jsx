import React from "react";
import LinkItem from "./LinkItem";
import LinkArrowDark from "./upDark.png";
import NoteMakingApp from "./Projects/noteMakingApp.png";
import CardiovascularDisease from "./Projects/CardiovascularDisease.jpg";

const Project = ({ title, desc, link, code, img, tech }) => {
  return (
    <div className="Project">
      <div className="ImgBox">
        <img src={img} alt={title} />
      </div>
      <div className="Content">
        <h1>{title}</h1>
        <p>{desc}</p>
        <p>{tech}</p>
        <br />
        <div>
          {link !== undefined ? (
            <span>
              <LinkItem link={link} content="Visit" />
              <img
                src={LinkArrowDark}
                alt="Link"
                style={{ width: "15px", margin: "0 0 0 15px" }}
              />
            </span>
          ) : null}
          {code !== undefined ? (
            <span>
              <LinkItem link={code} content="Code" />
              <img
                src={LinkArrowDark}
                alt="Link"
                style={{ width: "15px", margin: "0 0 0 15px" }}
              />
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="Projects" id="ProjectID">
      <h1>Projects</h1>
      <span>
        <Project
          title="Cardiovascular Disease Prediction"
          desc="A Platform to predict chances of having Heart Disease."
          tech="Django | Bootstrap | Logistic Regression Model"
          // link="https://cardiovascular-disease-prediction.herokuapp.com/"
          code="https://github.com/Shivam118/Mini_Project"
          img={CardiovascularDisease}
        />
        <Project
          title="Note Making App"
          desc="A Platform where you can save your Notes."
          tech="React | Firebase | Material UI"
          link="https://notemakingtask.netlify.app/"
          code="https://github.com/Shivam118/NoteMakingApp"
          img={NoteMakingApp}
        />
      </span>
    </div>
  );
};

export default Projects;

import React from "react";
import LinkItem from "./LinkItem";
import LinkArrow from "./up.png";

const Project = ({ title, desc, link, code, img }) => {
  return (
    <div className="Project">
      <div className="Content">
        <h1>{title}</h1>
        <p>{desc}</p>
        <br />
        <div>
          <span>
            <LinkItem link={link} content="Visit" />
            <img
              src={LinkArrow}
              alt="Link"
              style={{ width: "15px", margin: "0 0 0 15px" }}
            />
          </span>
          <span>
            <LinkItem link={code} content="Code" />
            <img
              src={LinkArrow}
              alt="Link"
              style={{ width: "15px", margin: "0 0 0 15px" }}
            />
          </span>
        </div>
      </div>
      <div className="ImgBox">
        <img src={img} alt={title} />
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="Projects">
      <h1>Projects</h1>
      <Project
        title="Cardiovascular Disease Prediction"
        desc="A Platform to predict chances of having Heart Disease."
        link="https://cardiovascular-disease-prediction.herokuapp.com/"
        code="https://github.com/Shivam118/Mini_Project"
        img=""
      />
      <Project
        title="Cardiovascular Disease Prediction"
        desc="A Platform to predict chances of having Heart Disease."
        link="https://cardiovascular-disease-prediction.herokuapp.com/"
        code="https://github.com/Shivam118/Mini_Project"
        img=""
      />
    </div>
  );
};

export default Projects;

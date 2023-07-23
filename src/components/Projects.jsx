import React from "react";
import LinkItem from "./LinkItem";
import NoteMakingApp from "./Projects/noteMakingApp.png";
import CardiovascularDisease from "./Projects/CardiovascularDisease.jpg";
import PolygonChainDonationPortal from "./Projects/PolygonChainDonationPortal.png";

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
              &nbsp;&nbsp;
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                <path
                  d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"
                  fill="var(--black)"
                />
              </svg>
            </span>
          ) : null}
          {code !== undefined ? (
            <span>
              <LinkItem link={code} content="Code" />
              &nbsp;&nbsp;
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                <path
                  d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"
                  fill="var(--black)"
                />
              </svg>
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
          title="Donation Portal (Polygon Based-Matic Network)"
          desc="A Crowdsource-Funding platform for Patients (verified by Hospital/s)."
          tech="MongoDB | Express | ReactJs (Material UI) | NodeJs "
          code="https://github.com/Shivam118/Major_Project"
          img={PolygonChainDonationPortal}
        />
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

import React from "react";
import NEO from "./Projects/NEO.png";
import LogoR from "./Projects/LogoR.png";

const ExpCard = ({ imgSrc, Org, Role, timing }) => {
  return (
    <div className="Exp_Card">
      <div className="Exp_Card_Icon">
        <img src={imgSrc} alt={imgSrc} />
      </div>
      <div className="Exp_Card_Content">
        <div className="Exp_Card_Org">{Org}</div>
        <div className="Exp_Card_Role">{Role}</div>
        <div className="Exp_Card_Timing">{timing}</div>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <div className="Exp">
      <div className="Exp_Title">
        <h1>EXPERIENCE</h1>
      </div>
      <div className="Exp_List">
        <ExpCard
          imgSrc={LogoR}
          Role="Front-End Developer"
          Org="Redient Security"
          timing="3 months"
        />
        <ExpCard
          imgSrc={NEO}
          Role="Campus Ambassador"
          Org="National Engineering Olympiad"
          timing="1 months"
        />
      </div>
    </div>
  );
};

export default Experience;

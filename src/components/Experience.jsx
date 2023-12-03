import React from "react";
import styles from "../assets/css/Experience.module.css";
import { NEO, LogoE, LogoR } from "./ExperienceLogo";

const ExpCard = ({ imgSrc, Org, Role, timing }) => {
  return (
    <div className={styles.Exp_Card}>
      <div className={styles.Exp_Card_Icon}>
        <img src={imgSrc} alt={imgSrc} />
      </div>
      <div className={styles.Exp_Card_Content}>
        <div className={styles.Exp_Card_Org}>{Org}</div>
        <div className={styles.Exp_Card_Role}>{Role}</div>
        <div className={styles.Exp_Card_Timing}>{timing}</div>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <div className={styles.Exp} id="ExpID">
      <div className={styles.Exp_Title}>
        <h1>EXPERIENCE</h1>
      </div>
      <div className={styles.Exp_List}>
        <ExpCard
          imgSrc={LogoE}
          Role="Full Stack Developer"
          Org="EQLFIN"
          timing="Apr 2023 - Jul 2023"
        />
        <ExpCard
          imgSrc={LogoE}
          Role="Full Stack Developer Intern"
          Org="EQLFIN"
          timing="Dec 2022 - Apr 2023"
        />
        <ExpCard
          imgSrc={LogoR}
          Role="Senior Full Stack Developer Intern"
          Org="Redient Security"
          timing="Sept 2022 - Nov 2022"
        />
        <ExpCard
          imgSrc={LogoR}
          Role="Front-End Developer Intern"
          Org="Redient Security"
          timing="Jun 2022 - Sept 2022"
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

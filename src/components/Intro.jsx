import React from "react";
import styles from "../assets/css/Intro.module.css";

const Intro = () => {
  return (
    <div className={styles.intro}>
      <h1>
        I'm Shivam, and I develop <br />
        full stack <span>web applications</span>
      </h1>
      <br />
      <p>Python | MERN Stack | Blockchain Enthusiast</p>
    </div>
  );
};

export default Intro;

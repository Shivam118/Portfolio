import React from "react";
import techLogos from "./TechStackLogo";

const TechStack = () => {
  return (
    <div className="Techstack">
      <h1>Tools & Technologies,</h1>
      <br />
      <div className="Logos">
        <div className="Logo">
          <img src={techLogos.python} alt="Python" />
          <img src={techLogos.cpp} alt="C++" />
          <img src={techLogos.js} alt="Javascript" />
          <img src={techLogos.solidity} alt="Solidity" />
        </div>
        <div className="Logo">
          <img src={techLogos.mongodb} alt="MongoDB" />
          <img src={techLogos.express} alt="Express" />
          <img src={techLogos.react} alt="ReactJs" />
          <img src={techLogos.node} alt="NodeJs" />
        </div>
        <div className="Logo">
          <img src={techLogos.gcloud} alt="Google Cloud" />
          <img src={techLogos.firebase} alt="Firebase" />
          <img src={techLogos.django} alt="Django" />
          <img src={techLogos.next} alt="NextJs" />
        </div>
        <div className="Logo">
          <img src={techLogos.jupyter} alt="Jupyter" />
          <img src={techLogos.photoshop} alt="Photoshop" />
          <img src={techLogos.vscode} alt="VSCode" />
          <img src={techLogos.git} alt="Git" />
          <img src={techLogos.postman} alt="Postman" />
        </div>
      </div>
      {/* <div className="Bars">
      </div> */}
    </div>
  );
};

export default TechStack;

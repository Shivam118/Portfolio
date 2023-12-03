import React from "react";
import techLogos from "./TechStackLogo";
import { Tooltip } from "react-tooltip";
// import "react-tooltip/dist/react-tooltip.css";
import styles from "../assets/css/TechStack.module.css";

const TechStack = () => {
  return (
    <div className={styles.Techstack}>
      <h1>Tools & Technologies,</h1>
      <br />
      <div className={styles.Logos}>
        <div className={styles.Logo}>
          <img id="python" src={techLogos.python} alt="Python" />
          <img id="cpp" src={techLogos.cpp} alt="C++" />
          <img id="js" src={techLogos.js} alt="Javascript" />
          {/* <img id="go" src={techLogos.go} alt="GoLang" /> */}
          {/* <img id="solidity" src={techLogos.solidity} alt="Solidity" /> */}
        </div>
        <div className={styles.Logo}>
          <img id="mongodb" src={techLogos.mongodb} alt="MongoDB" />
          <img id="express" src={techLogos.express} alt="Express" />
          <img id="graphql" src={techLogos.graphql} alt="GraphQL" />
          <img id="react" src={techLogos.react} alt="ReactJs" />
          <img id="node" src={techLogos.node} alt="NodeJs" />
        </div>
        <div className={styles.Logo}>
          <img id="gcloud" src={techLogos.gcloud} alt="Google Cloud" />
          <img id="firebase" src={techLogos.firebase} alt="Firebase" />
          {/* <img id="django" src={techLogos.django} alt="Django" /> */}
          <img id="next" src={techLogos.next} alt="NextJs" />
        </div>
        <div className={styles.Logo}>
          <img id="jupyter" src={techLogos.jupyter} alt="Jupyter" />
          <img id="photoshop" src={techLogos.photoshop} alt="Photoshop" />
          <img id="vscode" src={techLogos.vscode} alt="VSCode" />
          <img id="git" src={techLogos.git} alt="Git" />
          <img id="postman" src={techLogos.postman} alt="Postman" />
        </div>
      </div>
      <>
        <Tooltip
          anchorId="python"
          place="left"
          variant="warning"
          content="Python"
        />
        <Tooltip anchorId="cpp" place="top" variant="info" content="C++" />
        <Tooltip
          anchorId="js"
          place="top"
          variant="warning"
          content="Javascript"
        />
        <Tooltip anchorId="go" place="right" variant="info" content="GoLang" />
        {/* <Tooltip anchorId="solidity" place="right" variant="dark" content="Solidity" /> */}
        <Tooltip
          anchorId="mongodb"
          place="left"
          variant="success"
          content="MongoDB"
        />
        <Tooltip
          anchorId="express"
          place="bottom"
          variant="warning"
          content="ExpressJs"
        />
        <Tooltip
          anchorId="graphql"
          place="bottom"
          variant="error"
          content="GraphQL"
        />
        <Tooltip
          anchorId="react"
          place="bottom"
          variant="info"
          content="ReactJs"
        />
        <Tooltip
          anchorId="node"
          place="right"
          variant="success"
          content="NodeJs"
        />
        <Tooltip
          anchorId="gcloud"
          place="left"
          variant="info"
          content="Google Cloud Platform"
        />
        {/* <Tooltip anchorId="django" place="bottom" variant="success" content="Django" /> */}
        <Tooltip
          anchorId="firebase"
          place="bottom"
          variant="warning"
          content="Firebase"
        />
        <Tooltip
          anchorId="next"
          place="right"
          variant="dark"
          content="Next.Js"
        />
        <Tooltip
          anchorId="jupyter"
          place="left"
          variant="warning"
          content="Jupyter"
        />
        <Tooltip
          anchorId="photoshop"
          place="bottom"
          variant="info"
          content="Photoshop"
        />
        <Tooltip
          anchorId="vscode"
          place="bottom"
          variant="info"
          content="VS Code"
        />
        <Tooltip anchorId="git" place="bottom" variant="error" content="Git" />
        <Tooltip
          anchorId="postman"
          place="right"
          variant="error"
          content="Postman"
        />
      </>
      {/* <div className="Bars">
      </div> */}
    </div>
  );
};

export default TechStack;

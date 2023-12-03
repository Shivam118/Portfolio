import React from "react";
import LinkItem from "./LinkItem";
import styles from "../assets/css/Projects.module.css";
import {
  NoteMakingApp,
  CardiovascularDisease,
  PolygonChainDonationPortal,
  Alemeno,
  ChatBotAppointment,
  ChatGPTWriterExtension,
  onlineEditor,
} from "./ProjectsList";

const Project = ({ title, desc, link, code, img, tech }) => {
  return (
    <div className={styles.Project}>
      <div className={styles.ImgBox}>
        <img src={img} alt={title} />
      </div>
      <div className={styles.Content}>
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
    <div className={styles.Projects} id="ProjectID">
      <h1>Projects</h1>
      <span>
        <Project
          title="Online Collaborative Editor"
          desc="A Collaborative Onlined Editor where multiple Users can make Changes to a document."
          tech="MongoDB | Socket.Io | ReactJs | Quill Editor | NodeJs | Firebase"
          code="https://github.com/Shivam118/onlineEditor.git"
          img={onlineEditor}
        />
        <Project
          title="Chat Bot Appointment System"
          desc="A Chat Bot Appointment System for booking Sessions."
          tech="ReactJs | React-Chatbot-Kit | Redux"
          code="https://github.com/Shivam118/react-chatbot-kit"
          img={ChatBotAppointment}
        />
        <Project
          title="EdTech Platform"
          desc="A EdTech Platform for Students and Teachers."
          tech="MongoDB | Express | ReactJs (Material UI) | NodeJs"
          code="https://github.com/Shivam118/alemeno.git" 
          img={Alemeno}
        />
        <Project
          title="Chat GPT Writer Extension"
          desc="A Chrome Extension to regenerate text based on the context of the conversation."
          tech="Chrome Extension | Plasmo | ReactJs (TailwindCSS) | NextJs"
          code="https://github.com/Shivam118/writerExtension"
          img={ChatGPTWriterExtension}
        />
        <Project
          title="Chat GPT Writer - Backend"
          desc="A Chrome Extension to regenerate text based on the context of the conversation."
          tech="NextJs | HuggingFace"
          code="https://github.com/Shivam118/writerBackend"
          img={ChatGPTWriterExtension}
        />
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
          // link="https://notemakingtask.netlify.app/"
          code="https://github.com/Shivam118/NoteMakingApp"
          img={NoteMakingApp}
        />
      </span>
    </div>
  );
};

export default Projects;

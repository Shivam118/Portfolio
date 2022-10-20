import React from "react";
import LinkItem from "./LinkItem";
import LinkArrow from "./up.png";

const Contact = () => {
  return (
    <div className="Contact">
      <div className="Content">
        <h1>Get in touch today.</h1>
        <div>
          <span>
            <LinkItem link="https://www.linkedin.com/in/shivam-s-652877ba/" content="LinkedIn" />
            <img
              src={LinkArrow}
              alt="Link"
              style={{ width: "15px", margin: "0 0 0 15px" }}
            />
          </span>
          <span>
            <LinkItem link="https://twitter.com/Shivu_118" content="Twitter" />
            <img
              src={LinkArrow}
              alt="Link"
              style={{ width: "15px", margin: "0 0 0 15px" }}
            />
          </span>
          <span>
            <LinkItem link="https://github.com/Shivam118" content="Github" />
            <img
              src={LinkArrow}
              alt="Link"
              style={{ width: "15px", margin: "0 0 0 15px" }}
            />
          </span>
          <span>
            <LinkItem link="https://stackoverflow.com/users/14368652/shivam-sharma" content="StackOverflow" />
            <img
              src={LinkArrow}
              alt="Link"
              style={{ width: "15px", margin: "0 0 0 15px" }}
            />
          </span>
          <span>
            <LinkItem link="https://www.facebook.com/shivam118.5" content="Facebook" />
            <img
              src={LinkArrow}
              alt="Link"
              style={{ width: "15px", margin: "0 0 0 15px" }}
            />
          </span>
          <span>
            <LinkItem link="https://www.instagram.com/Shivu_118.5" content="Instagram" />
            <img
              src={LinkArrow}
              alt="Link"
              style={{ width: "15px", margin: "0 0 0 15px" }}
            />
          </span>
        </div>
      </div>
      <div className="Form">
        <form>
          <input type="text" placeholder="Name" required/>
          <br />
          <input type="email" placeholder="Email" required/>
          <br />
          <textarea placeholder="Message" required/>
          <br />
          <span>
            <LinkItem link="/" content="Send message" />
            <img
              src={LinkArrow}
              alt="Link"
              style={{ width: "15px", margin: "0 0 0 15px" }}
            />
          </span>
        </form>
      </div>
    </div>
  );
};

export default Contact;

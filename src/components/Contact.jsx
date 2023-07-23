import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import LinkItem from "./LinkItem";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_d0z7xb8",
        "portfolio_template",
        form.current,
        "user_irJPKlhwCBu3OBNquKV4I"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
  };

  return (
    <div className="Contact" id="ContactID">
      <div className="Content">
        <h1>
          Get in touch{" "}
          <span style={{ borderBottom: "4px solid var(--black)" }}>today</span>.
        </h1>
        <div>
          <span>
            <LinkItem
              link="https://www.linkedin.com/in/shivam-s-652877ba/"
              content="LinkedIn"
            />
            &nbsp;&nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
              <path
                d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"
                fill="var(--black)"
              />
            </svg>
          </span>
          <span>
            <LinkItem link="https://twitter.com/Shivu_118" content="Twitter" />
            &nbsp;&nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
              <path
                d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"
                fill="var(--black)"
              />
            </svg>
          </span>
          <span>
            <LinkItem link="https://github.com/Shivam118" content="Github" />
            &nbsp;&nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
              <path
                d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"
                fill="var(--black)"
              />
            </svg>
          </span>
          <span>
            <LinkItem
              link="https://stackoverflow.com/users/14368652/shivam-sharma"
              content="StackOverflow"
            />
            &nbsp;&nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
              <path
                d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"
                fill="var(--black)"
              />
            </svg>
          </span>
          <span>
            <LinkItem
              link="https://www.facebook.com/shivam118.5"
              content="Facebook"
            />
            &nbsp;&nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
              <path
                d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"
                fill="var(--black)"
              />
            </svg>
          </span>
          <span>
            <LinkItem
              link="https://www.instagram.com/_sharma_shi.v"
              content="Instagram"
            />
            &nbsp;&nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
              <path
                d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"
                fill="var(--black)"
              />
            </svg>
          </span>
        </div>
      </div>
      <div className="Form">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            id="user_name"
            placeholder="Name"
            required
          />
          <br />
          <input
            type="email"
            name="user_email"
            id="user_email"
            placeholder="Email"
            required
          />
          <br />
          <textarea
            placeholder="Message"
            name="message"
            id="message"
            maxLength={200}
            wrap="hard"
            required
          />
          <br />
          <input type="submit" value="Send message" />
        </form>
      </div>
    </div>
  );
};

export default Contact;

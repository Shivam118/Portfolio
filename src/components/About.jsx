import React, { useState, useEffect } from "react";
import Profile from "./Profile.png";
import AboutMe from "./AboutMe.svg";
import LinkItem from "./LinkItem";
import LinkArrow from "./up.png";

const About = () => {
  const position = window.pageYOffset;
  const [scrollPosition, setScrollPosition] = useState(position);

  const handleScroll = () => {
    // console.log("Position" + scrollPosition);
    setScrollPosition(0.25*position);
  };

  useEffect(() => { 
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <div className="About">
      <div className="Content">
        <h1>Who am I ?</h1>
        <p> 
          Hey, I am Shivam Sharma. I am a final year undergraduate Student of
          B.Tech CSE at{" "}
          <a href="https://abesit.in/" target="_blank" rel="noreferrer">
            ABESIT Ghaziabad
          </a>
          . I have been programming for 4+ years and have been working on Full
          Stack Applications from last year.
        </p>
        <br />
        <span>
          <LinkItem href="/" content="More About Me" />
          <img
            src={LinkArrow}
            alt="Link"
            style={{ width: "15px", margin: "0 0 0 15px" }}
          />
        </span>
      </div>
      <div className="ImgBox">
        <img src={Profile} alt="Profile" />
        <img
          src={AboutMe}
          alt="Profile"
          style={{ transform: 'rotate('+ scrollPosition +'deg)',  }}
        />
      </div>
    </div>
  );
};

export default About;

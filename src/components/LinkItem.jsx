import React from "react";
import "./LinkItem.css";

const LinkItem = ({ link, content, icon }) => {
  return (
    <a className="cool-link" href={link} target="_blank" rel="noreferrer">
      {content}
    </a>
  );
};

export default LinkItem;

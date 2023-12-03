import React from "react";
import styles from "../assets/css/LinkItem.module.css";

const LinkItem = ({ link, content, icon }) => {
  return (
    <a className={styles.coolLink} href={link} target="_blank" rel="noreferrer">
      {content}
    </a>
  );
};

export default LinkItem;

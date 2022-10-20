import React from "react";
import LinkItem from "./LinkItem";

const Navbar = () => {
  return (
    <header>
      <span>
        <LinkItem link="/" content="SHIVAM" />
      </span>
      <ul>
        <li>
          <LinkItem link="/" content="Home" />
        </li>
        <li>
          <LinkItem link="/" content="About" />
        </li>
        <li>
          <LinkItem link="/" content="Projects" />
        </li>
        <li>
          <LinkItem link="/" content="Contact" />
        </li>
      </ul>
    </header>
  );
};

export default Navbar;

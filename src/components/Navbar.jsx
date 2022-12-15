import React from "react";
import { Link } from "react-scroll";
import LinkItem from "./LinkItem";

const Navbar = () => {
  return (
    <header>
      <span>SHIVAM</span>
      <ul>
        <li>
          <LinkItem content="Home" />
        </li>
        <li>
          <Link to="ProjectID" spy={true} smooth={true} duration={1000}>
            <LinkItem content="Projects" />
          </Link>
        </li>
        <li>
          <Link to="ExpID" spy={true} smooth={true} duration={1000}>
            <LinkItem content="Experience" />
          </Link>
        </li>
        <li>
          <Link to="AboutId" spy={true} smooth={true} duration={1000}>
            <LinkItem content="About" />
          </Link>
        </li>
        <li>
          <Link to="ContactID" spy={true} smooth={true} duration={1000}>
            <LinkItem content="Contact" />
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;

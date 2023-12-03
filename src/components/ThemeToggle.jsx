import React, { useEffect, useState } from "react";
import Light from "../assets/images/Projects/Light.png";
import Dark from "../assets/images/Projects/Dark.png";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light-theme");
  const toggleTheme = () => {
    theme === "light-theme" ? setTheme("dark-theme") : setTheme("light-theme");
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a onClick={() => toggleTheme()}>
      <div className="ToggleButton">
        <img src={theme === "light-theme" ? Light : Dark} alt="Theme Toggle" />
      </div>
    </a>
  );
};

export default ThemeToggle;

import React from "react";
import { useGlobalContext } from "./context";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { formToJSON } from "axios";

const ThemToggle = () => {
  const { greeting, isDarkTheme, toggleDarkTheme } = useGlobalContext();
  console.log(greeting);
  return (
    <section className="toggle-container">
      <button onClick={toggleDarkTheme} className="dark-toggle">
        {isDarkTheme ? (
          <BsFillMoonStarsFill className="toggle-icon white" />
          ) : (
              <BsFillSunFill className="toggle-icon" />
        )}
      </button>
    </section>
  );
};

export default ThemToggle;

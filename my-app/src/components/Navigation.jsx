import React from "react";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Navigation = () => {
  const { theme, toggle, dark } = useContext(ThemeContext);
  return (
    <div className="bg-slate-500 text-white ">
      <nav
        style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
        className="flex justify-between items-center"
      >
        <ul className="flex flex-row justify-start">
          <li className="px-8 hover:bg-yellow-700 py-4">
            <a className="active" href="#home">
              Home
            </a>
          </li>
          <li className="px-8 hover:bg-yellow-700 py-4">
            <a href="#news">News</a>
          </li>
          <li className="px-8 hover:bg-yellow-700 py-4">
            <a href="#about">About</a>
          </li>
          <li className="px-8 hover:bg-yellow-700 py-4">
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div style={{ position: "relative" }}>
          <a
            className="switch-mode"
            href="#"
            onClick={toggle}
            style={{
              backgroundColor: theme.backgroundColor,
              color: theme.color,
              outline: "none",
            }}
            data-testid="toggle-theme-btn"
          >
            Switch Nav to {!dark ? "Dark" : "Light"} mode
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;

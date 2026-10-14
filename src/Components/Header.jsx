import React from "react";
import "./Header.css";
import { useTheme } from "../Hooks/useTheme";
import mvpLogoBlack from "../assets/mvp-logo.png";
import mvpLogoWhite from "../assets/mvp-logo-white.png";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  return (
      <header className="app-header">
        <div className="header-content">
          {theme === "light" ? (
            <img className="header-logo" src={mvpLogoBlack} alt="MVP Logo" />
          ) : (
            <img className="header-logo" src={mvpLogoWhite} alt="MVP Logo" />
          )}
          <nav className="header-nav">
            <a href="#treinos">Treinos</a>
            <a href="#dashboard">Dashboard</a>

            <button className="theme-toggle" onClick={toggleTheme}>
              {theme === "light" ? (
                <img className="dark-theme" src="https://www.svgrepo.com/show/532875/moon.svg" alt="MVP Logo" />
              ) : (
                <img className="light-theme" src="https://www.svgrepo.com/show/532889/sun.svg" alt="MVP Logo" />
              )}
            </button>
          </nav>
        </div>
      </header>
  );
};

export default Header;

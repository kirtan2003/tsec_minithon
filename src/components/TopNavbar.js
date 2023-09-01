import React, { useState, useEffect } from "react";
import "./styles/TopNavbar.css";

const TopNavbar = (props) => {
  function toggleNav() {
    const menu = document.querySelector(".menu-mob");
    const navbar = document.querySelector(".navbar");
    menu.classList.toggle("open");
    menu.classList.toggle("glass");
    navbar.classList.toggle("glass");
  }

  const [easterEgg, setEasterEgg] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
    let width = window.innerWidth;
    if (width <= 768 && easterEgg) {
      setEasterEgg(false);
    } else {
      setEasterEgg(true);
    }
  };
  if (width <= 768 && easterEgg) {
    setEasterEgg(false);
  }
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  });

  return (
    <>
      <nav className="navbar glass">
        <div className="navbar_logo__container">
          {/* <img
            src="/logo.svg"
            alt=""
            className="navbar_logo"
            loading="lazy"
          /> */}
        </div>
        <ul className="menu">
          <li className={`home ${props.current === "home" ? "active" : null}`}>
            <a href="#home">Home</a>
          </li>
          <li
            className={`about ${props.current === "about" ? "active" : null}`}
          >
            <a href="#about">About</a>
          </li>
          <li
            className={`domains ${
              props.current === "domains" ? "active" : null
            }`}
          >
            <a href="#domains">Domains</a>
          </li>
          <li
            className={`prizes ${props.current === "prizes" ? "active" : null}`}
          >
            <a href="#prizes">Prizes</a>
          </li>
          <li
            className={`timeline ${
              props.current === "timeline" ? "active" : null
            }`}
          >
            <a href="#timeline">Timeline</a>
          </li>
          <li
            className={`sponsors ${
              props.current === "sponsors" ? "active" : null
            }`}
          >
            <a href="#sponsors">Sponsors</a>
          </li>
          <li className={`faq ${props.current === "faq" ? "active" : null}`}>
            <a href="#faq">FAQs</a>
          </li>
        </ul>
        <h1 className="navbar_title"> Hackerstellar </h1>
        {easterEgg ? (
          <div className="navbar_hamburger__container">
            <i class="fa-solid fa-user-astronaut nav_danger"></i>
          </div>
        ) : (
          <div className="navbar_hamburger__container">
            <input
              className="menu-btn"
              type="checkbox"
              id="menu-btn"
              onClick={() => toggleNav()}
            />
            <label className="menu-icon" htmlFor="menu-btn">
              <span className="navicon"></span>
            </label>
          </div>
        )}
      </nav>
      <ul className="menu-mob">
        <li className={`home ${props.current === "home" ? "active" : null}`}>
          <a href="#home">Home</a>
        </li>
        <li className={`about ${props.current === "about" ? "active" : null}`}>
          <a href="#about">About</a>
        </li>
        <li
            className={`domains ${
              props.current === "domains" ? "active" : null
            }`}
          >
            <a href="#domains">Domains</a>
          </li>
          <li
            className={`prizes ${props.current === "prizes" ? "active" : null}`}
          >
            <a href="#prizes">Prizes</a>
          </li>
        <li
          className={`timeline ${
            props.current === "timeline" ? "active" : null
          }`}
        >
          <a href="#timeline">Timeline</a>
        </li>
        <li
          className={`sponsors ${
            props.current === "sponsors" ? "active" : null
          }`}
        >
          <a href="#sponsors">Sponsors</a>
        </li>
        <li className={`faq ${props.current === "faq" ? "active" : null}`}>
          <a href="#faq">FAQs</a>
        </li>
      </ul>
    </>
  );
};

export default TopNavbar;

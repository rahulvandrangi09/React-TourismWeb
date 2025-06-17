import React from "react";

const Hero = () => {
  return (
    <div>
      <div id="navbar">
        <nav>
          <ul>
            <li>
              <a href="#main-hero">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#tourist">Tourist Destinations</a>
            </li>
            <li>
              <a href="#history">History</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="main-hero">
        <h1>
          <span>I</span>
          <span>N</span>
          <span>D</span>
          <span>I</span>
          <span>A</span>
        </h1>
        <h3>
          From Kashmir to Kanyakumari, India is a land of breathtaking contrasts
          and timeless charm.
        </h3>
      </div>
    </div>
  );
};

export default Hero;

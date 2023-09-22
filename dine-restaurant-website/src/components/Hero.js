import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-text">
          <h1 className="hero-title">Exquisite dining since 1989</h1>
          <p className="hero-content">
            Experience our seasonal menu in beautiful country surroundings. Eat
            the freshest produce from the comfort of our farmhouse.
          </p>
          <Link to="/booking">
            <button className="hero-button">Book a table</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;

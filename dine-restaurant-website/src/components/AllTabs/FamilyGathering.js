import React from "react";
import { Link } from "react-router-dom";

const FamilyGathering = () => {
  return (
    <div className="gathering-item">
      <h2>Family Gathering</h2>
      <p>
        We love catering for entire families. So please bring everyone along for
        a special meal with your loved ones. We’ll provide a memorable
        experience for all.
      </p>
      <Link to="/booking">
        <button className="gathering-button">Book a table</button>
      </Link>
    </div>
  );
};
export default FamilyGathering;

import React from "react";
import { Link } from "react-router-dom";

const SocialEvents = () => {
  return (
    <div className="gathering-item">
      <h2>Social Events</h2>
      <p>
        Are you looking to have a larger social event? No problem! We’re more
        than happy to cater for big parties. We’ll work with you to make your
        event a hit with everyone.
      </p>
      <Link to="/booking">
        <button className="gathering-button">Book a table</button>
      </Link>
    </div>
  );
};
export default SocialEvents;

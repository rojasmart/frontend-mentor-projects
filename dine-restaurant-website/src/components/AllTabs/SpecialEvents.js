import React from "react";
import { Link } from "react-router-dom";

const SpecialEvents = () => {
  return (
    <div className="gathering-item">
      <h2>Special Events</h2>
      <p>
        Whether it’s a romantic dinner or special date you’re celebrating with
        others we’ll look after you. We’ll be sure to mark your special date
        with an unforgettable meal.
      </p>
      <Link to="/booking">
        <button className="gathering-button">Book a table</button>
      </Link>
    </div>
  );
};
export default SpecialEvents;

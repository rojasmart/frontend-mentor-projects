import React from "react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="calltoaction">
      <div className="calltoaction-container">
        <h2>Ready to make a reservation?</h2>
        <Link to="/booking">
          <button className="calltoaction-button">book a table</button>
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;

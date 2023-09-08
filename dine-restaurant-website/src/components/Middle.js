import React from "react";
import MiddleImageLeft from "../images/homepage/enjoyable-place-desktop.jpg";
import MiddleImageRight from "../images/homepage/locally-sourced-desktop.jpg";
import Divider from "../images/patterns/pattern-divide.svg";
import Pattern from "../images/patterns/pattern-lines.svg";

const Middle = () => {
  return (
    <section className="middle">
      <div className="middle-container">
        <div className="middle-family">
          <div className="middle-image">
            <img src={MiddleImageLeft} alt="image_trees" />
          </div>
          <div className="middle-content">
            <img src={Divider} alt="image_divider" />
            <h2 className="middle-title">Enjoyable place for all the family</h2>
            <p className="middle-body-text">
              Our relaxed surroundings make dining with us a great experience
              for everyone. We can even arrange a tour of the farm before your
              meal.
            </p>
          </div>
        </div>
        <div className="middle-locally">
          <div className="middle-pattern">
            <img src={Pattern} alt="pattern" />
          </div>
          <div className="middle-image">
            <img src={MiddleImageRight} alt="image_trees" />
          </div>
          <div className="middle-content">
            <img src={Divider} alt="image_divider" />
            <h2 className="middle-title">The most locally sourced food</h2>
            <p className="middle-body-text">
              All our ingredients come directly from our farm or local fishery.
              So you can be sure that you’re eating the freshest, most
              sustainable food.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Middle;

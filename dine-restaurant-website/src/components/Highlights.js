import React from "react";
import Divider from "../images/patterns/pattern-divide.svg";
import Salmon from "../images/homepage/salmon-desktop-tablet.jpg";
import Beef from "../images/homepage/beef-desktop-tablet.jpg";
import Chocolate from "../images/homepage/chocolate-desktop-tablet.jpg";

const Highlights = () => {
  return (
    <section className="highlights">
      <div className="highlights-container">
        <div className="highlights-content">
          <img src={Divider} alt="image_divider" />
          <h2 className="highlights-title">A few highlights from our menu</h2>
          <p className="highlights-body-text">
            from our menu We cater for all dietary requirements, but here’s a
            glimpse at some of our diner’s favourites. Our menu is revamped
            every season.
          </p>
        </div>
        <div className="highlights-items">
          <div className="highlights-item">
            <div className="highlights-item-image salmon"></div>
            <div className="highlights-item-body">
              <h3 className="highlights-item-title">Seared Salmon Fillet</h3>
              <p className="highlights-item-text">
                Our locally sourced salmon served with a refreshing buckwheat
                summer salad.
              </p>
            </div>
          </div>
          <div className="highlights-item">
            <div className="highlights-item-image beef"></div>
            <div className="highlights-item-body">
              <h3 className="highlights-item-title">Rosemary Filet Mignon</h3>
              <p className="highlights-item-text">
                Our prime beef served to your taste with a delicious choice of
                seasonal sides.
              </p>
            </div>
          </div>
          <div className="highlights-item">
            <div className="highlights-item-image chocolate"></div>
            <div className="highlights-item-body">
              <h3 className="highlights-item-title">
                Summer Fruit Chocolate Mousse
              </h3>
              <p className="highlights-item-text">
                Creamy mousse combined with summer fruits and dark chocolate
                shavings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;

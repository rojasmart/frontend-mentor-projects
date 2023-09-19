import React, { useState } from "react";
import FamilyGathering from "./AllTabs/FamilyGathering";
import SpecialEvents from "./AllTabs/SpecialEvents";
import SocialEvents from "./AllTabs/SocialEvents";
import FamilyGatheringImg from "../images/homepage/family-gathering-desktop.jpg";
import SpecialEventsImg from "../images/homepage/social-events-desktop.jpg";
import SocialEventsImg from "../images/homepage/special-events-desktop.jpg";
import Pattern from "../images/patterns/pattern-lines.svg";

const Gathering = () => {
  const [activeTab, setActiveTab] = useState("FamilyGathering");

  const FamilyGatheringClick = () => {
    setActiveTab("FamilyGathering");
  };

  const SpecialEventsClick = () => {
    setActiveTab("SpecialEvents");
  };

  const SocialEventsClick = () => {
    setActiveTab("SocialEvents");
  };

  return (
    <section className="gathering">
      <div className="gathering-container">
        <div className="gathering-slider">
          <div className="gathering-slide">
            <div className="bottom-pattern">
              <img src={Pattern} alt="pattern" />
            </div>
            <div className="gathering-slider-container">
              {activeTab === "FamilyGathering" && (
                <img src={FamilyGatheringImg} alt="family-gathering" />
              )}
              {activeTab === "SpecialEvents" && (
                <img src={SpecialEventsImg} alt="family-gathering" />
              )}
              {activeTab === "SocialEvents" && (
                <img src={SocialEventsImg} alt="family-gathering" />
              )}
            </div>
          </div>
        </div>
        <div className="gathering-content">
          <div className="gathering-text-container">
            {activeTab === "FamilyGathering" && <FamilyGathering />}
            {activeTab === "SpecialEvents" && <SpecialEvents />}
            {activeTab === "SocialEvents" && <SocialEvents />}
          </div>
          <ul className="gathering-titles">
            <li
              className={activeTab === "FamilyGathering" ? "active" : ""}
              onClick={FamilyGatheringClick}
            >
              Family Gathering
              <div
                className={
                  activeTab === "FamilyGathering"
                    ? "gathering-underline active"
                    : "gathering-underline"
                }
              ></div>
            </li>
            <li
              className={activeTab === "SpecialEvents" ? "active" : ""}
              onClick={SpecialEventsClick}
            >
              Special Events
              <div
                className={
                  activeTab === "SpecialEvents"
                    ? "gathering-underline active"
                    : "gathering-underline"
                }
              ></div>
            </li>
            <li
              className={activeTab === "SocialEvents" ? "active" : ""}
              onClick={SocialEventsClick}
            >
              Social Events
              <div
                className={
                  activeTab === "SocialEvents"
                    ? "gathering-underline active"
                    : "gathering-underline"
                }
              ></div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Gathering;

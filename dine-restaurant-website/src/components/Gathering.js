import React, { useState } from "react";
import FamilyGathering from "./AllTabs/FamilyGathering";
import SpecialEvents from "./AllTabs/SpecialEvents";
import SocialEvents from "./AllTabs/SocialEvents";
import FamilyGatheringImgDesktop from "../images/homepage/family-gathering-desktop.jpg";
import FamilyGatheringImgTablet from "../images/homepage/family-gathering-tablet.jpg";
import FamilyGatheringImgMobile from "../images/homepage/family-gathering-mobile.jpg";
import SpecialEventsImgDesktop from "../images/homepage/social-events-desktop.jpg";
import SpecialEventsImgTablet from "../images/homepage/social-events-tablet.jpg";
import SpecialEventsImgMobile from "../images/homepage/social-events-mobile.jpg";
import SocialEventsImgDesktop from "../images/homepage/special-events-desktop.jpg";
import SocialEventsImgTablet from "../images/homepage/special-events-tablet.jpg";
import SocialEventsImgMobile from "../images/homepage/special-events-mobile.jpg";
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
                <picture>
                  <source
                    srcset={FamilyGatheringImgTablet}
                    media="(max-width: 768px)"
                  />
                  <source
                    srcset={FamilyGatheringImgMobile}
                    media="(max-width: 375px)"
                  />
                  <img src={FamilyGatheringImgDesktop} alt="family_gathering" />
                </picture>
              )}
              {activeTab === "SpecialEvents" && (
                <picture>
                  <source
                    srcset={SpecialEventsImgTablet}
                    media="(max-width: 768px)"
                  />
                  <source
                    srcset={SpecialEventsImgMobile}
                    media="(max-width: 375px)"
                  />

                  <img src={SpecialEventsImgDesktop} alt="special_event" />
                </picture>
              )}
              {activeTab === "SocialEvents" && (
                <picture>
                  <source
                    srcset={SocialEventsImgTablet}
                    media="(max-width: 768px)"
                  />
                  <source
                    srcset={SocialEventsImgMobile}
                    media="(max-width: 375px)"
                  />

                  <img src={SocialEventsImgDesktop} alt="social_event" />
                </picture>
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

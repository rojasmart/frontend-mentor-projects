import React, { useState, useEffect } from "react";
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
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakPoint = 1200;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

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
                    srcSet={FamilyGatheringImgDesktop}
                    media="(min-width: 1200px)"
                  />
                  <source
                    srcSet={FamilyGatheringImgTablet}
                    media="(min-width: 768px)"
                  />
                  <source
                    srcSet={FamilyGatheringImgMobile}
                    media="(min-width: 475px)"
                  />
                  <img src={FamilyGatheringImgMobile} alt="family_gathering" />
                </picture>
              )}
              {activeTab === "SpecialEvents" && (
                <picture>
                  <source
                    srcSet={SpecialEventsImgDesktop}
                    media="(min-width: 1200px)"
                  />
                  <source
                    srcSet={SpecialEventsImgTablet}
                    media="(min-width: 768px)"
                  />
                  <source
                    srcSet={SpecialEventsImgMobile}
                    media="(min-width: 475px)"
                  />

                  <img src={SpecialEventsImgMobile} alt="special_event" />
                </picture>
              )}
              {activeTab === "SocialEvents" && (
                <picture>
                  <source
                    srcSet={SocialEventsImgDesktop}
                    media="(min-width: 2300px)"
                  />
                  <source
                    srcSet={SocialEventsImgTablet}
                    media="(min-width: 768px)"
                  />
                  <source
                    srcSet={SocialEventsImgMobile}
                    media="(min-width: 475px)"
                  />

                  <img src={SocialEventsImgMobile} alt="social_event" />
                </picture>
              )}
            </div>
          </div>
        </div>
        <div className="gathering-content">
          {width < breakPoint && (
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
          )}
          <div className="gathering-text-container">
            {activeTab === "FamilyGathering" && <FamilyGathering />}
            {activeTab === "SpecialEvents" && <SpecialEvents />}
            {activeTab === "SocialEvents" && <SocialEvents />}
          </div>
          {width > breakPoint && (
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
          )}
        </div>
      </div>
    </section>
  );
};

export default Gathering;

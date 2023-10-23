import React, { useState } from "react";
import slider from "../images/icon-slider.svg";

const PricingDeets = {
  1: {
    pageviews: "10K",
    monthly: 8,
    yearly: 72,
  },
  2: {
    pageviews: "50k",
    monthly: 12,
    yearly: 108,
  },
  3: {
    pageviews: "100K",
    monthly: 16,
    yearly: 144,
  },
  4: {
    pageviews: "500k",
    monthly: 24,
    yearly: 216,
  },
  5: {
    pageviews: "1M",
    monthly: 36,
    yearly: 324,
  },
};

function formatCurrency(amt) {
  return amt.toLocaleString("en-US", { style: "currency", currency: "USD" });
}

const RangeSlider = () => {
  const [pageviews, setPageviews] = useState(3);
  const [isMonthly, setIsMonthly] = useState(true);

  function updateRangePosition(pageviews) {
    if (pageviews === 1) {
      return "0%";
    }
    if (pageviews === 5) {
      return "100%";
    }
    return `${(pageviews - 1) * 25}%`;
  }

  return (
    <>
      <div className="card-header">
        <div className="card-header-views">
          <p>{PricingDeets[pageviews].pageviews} pageviews</p>
        </div>
        <div className="card-price desktop">
          <h1 className="price">
            {formatCurrency(
              PricingDeets[pageviews][isMonthly ? "monthly" : "yearly"]
            )}
          </h1>
          <p>/ {isMonthly ? "month" : "year"}</p>
        </div>
        <div className="card-range-slider">
          <input
            type="range"
            name="pageviews"
            id="pageviews"
            min="1"
            max="5"
            step="1"
            aria-label={`${PricingDeets[pageviews].pageviews} pageviews`}
            value={pageviews}
            onInput={(e) => {
              setPageviews(e.target.value);
            }}
          />
          <div
            className="fake-range"
            style={{
              "--width": updateRangePosition(pageviews),
            }}
          >
            <div className="track">
              <div className="filled"></div>
            </div>
            <div
              className="thumb"
              style={{
                transform: `translateX(${pageviews == 5 ? "-100%" : "0"})`,
              }}
            >
              <img src={slider} alt="" />
            </div>
          </div>
        </div>
        <div className="card-price mobile">
          <h1 className="price">
            {formatCurrency(
              PricingDeets[pageviews][isMonthly ? "monthly" : "yearly"]
            )}
          </h1>
          <p>/ {isMonthly ? "month" : "year"}</p>
        </div>
      </div>
      <div className="card-header-content">
        <div className="billing-wrapper">
          <label htmlFor="billingType" className="billing-type">
            <p>Monthly Billing</p>
            <div className="billing-checkbox-wrapper">
              <input
                type="checkbox"
                className="billing-checkbox"
                name="billingType"
                id="billingType"
                onChange={(e) => setIsMonthly(!isMonthly)}
              />
            </div>
            <p>Yearly Billing </p>
            <span className="badge">
              <span className="discount-mobile">-</span>25%
              <span className="discount">discount</span>
            </span>
          </label>
        </div>
      </div>
    </>
  );
};

export default RangeSlider;

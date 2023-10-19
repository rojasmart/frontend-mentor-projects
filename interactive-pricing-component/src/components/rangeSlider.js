import React, { useState } from "react";

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
  return amt.toLocaleString(undefined, {
    currency: "USD",
    style: "currency",
  });
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
    return `${(pageviews - 1) * 20}%`;
  }

  return (
    <>
      <div className="card-header">
        <div className="card-header-views">
          <p>{PricingDeets[pageviews].pageviews} pageviews</p>
        </div>
        <div className="card-price">
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
        </div>
      </div>
      <div className="card-header-content">
        <div className="billing-wrapper">
          <input
            type="checkbox"
            className="billingCheckbox"
            name="billingType"
            id="billingType"
            onChange={(e) => setIsMonthly(!isMonthly)}
          />
          <label htmlFor="billingType" className="billing-type">
            <p>Monthly Billing</p>
            <div className="fake-checkbox"></div>
            <p>Yearly Billing </p>
            <span class="badge">
              25% <span>discount</span>
            </span>
          </label>
        </div>
      </div>
    </>
  );
};

export default RangeSlider;

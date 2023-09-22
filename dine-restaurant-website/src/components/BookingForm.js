import React from "react";
import Pattern from "../images/patterns/pattern-lines.svg";

const BookingForm = () => {
  return (
    <>
      <div className="middle-content-booking">
        <div className="middle-pattern-booking">
          <img src={Pattern} alt="pattern" />
        </div>
        <div className="booking-form">Este é o booking form</div>;
      </div>
    </>
  );
};

export default BookingForm;

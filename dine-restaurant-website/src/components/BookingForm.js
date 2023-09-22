import React, { useState } from "react";
import Pattern from "../images/patterns/pattern-lines.svg";

const BookingForm = () => {
  const [count, setCounter] = useState(0);

  return (
    <>
      <div className="middle-content-booking">
        <div className="middle-pattern-booking">
          <img src={Pattern} alt="pattern" />
        </div>
        <div className="booking-form">
          <form>
            <div className="booking-contacts">
              <label htmlFor="">
                <input type="text" />
              </label>
              <label htmlFor="">
                <input type="text" />
              </label>
            </div>
            <div className="booking-schedule">
              <fieldset>
                <legend>Pick a date</legend>
                <label>
                  <input type="number" placeholder="DD" />
                </label>
                <label>
                  <input type="number" placeholder="MM" />
                </label>
                <label>
                  <input type="number" placeholder="YYYY" />
                </label>
              </fieldset>
              <fieldset>
                <legend>Pick a time</legend>
                <label>
                  <input type="number" placeholder="09" />
                </label>
                <label>
                  <input type="number" placeholder="00" />
                </label>
                <label>
                  <select>
                    <option value="am">AM</option>
                    <option value="pm">PM</option>
                  </select>
                </label>
              </fieldset>
            </div>
          </form>
          <div className="counter-form">
            <button onClick={() => setCounter(count - 1)}>-</button>
            <div className="counter-number">{count}</div>
            <button onClick={() => setCounter(count + 1)}>+</button>
          </div>
          <button className="button-submit">make a reservation</button>
        </div>
        ;
      </div>
    </>
  );
};

export default BookingForm;

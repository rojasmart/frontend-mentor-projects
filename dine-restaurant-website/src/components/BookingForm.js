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
                <input type="text" placeholder="name" />
              </label>
              <label htmlFor="">
                <input type="text" placeholder="email" />
              </label>
            </div>
            <div className="booking-schedule">
              <fieldset>
                <div className="label-booking">
                  <legend>Pick a date</legend>
                </div>
                <div className="inputs-booking">
                  <label>
                    <input type="number" placeholder="DD" />
                  </label>
                  <label>
                    <input type="number" placeholder="MM" />
                  </label>
                  <label>
                    <input type="number" placeholder="YYYY" />
                  </label>
                </div>
              </fieldset>
              <fieldset>
                <div className="label-booking">
                  <legend>Pick a time</legend>
                </div>
                <div className="inputs-booking">
                  <label>
                    <input type="number" placeholder="09" />
                  </label>
                  <label>
                    <input type="number" placeholder="00" />
                  </label>
                  <label>
                    <div className="select-booking">
                      <select>
                        <option id="new-select" value="am">
                          AM
                        </option>
                        <option value="pm">PM</option>
                      </select>
                    </div>
                  </label>
                </div>
              </fieldset>
            </div>
          </form>
          <div className="counter-form">
            <button onClick={() => setCounter(count - 1)}>-</button>
            <div className="counter-number">{count} people</div>
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

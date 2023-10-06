import React, { useState } from "react";
import Pattern from "../images/patterns/pattern-lines.svg";
import validator from "validator";

const BookingForm = () => {
  const [count, setCounter] = useState(0);
  const [emailError, setEmailError] = useState("");
  const [dayError, setDayError] = useState("");
  const [monthError, setMonthError] = useState("");

  const [values, setValues] = useState({
    name: "",
    email: "",
    day: "",
    month: "",
    year: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const date = new Date();
  // Format the date to YYYY-MM-DD
  const formattedDate = date
    .toLocaleDateString("en-GB", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .split("/")
    .reverse()
    .join("-");

  const objectDate = {
    year: "2000",
    month: "09",
    day: values.day.toString(),
  };

  console.log(validator.isDate(formattedDate, new Date()));

  const parsedObject = Object.values(objectDate)
    .toString()
    .split(",")
    .join("-");

  console.log(formattedDate);
  console.log(parsedObject);
  const validateName = (e) => {
    setValues({ ...values, name: e.target.value });
  };

  const validateEmail = (e) => {
    const email = e.target.value;
    if (!validator.isEmail(email)) {
      setEmailError("please enter valid email");
    } else {
      setValues({ ...values, email: e.target.value });
      setEmailError("");
      setSubmitted(true);
    }
    setValues({ ...values, email: e.target.value });
  };

  const validateDay = (e) => {
    const daySliced = e.target.value;
    if (daySliced < date.getDate()) {
      setDayError("please enter valid day");
    } else {
      setValues({ ...values, day: e.target.value });
      setDayError("");
    }
    setValues({ ...values, day: e.target.value });
  };

  const validateMonth = (e) => {
    const monthSliced = e.target.value;

    if (monthSliced < date.getMonth()) {
      setMonthError("please enter valid month");
    } else {
      setValues({ ...values, month: e.target.value });
      setMonthError("");
    }

    setValues({ ...values, month: e.target.value });
  };

  const validateYear = (e) => {
    setValues({ ...values, year: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validator.isEmail(values.email)) {
      setValid(true);
    }

    setSubmitted(true);
    console.log("values", values);
  };

  return (
    <>
      <div className="middle-content-booking">
        <div className="middle-pattern-booking">
          <img src={Pattern} alt="pattern" />
        </div>
        <div className="booking-form">
          <form id="my-form">
            {submitted && valid ? (
              <div className="success-message">
                Success! Thanks your for registering
              </div>
            ) : null}
            <div className="booking-contacts">
              <label htmlFor="">
                <input
                  type="text"
                  placeholder="name"
                  onChange={validateName}
                  value={values.name}
                />
                {submitted && !values.name ? (
                  <p className="error-msg">This field is required</p>
                ) : null}
              </label>
              <label htmlFor="">
                <input
                  type="email"
                  placeholder="email"
                  onChange={validateEmail}
                  value={values.email}
                />
                {submitted && !values.email ? (
                  <p className="error-msg">This field is required</p>
                ) : emailError ? (
                  <p className="error-msg">{emailError}</p>
                ) : null}
                {}
              </label>
            </div>
            <div className="booking-schedule">
              <fieldset>
                <div className="label-booking">
                  <legend>Pick a date</legend>
                  {submitted && !values.date && !values.month ? (
                    <p className="error-msg">This field is required</p>
                  ) : monthError ? (
                    <p className="error-msg">{monthError}</p>
                  ) : dayError ? (
                    <p className="error-msg">{dayError}</p>
                  ) : null}
                </div>
                <div className="inputs-booking">
                  <label>
                    <input
                      type="number"
                      placeholder="MM"
                      onChange={validateMonth}
                      value={values.month.slice(0, 2)}
                    />
                  </label>
                  <label>
                    <input
                      type="number"
                      placeholder="DD"
                      onChange={validateDay}
                      value={values.day.slice(0, 2)}
                    />
                  </label>
                  <label>
                    <input
                      type="number"
                      placeholder="YYYY"
                      onChange={validateYear}
                      value={values.year.slice(0, 4)}
                    />
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
          <button
            className="button-submit"
            form="my-form"
            content="Submit"
            value="Submit"
            onClick={handleSubmit}
          >
            make a reservation
          </button>
        </div>
        ;
      </div>
    </>
  );
};

export default BookingForm;

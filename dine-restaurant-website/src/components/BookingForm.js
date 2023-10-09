import React, { useState } from "react";
import Pattern from "../images/patterns/pattern-lines.svg";
import validator from "validator";
import { FcApproval } from "react-icons/fc";

const BookingForm = () => {
  const [count, setCounter] = useState(1);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [dayError, setDayError] = useState("");
  const [monthError, setMonthError] = useState("");
  const [yearError, setYearError] = useState("");
  const [hourError, setHourError] = useState("");
  const [minuteError, setMinuteError] = useState("");

  const [values, setValues] = useState({
    name: "",
    email: "",
    day: "",
    month: "",
    year: "",
    hour: "",
    min: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const date = new Date();

  console.log("valid", valid);

  /*  // Format the date to YYYY-MM-DD
  const formattedDate = date
    .toLocaleDateString("en-GB", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .split("/")
    .reverse()
    .join("-"); */

  const objectDate = {
    year: values.year.toString(),
    month: values.month.toString(),
    day: values.day.toString(),
  };

  const parsedObject = Object.values(objectDate)
    .toString()
    .split(",")
    .join("-");

  const validateName = (e) => {
    const name = e.target.value;
    if (name.length < 1) {
      setNameError("This field is required");
    } else {
      setValues({ ...values, name: e.target.value });
      setNameError("");
    }
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
    if (daySliced <= date.getDate()) {
      setDayError("please enter valid day");
    } else {
      setValues({ ...values, day: e.target.value });
      setDayError("");
    }
    setValues({ ...values, day: e.target.value });
  };

  const validateMonth = (e) => {
    const monthSliced = e.target.value;
    if (monthSliced <= date.getMonth()) {
      setMonthError("please enter valid month");
    } else {
      setValues({ ...values, month: e.target.value });
      setMonthError("");
    }
    setValues({ ...values, month: e.target.value });
  };

  const validateYear = (e) => {
    if (e.target.value < date.getFullYear()) {
      setYearError("please enter valid year");
    } else {
      setValues({ ...values, year: e.target.value });
      setYearError("");
    }
    setValues({ ...values, year: e.target.value });
  };

  const validateHour = (e) => {
    const low = 0;
    const highHours = 12;

    const hour = parseInt(e.target.value);

    if (hour < low || hour > highHours) {
      setHourError("please enter valid hour");
    } else {
      setValues({ ...values, hour: e.target.value });
      setHourError("");
    }
    setValues({ ...values, hour: e.target.value });
  };

  const validateMinute = (e) => {
    const low = 0;
    const highMinutes = 60;

    const minute = parseInt(e.target.value);

    if (minute < low || minute > highMinutes) {
      setMinuteError("please enter valid minutes");
    } else {
      setValues({ ...values, min: e.target.value });
      setMinuteError("");
    }
    setValues({ ...values, min: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("values hour", values.hour);
    if (
      validator.isEmail(values.email) &&
      validator.isDate(parsedObject, new Date()) &&
      values.hour &&
      values.min &&
      !hourError &&
      !minuteError
    ) {
      setValid(true);
    }
    setSubmitted(true);
  };

  return (
    <>
      <div className="middle-content-booking">
        <div className="middle-pattern-booking">
          <img src={Pattern} alt="pattern" />
        </div>
        {!valid ? (
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
                    placeholder="Name"
                    onChange={validateName}
                    value={values.name}
                    className={
                      nameError || (submitted && !values.name) ? "error" : null
                    }
                  />
                  {submitted && !values.name ? (
                    <p className="error-msg">This field is required</p>
                  ) : nameError ? (
                    <p className="error-msg">{nameError}</p>
                  ) : null}
                </label>
                <label htmlFor="">
                  <input
                    type="email"
                    placeholder="Email"
                    onChange={validateEmail}
                    value={values.email}
                    className={
                      emailError || (submitted && !values.email)
                        ? "error"
                        : null
                    }
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
                    <legend
                      className={
                        monthError ||
                        dayError ||
                        yearError ||
                        (submitted && !values.date && !values.month)
                          ? "error"
                          : null
                      }
                    >
                      Pick a date
                    </legend>
                    {submitted && !values.date && !values.month ? (
                      <p className="error-msg">This field is required</p>
                    ) : monthError ? (
                      <p className="error-msg">{monthError}</p>
                    ) : dayError ? (
                      <p className="error-msg">{dayError}</p>
                    ) : yearError ? (
                      <p className="error-msg">{yearError}</p>
                    ) : null}
                  </div>
                  <div className="inputs-booking">
                    <label>
                      <input
                        type="number"
                        placeholder="MM"
                        onChange={validateMonth}
                        value={values.month.slice(0, 2)}
                        className={
                          monthError || (submitted && !values.month)
                            ? "error"
                            : null
                        }
                      />
                    </label>
                    <label>
                      <input
                        type="number"
                        placeholder="DD"
                        onChange={validateDay}
                        value={values.day.slice(0, 2)}
                        className={
                          dayError || (submitted && !values.day)
                            ? "error"
                            : null
                        }
                      />
                    </label>
                    <label>
                      <input
                        type="number"
                        placeholder="YYYY"
                        onChange={validateYear}
                        value={values.year.slice(0, 4)}
                        className={
                          yearError || (submitted && !values.year)
                            ? "error"
                            : null
                        }
                      />
                    </label>
                  </div>
                </fieldset>
                <fieldset>
                  <div className="label-booking">
                    <legend
                      className={
                        hourError ||
                        minuteError ||
                        (submitted && !values.hour && !values.minute)
                          ? "error"
                          : null
                      }
                    >
                      Pick a time
                    </legend>
                    {submitted && !values.hour ? (
                      <p className="error-msg">This field is required</p>
                    ) : hourError ? (
                      <p className="error-msg">{hourError}</p>
                    ) : minuteError ? (
                      <p className="error-msg">{minuteError}</p>
                    ) : null}
                  </div>
                  <div className="inputs-booking">
                    <label>
                      <input
                        type="number"
                        placeholder="09"
                        onChange={validateHour}
                        value={values.hour.slice(0, 2)}
                        className={
                          hourError || (submitted && !values.hour)
                            ? "error"
                            : null
                        }
                      />
                    </label>
                    <label>
                      <input
                        type="number"
                        placeholder="00"
                        onChange={validateMinute}
                        value={values.min.slice(0, 2)}
                        className={
                          minuteError || (submitted && !values.min)
                            ? "error"
                            : null
                        }
                      />
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
              <button
                disabled={count <= 1 ? true : false}
                onClick={() => setCounter(count - 1)}
              >
                -
              </button>
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
        ) : (
          <div className="booking-form success">
            <div class="success-header">
              <h2>
                Thank you!
                <FcApproval />
              </h2>
              <p>We have successfully received your reservation.</p>
            </div>
            <div className="success-content">
              <p>
                Your reservation at Dine is in the name of{" "}
                <strong>{values.name}</strong>
              </p>
              <p>
                A table for {count} persons scheduled for {values.day}/
                {values.month} at {values.hour}:{values.min}.
              </p>
            </div>
            <p>Enjoy your meal.</p>
            <h5>You can call +00 44 123 4567 for any question</h5>
          </div>
        )}
      </div>
    </>
  );
};

export default BookingForm;

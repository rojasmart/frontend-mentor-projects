import React, { useState } from "react";
import Pattern from "../images/patterns/pattern-lines.svg";
import validator from "validator";

const BookingForm = () => {
  const [count, setCounter] = useState(0);

  const [emailError, setEmailError] = useState("");
  //const [nameError, setNameError] = useState("");

  const [values, setValues] = useState({
    name: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const validateName = (e) => {
    setValues({ ...values, name: e.target.value });
    /* setEmailError(true);
    const name = e.target.value;
    if (validator.isEmpty(name)) {
      setNameError("isto está vazio, toca a preencher");
    } */
  };

  const validateEmail = (e) => {
    //setValues({ ...values, email: e.target.value });
    //setEmailError(true);
    const email = e.target.value;
    if (!validator.isEmail(email)) {
      setEmailError("please enter valid email");
    } else {
      setValues({ ...values, email: e.target.value });
      setEmailError("");
      submitted(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validator.isEmail(values.email)) {
      setValid(true);
    }
    setEmailError("please enter email");
    setSubmitted(true);
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
                  <p className="error-msg">please enter name</p>
                ) : null}
              </label>
              <label htmlFor="">
                <input
                  type="email"
                  placeholder="email"
                  onChange={validateEmail}
                />
                {/*  {submitted && !values.email ? (
                  <p className="error-msg">please enter email</p>
                ) : null} */}
                {emailError ? <p className="error-msg">{emailError}</p> : null}
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

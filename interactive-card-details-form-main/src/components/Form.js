import React from "react";

const Form = ({ handleData, data }) => {
  return (
    <form>
      <label>
        Enter your name:
        <input
          type="text"
          value="value"
          onChange={() => console.log("hello")}
        />
      </label>
    </form>
  );
};

export default Form;

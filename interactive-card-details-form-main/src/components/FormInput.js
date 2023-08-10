import { useState } from "react";

const FormInput = (props) => {
  const [onFocus, setOnFocus] = useState(false);
  const handleFocus = () => {
    setOnFocus(true);
  };

  return (
    <input
      onChange={({ target }) => props.callbackChange(target)}
      onBlur={handleFocus}
      focused={onFocus.toString()}
      {...props.attrs}
    />
  );
};

export default FormInput;

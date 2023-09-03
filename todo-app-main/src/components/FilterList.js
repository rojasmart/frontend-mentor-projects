import React from "react";

const FilterList = (props) => {
  return (
    <>
      <p
        className={props.isPressed ? "active" : ""}
        onClick={() => {
          props.setFilter(props.name);
        }}
      >
        {props.name}
      </p>
    </>
  );
};

export default FilterList;

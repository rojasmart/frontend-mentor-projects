import React from "react";

const FilterList = (props) => {
  return (
    <>
      <button
        className={props.isPressed ? "active" : ""}
        onClick={() => {
          props.setFilter(props.name);
        }}
      >
        {props.name}
      </button>
    </>
  );
};

export default FilterList;

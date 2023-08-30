import React from "react";

const FilterList = (props) => {
  return (
    <>
      <p onClick={() => props.setFilter(props.name)}>{props.name}</p>
    </>
  );
};

export default FilterList;

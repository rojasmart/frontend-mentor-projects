import React from "react";

const FilterList = (props) => {
  return (
    <>
      <div className="todo-length">
        {/* <p> {filtered.length} items left</p> */}
      </div>
      <div className="todo-filters">
        <p onClick={() => props.setFilter(props.name)}>{props.name}</p>
      </div>
    </>
  );
};

export default FilterList;

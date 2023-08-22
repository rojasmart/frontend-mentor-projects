import React from "react";

const List = ({ items, handleRemove, handleChange }) => {
  return (
    <div className="todo-list">
      {items.map((todo) => {
        return (
          <article key={todo.id} className="todo-item">
            <div className="todo-item-content">
              <span className="todo-create__check"></span>
              <input
                type="text"
                value={todo.text}
                onChange={(e) => handleChange(todo.id, e.target.value)}
              />
            </div>
            <img
              className="todo-create__cross"
              src={iconCross}
              onClick={() => handleRemove(todo.id)}
              alt="icon delete"
            />
          </article>
        );
      })}
    </div>
  );
};

export default List;

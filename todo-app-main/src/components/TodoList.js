import React from "react";
import iconCross from "../images/icon-cross.svg";

const TodoList = ({
  todos,
  completed,
  name,
  id,
  onChange,
  handleRemove,
  handleComplete,
}) => {
  return (
    <>
      {todos && todos.length > 0 ? (
        <div className="todo-list">
          <article className="todo-item">
            <div className="todo-item-content">
              <span
                className={
                  completed
                    ? "todo-create__check completed"
                    : "todo-create__check"
                }
                onClick={() => handleComplete(id)}
              ></span>
              <input
                type="text"
                value={name}
                onChange={(e) => onChange(e, id)}
                className={completed ? "strike" : "todo-text"}
              />
            </div>
            <img
              className="todo-create__cross"
              src={iconCross}
              onClick={() => handleRemove(id)}
              alt="icon delete"
            />
            <span className="todo-border"></span>
          </article>
        </div>
      ) : (
        <p className="todo-alert">No todos</p>
      )}
    </>
  );
};

export default TodoList;

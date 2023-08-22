import React, { useState, useEffect } from "react";
import iconCross from "./images/icon-cross.svg";

const getLocalStorage = () => {
  let list = localStorage.getItem("todos");
  if (list) {
    return JSON.parse(localStorage.getItem("todos"));
  } else {
    return [];
  }
};

function App() {
  const [todos, setTodos] = useState(getLocalStorage());
  const [todo, setTodo] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false,
    };
    setTodos([...todos].concat(newTodo));
    setTodo("");
  };

  const handleRemove = (id) => {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleComplete = (id) => {
    console.log(id);
    handleToggle(id);
  };

  const handleToggle = (id) => {
    let mapped = todos.map((todo) => {
      return todo.id === Number(id)
        ? { ...todo, complete: !todo.complete }
        : { ...todo };
    });
    setTodos(mapped);
  };

  return (
    <>
      <div className="container">
        <div className="background-image"></div>
        <header className="header">
          <h1 className="title">TODO</h1>
          <button className="toggle-theme">toggle</button>
        </header>
        <main>
          <section className="todo-wrapper">
            <form className="todo-form" onSubmit={handleSubmit}>
              <label className="todo-create">
                <span className="todo-create__check"></span>
                <input
                  type="text"
                  className="todo"
                  placeholder="Create new todo..."
                  value={todo}
                  onChange={(e) => setTodo(e.target.value)}
                />
              </label>
            </form>
            <div className="todo-container">
              {todos.length > 0 ? (
                <div className="todo-list">
                  {todos.map((todo) => {
                    return (
                      <article key={todo.id} className="todo-item">
                        <div className="todo-item-content">
                          <span
                            className={
                              todo.complete
                                ? "todo-create__check completed"
                                : "todo-create__check"
                            }
                            onClick={() => handleComplete(todo.id)}
                          ></span>
                          <input
                            type="text"
                            value={todo.text}
                            onChange={(e) =>
                              setTodos((prevTodos) =>
                                prevTodos.map((prevTodo) => {
                                  if (prevTodo.id !== todo.id) return prevTodo; // "todo" comes from the map loop

                                  return {
                                    ...prevTodo,
                                    text: e.target.value,
                                  };
                                })
                              )
                            }
                            className={todo.complete ? "strike" : ""}
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
              ) : (
                <p className="todo-alert">No todos</p>
              )}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;

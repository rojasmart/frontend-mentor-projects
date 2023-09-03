import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import FilterList from "./components/FilterList";
import moon from "./images/icon-moon.svg";
import sun from "./images/icon-sun.svg";
import useLocalStorage from "use-local-storage";

const getLocalStorage = () => {
  let list = localStorage.getItem("todos");
  if (list) {
    return JSON.parse(localStorage.getItem("todos"));
  } else {
    return [];
  }
};

const FILTER_MAP = {
  All: () => true,
  Active: (todo) => !todo.complete,
  Completed: (todo) => todo.complete,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function App() {
  const [todos, setTodos] = useState(getLocalStorage());
  const [todo, setTodo] = useState("");
  const [filter, setFilter] = useState("All");

  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  const filtered = todos.filter((todo) => todo.complete === false);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo) {
      const newTodo = {
        id: new Date().getTime(),
        text: todo,
        complete: false,
      };
      setTodos([...todos].concat(newTodo));
      setTodo("");
    }
  };

  const onChange = (e, id) => {
    setTodos((prevTodos) =>
      prevTodos.map((prevTodo) => {
        if (prevTodo.id !== id) return prevTodo;

        return {
          ...prevTodo,
          text: e.target.value,
        };
      })
    );
  };

  const handleRemove = (id) => {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleComplete = (id) => {
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

  const clearTodos = () => {
    let clearTodos = [...todos].filter((todo) => todo.complete !== true);
    return setTodos(clearTodos);
  };

  const taskList = todos
    .filter(FILTER_MAP[filter])
    .map((todo) => (
      <TodoList
        todos={todos}
        id={todo.id}
        name={todo.text}
        completed={todo.complete}
        key={todo.id}
        handleComplete={handleComplete}
        handleRemove={handleRemove}
        onChange={onChange}
      />
    ));

  const filterList = FILTER_NAMES.map((name) => (
    <FilterList
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  return (
    <>
      <div className="container" data-theme={theme}>
        {theme === "light" ? (
          <div className="background-image-dark"></div>
        ) : (
          <div className="background-image-light"></div>
        )}
        <header className="header">
          <h1 className="title">TODO</h1>
          <button className="toggle-theme-btn" onClick={switchTheme}>
            {theme === "light" ? (
              <img src={moon} alt="toogle-theme" />
            ) : (
              <img src={sun} alt="toogle-theme" />
            )}
          </button>
        </header>
        <main>
          <section className="todo-wrapper">
            <form
              className={
                theme === "light" ? "todo-form-light" : "todo-form-dark"
              }
              onSubmit={handleSubmit}
            >
              <label className="todo-create">
                <span className="todo-create__check"></span>
                <input
                  type="text"
                  className={
                    theme === "light"
                      ? "todo-text-search"
                      : "todo-text-search-dark"
                  }
                  placeholder="Create new todo..."
                  value={todo}
                  onChange={(e) => setTodo(e.target.value)}
                />
              </label>
            </form>
            <div
              className={
                theme === "light"
                  ? "todo-container-light"
                  : "todo-container-dark"
              }
            >
              {taskList}
              <div className="todo-action">
                <div className="todo-length">
                  <button>{filtered.length} items left</button>
                </div>
                <div className="todo-filters">{filterList}</div>
                <div className="todo-clear">
                  <button onClick={() => clearTodos()}>Clear Completed</button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;

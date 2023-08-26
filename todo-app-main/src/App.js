import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import FilterList from "./components/FilterList";

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

  // const filtered = todos.filter((todo) => todo.complete === false);

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

  const onChange = (e) => {
    setTodos((prevTodos) =>
      prevTodos.map((prevTodo) => {
        if (prevTodo.id !== todo.id) return prevTodo;

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
                  className="todo-text-search"
                  placeholder="Create new todo..."
                  value={todo}
                  onChange={(e) => setTodo(e.target.value)}
                />
              </label>
            </form>
            <div className="todo-container">
              {taskList}
              <div className="todo-action">{filterList}</div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;

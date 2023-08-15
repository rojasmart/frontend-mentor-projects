import React, { useState } from "react";
import iconCross from "./images/icon-cross.svg";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    setItems((prevItems) => [...prevItems, inputValue]);
    setInputValue("");
  };

  const handleRemove = (index) => {
    setItems((items) => {
      return items.filter((_, i) => i !== index);
    });
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
            <form className="todo-form" onSubmit={handleAdd}>
              <label className="todo-create">
                <span className="todo-create__check"></span>
                <input
                  type="text"
                  className="todo"
                  placeholder="Create new todo..."
                  value={inputValue}
                  onChange={handleChange}
                />
              </label>
            </form>
            <div className="todo-container">
              <div className="todo-list">
                <ul>
                  {items.map((item, index) => {
                    return (
                      <li key={index}>
                        <span className="todo-create__check"></span>
                        {item}
                        <img
                          className="todo-create__cross"
                          src={iconCross}
                          onClick={() => handleRemove(index)}
                          alt="icon delete"
                        />
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;

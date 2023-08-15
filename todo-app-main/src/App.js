function App() {
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
            <form className="todo-form">
              <label className="todo-create">
                <span class="todo-create__check"></span>
                <input
                  type="text"
                  className="todo"
                  placeholder="Create new todo..."
                />
              </label>
            </form>
            <div className="todo-container">
              <div className="todo-list">
                <ul>
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                  <li>Item 4</li>
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

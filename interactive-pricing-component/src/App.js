import RangeSlider from "./components/rangeSlider";

function App() {
  return (
    <main>
      <header>
        <h1>Simple, traffic-based pricing</h1>
        <p>Sign-up for our 30-day trial. No credit card required. </p>
      </header>
      <div className="card">
        <RangeSlider />

        <div className="card-footer">
          <ul className="card-footer-list">
            <li>Unlimited site</li>
            <li>100% data ownership </li>
            <li>Email reports</li>
          </ul>
          <button> Start My Trial</button>
        </div>
      </div>
    </main>
  );
}

export default App;

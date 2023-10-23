import RangeSlider from "./components/rangeSlider";
import { BsCheck } from "react-icons/bs";

function App() {
  return (
    <main>
      <header>
        <h1>Simple, traffic-based pricing</h1>
        <p>Sign-up for our 30-day trial. No credit card required. </p>
      </header>
      <div className="card">
        <RangeSlider />
        <div className="horizontal-line"></div>
        <div className="card-footer">
          <ul className="card-footer-list">
            <li>
              <BsCheck color={"#10D8C4"} size={"18px"} />
              Unlimited site
            </li>
            <li>
              <BsCheck color={"#10D8C4"} size={"18px"} />
              100% data ownership
            </li>
            <li>
              <BsCheck color={"#10D8C4"} size={"18px"} />
              Email reports
            </li>
          </ul>
          <button> Start My Trial</button>
        </div>
      </div>
    </main>
  );
}

export default App;

import React, { useState } from "react";
import bgMobile from "./images/bg-main-mobile.png";
import bgDesktop from "./images/bg-main-desktop.png";
import CreditCard from "./components/CreditCard";
import Form from "./components/Form";

function App() {
  const [formInfo, setFormInfo] = useState({
    name: "",
    number: "",
    month: "",
    year: "",
    cvc: "",
  });
  return (
    <main className="app">
      <picture>
        <source srcSet={bgMobile} media="(max-width: 800px)" />
        <img src={bgDesktop} alt="background" />
      </picture>
      <aside className="card-wrapper">
        <CreditCard
          name={formInfo.name}
          number={formInfo.number}
          month={formInfo.month}
          year={formInfo.year}
          side={false}
        />
        <CreditCard cvc={formInfo.cvc} side={true} />
      </aside>
      <div className="form-wrapper">
        <Form handleData={setFormInfo} data={formInfo} />
      </div>
    </main>
  );
}

export default App;

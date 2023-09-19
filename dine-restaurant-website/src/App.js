import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Middle from "./components/Middle";
import Highlights from "./components/Highlights";
import Gathering from "./components/Gathering";
import CallToAction from "./components/CallToAction";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Middle />
        <Highlights />
        <Gathering />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;

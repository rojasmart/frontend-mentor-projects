import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Middle from "./components/Middle";
import Highlights from "./components/Highlights";
import Gathering from "./components/Gathering";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Middle />
        <Highlights />
        <Gathering />
      </main>
      <Footer />
    </div>
  );
}

export default App;

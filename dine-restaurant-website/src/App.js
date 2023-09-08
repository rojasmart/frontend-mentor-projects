import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Middle from "./components/Middle";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Middle />
      </main>
      <Footer />
    </div>
  );
}

export default App;

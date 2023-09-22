import Header from "../components/Header";
import Hero from "../components/Hero";
import Middle from "../components/Middle";
import Highlights from "../components/Highlights";
import Gathering from "../components/Gathering";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <div className="home">
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
    </>
  );
};

export default Home;

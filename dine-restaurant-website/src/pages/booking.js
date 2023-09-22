import React from "react";
import HeroBooking from "../components/HeroBooking";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Booking = () => {
  return (
    <div className="booking">
      <Header />
      <main>
        <HeroBooking />
      </main>
      <Footer />
    </div>
  );
};

export default Booking;

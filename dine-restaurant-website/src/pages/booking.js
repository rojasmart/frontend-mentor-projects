import React from "react";
import Header from "../components/Header";
import HeroBooking from "../components/HeroBooking";
import MiddleBooking from "../components/MiddleBooking";
import Footer from "../components/Footer";

const Booking = () => {
  return (
    <div className="booking">
      <Header />
      <main>
        <HeroBooking />
        <MiddleBooking />
      </main>
      <Footer />
    </div>
  );
};

export default Booking;

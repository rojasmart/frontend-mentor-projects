import React from "react";
import logo from "../images/logo.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="footer logo" />
        </div>
        <div className="footer-content">
          <div className="footer-address">
            <p>MARTHWAITE, SEDBERGH </p>
            <p>CUMBRIA </p>
            <p>+00 44 123 4567</p>
          </div>
          <div className="footer-schedule">
            <p>OPEN TIMES</p>
            <p>MON - FRI: 09:00 AM - 10:00 PM</p>
            <p>SAT - SUN: 09:00 AM - 11:30 PM</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

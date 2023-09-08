import React from "react";
import logo from "../images/logo.svg";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="header-logo">
          <img src={logo} alt="header logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;

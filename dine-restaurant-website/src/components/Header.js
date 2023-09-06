import React from "react";
import logo from "../images/logo.svg";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <img src={logo} alt="site logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;

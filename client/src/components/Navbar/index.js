import React from "react";
import logo from "./quizzical.png"

const Navbar = () => {
  return (
    <header>
      <a href="/">
        <img
          src={logo}
          className="Navbar-logo"
          alt="Quizzical Logo"
        />
      </a>
    </header>
  );
};

export default Navbar;

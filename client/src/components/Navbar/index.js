import React from "react";
import "../../styles.css";

const Navbar = () => {
  return (
    <header>
      <a href="/">
        <img
          src="../../images/quizzical.png"
          className="Navbar-logo"
          alt="Quizzical Logo"
        />
      </a>
    </header>
  );
};

export default Navbar;

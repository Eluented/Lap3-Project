import React from "react";
import { useLocation } from "react-router-dom";

export const LocationDisplay = () => {
  const location = useLocation();

  return (
    <div class="location-path-name" data-testid="navbar-location-display">
      {location.pathname}
    </div>
  );
};

const Navbar = () => {
  return (
    <header aria-label="header">
      <a href="/">
        <img
          src="../../images/quizzical.png"
          className="Navbar-logo"
          alt="Quizzical Logo"
          aria-label="navbar-logo"
        />
      </a>
      <LocationDisplay />
    </header>
  );
};

export default Navbar;

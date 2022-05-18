import React from "react";
import { useLocation } from "react-router-dom";
import { Navbar, Footer } from "../../components";

export const LocationDisplay = () => {
  const location = useLocation();

  return (
    <div class="location-path-name" data-testid="location-display">
      {location.pathname}
    </div>
  );
};

const NotFoundPage = () => {
  return (
    <>
      <Navbar />
      <div id="error">
        <h1>ERROR 404 - Page not found</h1>
        <img
          id="drinkMan"
          src="../images/drunk.png"
          alt="Animated drunk man"
          width="45%"
        ></img>
        <p>PLEASE DRINK RESPONSIBLY</p>
      </div>
      <LocationDisplay />
      <Footer />
    </>
  );
};

export default NotFoundPage;

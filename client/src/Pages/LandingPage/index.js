import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Footer } from "../../components";

export const LocationDisplay = () => {
  const location = useLocation();

  return (
    <div class="location-path-name" data-testid="location-display">
      {location.pathname}
    </div>
  );
};

const LandingPage = () => {
  // use this to redirect to other pages
  const navigate = useNavigate();

  return (
    <>
      <div id="LandingPage-section">
        <div id="LandingPage-container">
          <img
            src="../../images/quizzical-landing.png"
            id="Landing-logo"
            alt="Quizzical Logo"
          />
          <h2 id="Landing-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend
            viverra dictumst posuere aliquet sem nullam in diam. Eleifend
            viverra dictumst posuere aliquet sem nullam in diam.
          </h2>
          <button
            aria-label="play-button"
            className="primary-button"
            onClick={() => navigate("/agree")}
          >
            Play
          </button>
          <button
            aria-label="how-to-play-button"
            className="secondary-button"
            onClick={() => navigate("/rules")}
          >
            How to Play
          </button>
        </div>
        <Footer />
      </div>
      <LocationDisplay />
    </>
  );
};

export default LandingPage;

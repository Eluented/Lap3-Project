import React from "react";
import { Navbar } from "../../components";
import { useNavigate, useLocation } from "react-router-dom";

export const LocationDisplay = () => {
  const location = useLocation();

  return (
    <div class="location-path-name" data-testid="location-display">
      {location.pathname}
    </div>
  );
};

const BeforeYouStartPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div id="beforeYouStart-section">
        <h1 id="beforeYouStart-heading">Before you start, ensure...</h1>

        <div id="beforeYouStart-terms">
          <p>
            <i className="fa-solid fa-martini-glass icon"></i>Everyone playing
            is over the age of 18
          </p>

          <p>
            <i className="fa-solid fa-skull-crossbones icon"></i>Everyone
            playing will drink responsibly
          </p>

          <p>
            <i className="fa-solid fa-handshake "></i>You agree to our{" "}
            <a href="">privacy</a> and <a href="">cookie policy</a>
          </p>
        </div>

        <button
          id="agree-button"
          aria-label="agree-button"
          className="primary-button"
          onClick={() => navigate("/settings")}
        >
          Agree
        </button>
      </div>
      <LocationDisplay />
    </>
  );
};

export default BeforeYouStartPage;

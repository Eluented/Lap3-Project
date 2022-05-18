import React from "react";
import { Navbar, Results } from "../../components";
import { useNavigate, useLocation } from "react-router-dom";

export const LocationDisplay = () => {
  const location = useLocation();

  return (
    <div class="location-path-name" data-testid="location-display">
      {location.pathname}
    </div>
  );
};

const ResultsPage = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* NavBar & Title */}
      <div className="page-section">
        <Navbar />
        <div className="page-container">
          <h1>Results</h1>
          <h3>Player1, pick the Loser's poison!</h3>

          {/* Results container */}
          <div id="results-container">
            {/* <img
              id="winners-crown"
              src="./images/crown.png"
              alt="Royal crown"
            /> */}
            <div id="winner-container">
              <h2>
                <strong>Winner</strong>
              </h2>
              <p className="responsive-hidden-p">Player1</p>
              <div className="points-container">
                <p className="responsive-para">Player1</p>
                <img src="./images/beer.png" alt="Pint of frothy beer" />
                <p>3 points</p>
              </div>
            </div>

            <div id="loser-container">
              <h2>
                <strong>Loser</strong>
              </h2>
              <p className="responsive-hidden-p">Player2</p>
              <div className="points-container">
                <p className="responsive-para">Player2</p>
                <img
                  src="./images/whisky.png"
                  alt="Bottle of whisky and a spilt shot glass"
                />
                <p>1 point</p>
              </div>
            </div>
          </div>

          {/* Play Again Button */}
          <div className="btn-container">
            <button
              id="restartBtn"
              aria-label="play-again-button"
              className="primary-button"
              onClick={() => navigate("/settings")}
            >
              Play again
            </button>
          </div>
        </div>
      </div>
      <LocationDisplay />
    </>
  );
};

export default ResultsPage;

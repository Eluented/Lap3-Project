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

const RulesPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div id="rulesPage-section">
        <div className="page-container">
          <Navbar />
          <h1 id="rules-heading">Rules</h1>
          <ol id="rules-list">
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Deserunt, velit.
            </li>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Deserunt, velit.
            </li>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Deserunt, velit.
            </li>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Deserunt, velit.
            </li>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Deserunt, velit.
            </li>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Deserunt, velit.
            </li>
          </ol>
          <div className="btn-container">
            <button
              id="back-btn"
              className="primary-button"
              onClick={() => navigate(-1)}
            >
              Back
            </button>
          </div>
        </div>
      </div>
      <LocationDisplay />
    </>
  );
};

export default RulesPage;

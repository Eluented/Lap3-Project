import React from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../components";
import { Box } from "@mui/system";
import { Button, Container } from "@mui/material";
import { whiteStyles, settingsButtonStyles } from "../../components";
import quizzicalLanding from "./quizzical-landing.png"
import beer from "./beer.png"

const LandingPage = () => {
  // use this to redirect to other pages
  const navigate = useNavigate();

  return (
    <>
      <div id="LandingPage-section">
        <div id="LandingPage-container">
          <img
            src={quizzicalLanding}
            id="Landing-logo"
            alt="Quizzical Logo"
          />
          <h2 id="Landing-text">The drinking game like no other!</h2>
          <div id="beer-container">
            <img
              id="reverse-beer"
              src={beer}
              alt="frothy pint of beer"
            />
            <img src={beer} alt="frothy pint of beer" />{" "}
          </div>{" "}
          <Button
            fullWidth
            variant="contained"
            type="submit"
            style={settingsButtonStyles}
            onClick={() => navigate("/agree")}
            className="primary-button"
            sx={{ maxWidth: "36.5vw" }}
          >
            Play
          </Button>
          <Button
            fullWidth
            variant="contained"
            type="submit"
            style={whiteStyles}
            onClick={() => navigate("/rules")}
            className="primary-button"
            sx={{ maxWidth: "36.5vw" }}
          >
            How to Play
          </Button>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;

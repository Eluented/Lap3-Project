import React from "react";
import { Navbar } from "../../components";
import { useNavigate, useLocation } from "react-router-dom";
import { Box } from "@mui/system";
import { Button, Container } from "@mui/material";
import { settingsButtonStyles } from "../../components";

export const LocationDisplay = () => {
  const location = useLocation();

  return (
    <div className="location-path-name" data-testid="location-display">
      {location.pathname}
    </div>
  );
};

const RulesPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <Container maxWidth="lg" style={{ backgroundColor: "white" }} >
        <Box sx={{ display:"flex", flexDirection:"column", alignItems:"center", pt:"2%", pb:"5%", mt:"2%", mb:"5%" }} >
            <h1 id="rules-heading" >How to play </h1>
            <Box maxWidth="md">
              <p style={{fontSize:"20px"}}>
                <strong>To begin,</strong> pick a category, the difficulty of the
                questions and the number of questions you would like to answer. Once
                you have (picked your username) the game will begin!
              </p>
            </Box>

            <h2 style={{textDecoration:"underline"}}>Drinking Rules</h2>

            <Box maxWidth="md">
            <ol id="rules-list" >
              <li>If you get a question wrong, drink</li>
              <li>If the timer runs out before you answer, drink</li>
              <li>The Loser drinks a forfeit, decided by the winner</li>
              <li>Winner gets bragging rights, and a pint(winner's choice)</li>
            </ol>
            </Box>

            <Button
                fullWidth
                variant="contained"
                type="submit"
                style={settingsButtonStyles}
                onClick={() => navigate("/")}
                className="primary-button"
                sx={{maxWidth:"36.5vw"}}
              >
                Back
            </Button>
          <LocationDisplay />
        </Box>
      </Container>

    </>
  );
};

export default RulesPage;

import React from "react";
import { Navbar } from "../../components";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import { Button, Container } from "@mui/material";
import { settingsButtonStyles } from "../../components";

const BeforeYouStartPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <Container maxWidth="lg" style={{ backgroundColor: "white" }} >
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", pt: "2%", pb: "5%", mt: "2%", mb: "5%" }}>
          <h1 id="beforeYouStart-heading">Before you start, ensure...</h1>

          <Box maxWidth="lg" alignItems="center" justifyContent="center" display="flex">
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
                <i className="fa-solid fa-handshake "></i>Challenge your friends and
                remember to have fun!
              </p>
            </div>
          </Box>

          <Button
            fullWidth
            variant="contained"
            type="submit"
            style={settingsButtonStyles}
            onClick={() => navigate("/settings")}
            className="primary-button"
            sx={{ maxWidth: "36.5vw" }}
          >
            Agree
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default BeforeYouStartPage;

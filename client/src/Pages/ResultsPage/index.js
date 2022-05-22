import React, { useEffect } from "react";
import { Navbar, Results } from "../../components";
import { useNavigate } from "react-router-dom";
import { gameInfo, player1Sc, player2Sc } from "../../reducers/gameSlice";
import { useSelector, useDispatch } from "react-redux";
import { sendScoreToDB } from "../../actions/Trivia";
import { Button, Container } from "@mui/material";
import { settingsButtonStyles } from "../../components";
import beer from "./beer.png"
import crown from "./crown.png"
import whisky from "./whisky.png"

const ResultsPage = () => {
  const navigate = useNavigate();

  // get the formInfo again - get scores for player names
  const formInfo = useSelector(gameInfo);

  // player 1 and player 2 scores
  const player1Score = useSelector(player1Sc);
  const player2Score = useSelector(player2Sc);


  // making the userdata into objects
  const sendingPlayer1Data = {
    username: formInfo.player1,
    score: player1Score
  }

  const sendingPlayer2Data = {
    username: formInfo.player2,
    score: player2Score
  }

  // sending user scores
  useEffect(() => {
    sendScoreToDB(sendingPlayer1Data)
    sendScoreToDB(sendingPlayer2Data)
  }, [sendingPlayer2Data, sendingPlayer1Data])


  return (
    <>
      {/* NavBar & Title */}

      <div className="page-section">
        <Navbar />
        <Container maxWidth="lg" style={{ backgroundColor: "white", marginTop:"2%", paddingBottom:"2%" }} >
          <div className="page-container">
            <h1>Results</h1>
            <h3>{player1Score > player2Score ? formInfo.player1 : formInfo.player2}, pick the {player1Score < player2Score ? formInfo.player1 : formInfo.player2}'s poison!</h3>

            {/* Results container */}
            <div id="results-container">
              <img
                id="winners-crown"
                src={crown}
                alt="Royal crown"
              />
              <div id="winner-container">
                <h2>
                  <strong>Winner</strong>
                </h2>
                <p className="responsive-hidden-p">{player1Score > player2Score ? formInfo.player1 : formInfo.player2}</p>
                <div className="points-container">
                  <p className="responsive-para">{player1Score > player2Score ? formInfo.player1 : formInfo.player2}</p>
                  <img src={beer} alt="Pint of frothy beer" />
                  <p>{player1Score > player2Score ? player1Score : player2Score} points</p>
                </div>
              </div>

              <div id="loser-container">
                <h2>
                  <strong>Loser</strong>
                </h2>
                <p className="responsive-hidden-p">{player1Score < player2Score ? formInfo.player1 : formInfo.player2}</p>
                <div className="points-container">
                  <p className="responsive-para">{player1Score < player2Score ? formInfo.player1 : formInfo.player2}</p>
                  <img
                    src={whisky}
                    alt="Bottle of whisky and a spilt shot glass"
                  />
                  <p>{player1Score < player2Score ? player1Score : player2Score} point</p>
                </div>
              </div>
            </div>

            {/* Play Again Button */}
            <Button
              fullWidth
              variant="contained"
              type="submit"
              style={settingsButtonStyles}
              onClick={() => navigate("/settings")}
              className="primary-button"
              sx={{ maxWidth: "36.5vw" }}
            >
              Play Again
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ResultsPage;

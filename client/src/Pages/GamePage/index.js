import React from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "../../components";

export const LocationDisplay = () => {
  const location = useLocation();

  return (
    <div class="location-path-name" data-testid="location-display">
      {location.pathname}
    </div>
  );
};

const GamePage = () => {
  return (
    <>
      <Navbar />
      <div class="timer">
        <div class="remaining-time-line">.</div>
        <div class="remaining-time-text">0:29</div>
      </div>
      <div class="game-container">
        <div class="players">
          <div class="player1">
            Player1
            <div class="player1-score">Score: 2</div>
          </div>
          <div class="player2 active-player">
            Player2
            <div class="player2-score">Score: 1</div>
          </div>
        </div>
        <div class="question">1. Lorem ipsum dolor sit amet, diam?</div>

        <div class="answers-container">
          <div class="answer1">A</div>
          <div class="answer2">B</div>
          <div class="answer3">C</div>
          <div class="answer4">D</div>
        </div>
      </div>
      <LocationDisplay />
    </>
  );
};

export default GamePage;

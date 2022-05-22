import React, { useEffect, useState, useRef } from "react";
import { Navbar, Timer, Question, QuestionNumber } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { CircularProgress, Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import { decode } from "html-entities";
import { useNavigate } from "react-router-dom";
import { gameInfo } from "../../reducers/gameSlice";
import { questions } from "../../reducers/questionsSlice";
import {
  gameId,
  updateRoundSettings,
  updatePlayer1,
  updatePlayer2,
} from "../../reducers/gameSlice";

export const LocationDisplay = () => {
  const location = useLocation();

  return (
    <div class="location-path-name" data-testid="location-display">
      {location.pathname}
    </div>
  );
};

const GamePage = () => {
  // hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // info about the quiz questions & answers
  const [answers, setAnswers] = useState();
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [options, setOptions] = useState([]);

  // player info -  to switch players
  const [player1, setPlayer1] = useState(true);
  const [player2, setPlayer2] = useState(false);

  // player info - set scores
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);

  // redux stuff
  const allQuestions = useSelector(questions);
  const questionsStatus = useSelector((state) => state.questions.status);
  const formInfo = useSelector(gameInfo);

  // timerstuff
  const [timer, setTimer] = useState(formInfo.timer);

  function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest function.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  useInterval(() => {
    if (timer > 0) setTimer(timer - 1);
    else if (timer === 0) {
      // when timer resets ... say you were wrong and increase question
      alert("FAIL. DRINK UP!");
      setCurrentQuestion((prev) => prev + 1);

      // switch players
      if (player1) {
        setPlayer1(false);
        setPlayer2(true);
      } else {
        setPlayer1(true);
        setPlayer2(false);
      }

      setTimer(formInfo.timer);
    }
  }, 1000);

  useEffect(() => {
    if (questionsStatus === "failed") {
      <Typography variant="h6" mt={20} color="red">
        Technical Difficulties! Refresh the Page and Take a Shot!
      </Typography>;
    }

    if (questionsStatus === "fulfilled") {
      setAnswers([
        allQuestions.correct_answer,
        ...allQuestions.incorrect_answers,
      ]);
    }
  }, [questionsStatus, dispatch]);

  // shuffling

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  useEffect(() => {
    if (allQuestions?.length) {
      const question = allQuestions[currentQuestion - 1];
      let answers = [...question.incorrect_answers];

      answers.splice(
        getRandomInt(question.incorrect_answers.length),
        0,
        question.correct_answer
      );
      setOptions(answers);
    }
  }, [allQuestions, currentQuestion]);

  // when clicked
  const handleClickAnswer = (e) => {
    if (player1) {
      setPlayer1(false);
      setPlayer2(true);
    } else {
      setPlayer1(true);
      setPlayer2(false);
    }

    setTimer(formInfo.timer);

    const question = allQuestions[currentQuestion - 1];

    // when correct ...
    if (e.target.textContent === question.correct_answer) {
      alert("CORRECT!");
      if (player1) {
        setPlayer1Score((prev) => prev + 1);
      }
      if (player2) {
        setPlayer2Score((prev) => prev + 1);
      }
    } else {
      // if wrong ...
      alert("FAIL. DRINK UP!");
    }

    if (currentQuestion < allQuestions.length) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      dispatch(updatePlayer1(player1Score));
      dispatch(updatePlayer2(player2Score));
      navigate("/results");
    }
  };

  // function answerClick(e) {
  //   if (player1) {
  //     setPlayer1(false);
  //     setPlayer2(true);
  //   } else {
  //     setPlayer1(true);
  //     setPlayer2(false);
  //   }
  //   let currentAnswer = e.target.innerHTML;
  //   setCurrentQuestion((prev) => prev + 1);

  //   // Checking the answer & provide user feedback
  //   if (currentAnswer === allQuestions[currentQuestion - 1].correct_answer) {
  //     // resets timer
  //     setTimer(formInfo.timer + 1);

  //     if (player1) {
  //       setPlayer1Score((prev) => prev + 1);
  //     }
  //     if (player2) {
  //       setPlayer2Score((prev) => prev + 1);
  //     }
  //     return alert("CORRECT!");
  //   } else {
  //     return alert("FAIL. DRINK UP!");
  //   }
  // }

  return (
    <>
      <Navbar />

      {allQuestions.length === 0 ? 
              <Box sx={{display:"flex", justifyContent:"center"}}>
                <CircularProgress size={20} />
              </Box >
           : <Timer className="timer" currTime={timer} maxTime={formInfo.timer} /> }
      
      <QuestionNumber
        currQuestion={currentQuestion}
        numOfQuestions={formInfo.numOfQuestions}
      />

      <div className="game-container">
        <div className="players">
          <div className={player1 ? "active-player player1" : "player1"}>
            Player1: {formInfo.player1}
            <div className="player1-score">Score: {player1Score}</div>
          </div>
          <div className={player2 ? "active-player player2" : "player2"}>
            Player2: {formInfo.player2}
            <div className="player2-score">Score: {player2Score}</div>
          </div>
        </div>

        <div className="question">
          {questionsStatus === "fulfilled" ? 
          decode(allQuestions[currentQuestion - 1].question) 
          : 
          <h1>Loading...</h1>
          }
        </div>
        <div className="answers-container">
          {questionsStatus === "fulfilled" ? 
          options.map((data, id) => (
            <div
              className={`answer${id + 1}`}
              onClick={handleClickAnswer}
              key={id}
            >
              {decode(data)}
            </div>
          ))
           : 
           <Box mt={20}>
           {" "}
           <CircularProgress size={150} />{" "}
           </Box>
          }
        </div>
      </div>
    </>
  );
};

export default GamePage;

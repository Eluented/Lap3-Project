import React, { useEffect, useState } from "react";
import { Box } from '@mui/system';
import { Button } from "@mui/material"
import { Navbar } from "../../components";
import { Categories, SelectField, difficultyOptions, TextFieldComp, timerOptions, questionsOptions, settingsButtonStyles } from '../../components';
import { useNavigate, useLocation } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

export const LocationDisplay = () => {
  const location = useLocation();

  return (
    <div class="location-path-name" data-testid="location-display">
      {location.pathname}
    </div>
  );
};

const SettingsPage = () => {
  const navigate = useNavigate();
  const [roundSettings, setRoundSettings] = useState([]);

  function handleSubmit(e) {
    return e.preventDefault();
  }


  const updateSettingsField = (index, propertyName) => e => {
    const settings = [...roundSettings];
    settings[index][propertyName] = parseInt(e.target.value);
    setRoundSettings(settings);
  };

  const startGame = () => {
    dispatch(updateRoundSettings(roundSettings));
    history.push(`question/${id}`);
  };

  return (
    <>
      <Navbar />

      <Container maxWidth="md" style={{backgroundColor:"white"}}>

        <Box textAlign="center" mt={5} >

          <h1 className="quiz-settings">Quiz Settings</h1>
          {"\n"}
          {"\n"}
          <Typography variant="h5">
            How to Play
          </Typography>

          <form onSubmit={handleSubmit}>

            <label for="category">Category</label>
            <Categories />

            <label for="difficulty">Difficulty</label>
            <SelectField options={difficultyOptions} label="Difficulty"/>

            <label for="qnumber">Number of Questions</label>
            <SelectField options={questionsOptions} label="Number of Questions"/>

            <label for="timer">Timer</label>
            <SelectField options={timerOptions} label="Timer"/>

            <label for="timer">Player 1 Name</label>
            <TextFieldComp  label="Player 1 Name" />

            <label for="timer">Player 2 Name</label>
            <TextFieldComp label="Player 2 Name"/>

            <Button fullWidth variant="contained" type="submit" 
            style={settingsButtonStyles}> 
              Play
            </Button>
          </form>
        </Box>
      </Container>
      <LocationDisplay />
    </>
  );
};

export default SettingsPage;

import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Navbar } from "../../components";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { gameId, updateRoundSettings } from "../../reducers/gameSlice.js";
import { fetchCategories, categories } from "../../reducers/categoriesSlice.js";
import { fetchQuestions } from "../../reducers/questionsSlice.js";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Button,
  Select,
  CircularProgress,
  Typography,
  TextField,
  Container,
} from "@mui/material";
import {
  Categories,
  SelectField,
  difficultyOptions,
  TextFieldComp,
  timerOptions,
  questionsOptions,
  settingsButtonStyles,
} from "../../components";

const SettingsPage = () => {
  // hooks
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const categoryStatus = useSelector(state => state.categories.status);

  // fetching categories and loading form
  useEffect(() => {
    if (categoryStatus === "idle") {
      dispatch(fetchCategories());
    }

    if (categoryStatus === "failed") {
      <Typography variant="h6" mt={20} color="red">
        Technical Difficulties! Refresh the Page and Take a Shot!
      </Typography>;
    }
  }, [categoryStatus, dispatch]);

  //getting categories from redux
  const allCategories = useSelector(categories);

  // declaring values for the form
  const [form, setFormValue] = useState({
    category: "",
    difficulty: "easy",
    numOfQuestions: 10,
    timer: 15,
    player1: "",
    player2: "",
  });

  // each time something changes in the form it will find the key by name and set the value
  const changeHandler = (e) => {
    setFormValue({ ...form, [e.target.name]: e.target.value });
  };

  // form input values
  function handleSubmit(e) {
    return e.preventDefault();
  }



  const startGame = (e) => {
    e.preventDefault();
    dispatch(updateRoundSettings(form));
    dispatch(fetchQuestions(form));
    navigate("/game");
  };



  return (
    <>
      <Navbar />

      <Container maxWidth="md" style={{ backgroundColor: "white" }}>
        <Box sx={{ pt: "2%", pb: "5%", mt: "2%", mb: "5%" }}>
          <h1 className="quiz-settings-title">Quiz Settings</h1>
          <h4
            className="quiz-settings-rules-link"
            onClick={() => navigate("/rules")}
          >
            How to Play
          </h4>

          {allCategories.length === 0 ? <h1>Loading ...</h1> :
            <Box mt={3} width="100%">
              <FormControl fullWidth>
                <InputLabel>Categories</InputLabel>
                <Select
                  value={form.category}
                  name="category"
                  label="Categories"
                  onChange={changeHandler}
                >
                  {allCategories.map(({ name, id }) => (
                    <MenuItem value={id} key={id}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          }
          <form onSubmit={handleSubmit}>

            <Box mt={3} width="100%">
              <FormControl fullWidth>
                <InputLabel>Difficulty</InputLabel>
                <Select
                  value={form.difficulty}
                  name="difficulty"
                  label="Difficulty"
                  onChange={changeHandler}
                >
                  {difficultyOptions.map(({ id, name }) => (
                    <MenuItem value={id} key={id}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>

            <Box mt={3} width="100%">
              <FormControl fullWidth>
                <InputLabel>Total Questions</InputLabel>
                <Select
                  value={form.numOfQuestions}
                  name="numOfQuestions"
                  label="Total Questions"
                  onChange={changeHandler}
                >
                  {questionsOptions.map(({ id, name }) => (
                    <MenuItem value={id} key={id}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>

            <Box mt={3} width="100%">
              <FormControl fullWidth>
                <InputLabel>Timer</InputLabel>
                <Select
                  value={form.timer}
                  name="timer"
                  label="Timer"
                  onChange={changeHandler}
                >
                  {timerOptions.map(({ id, name }) => (
                    <MenuItem value={id} key={id}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>

            <Box mt={3} width="100%">
              <FormControl fullWidth>
                <TextField
                  variant="outlined"
                  type="text"
                  label="Player 1 Name"
                  name="player1"
                  onChange={changeHandler}
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                />
              </FormControl>
            </Box>

            <Box mt={3} width="100%">
              <FormControl fullWidth>
                <TextField
                  required
                  variant="outlined"
                  type="text"
                  label="Player 2 Name"
                  name="player2"
                  onChange={changeHandler}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                />
              </FormControl>
            </Box>
            <Box style={{ justifyContent: "center", display: "flex" }}>
              <Button
                fullWidth
                variant="contained"
                type="submit"
                style={settingsButtonStyles}
                onClick={startGame}
                className="primary-button"
              >
                Play
              </Button>
            </Box>
          </form>
        </Box>
      </Container>
    </>
  );
};

export default SettingsPage;

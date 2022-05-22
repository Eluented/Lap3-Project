export { default as Navbar } from "./Navbar";
export { default as Footer } from "./Footer";
export { default as Results } from "./Results";
export { default as Timer } from "./Timer";
export { default as QuestionNumber } from "./QuestionNumber"; 
export { default as Question } from "./Question";

export var settingsButtonStyles = {
  color: "#000a3c",
  // height: "80px",
  fontWeight: 700,
  display: "block",
  border: "none",
  // fontSize: "30px",
  cursor: "pointer",
  // marginTop: "30px",
  backgroundColor: "#ffc107",
  fontFamily: "Poppins",
  textTransform: "none",
};

export var yellowStyles = {
  color: "#000a3c",
  height: "80px",
  fontWeight: 700,
  display: "block",
  border: "none",
  fontSize: "30px",
  cursor: "pointer",
  marginTop: "30px",
  backgroundColor: "#ffc107",
  fontFamily: "Poppins",
  textTransform: "none",
  width: "60%",
};

export var whiteStyles = {
  color: "#000a3c",
  // height: "80px",
  fontWeight: 700,
  display: "block",
  border: "none",
  // fontSize: "30px",
  cursor: "pointer",
  // marginTop: "30px",
  backgroundColor: "#ffc107",
  fontFamily: "Poppins",
  textTransform: "none",
  backgroundColor: "#e5e5e5",
};

export const difficultyOptions = [
  { id: "easy", name: "Easy" },
  { id: "medium", name: "Medium" },
  { id: "hard", name: "Hard" },
];

export const timerOptions = [
  { id: "15", name: 15 },
  { id: "30", name: 30 },
  { id: "45", name: 45 },
  { id: "60", name: 60 },
];

export const questionsOptions = [
  { id: "5", name: 5 },
  { id: "10", name: 10 },
  { id: "15", name: 15 },
  { id: "20", name: 20 },
];

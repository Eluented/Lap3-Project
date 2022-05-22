import React from "react";
import { useNavigate } from "react-router-dom";

export default function QuestionNumber({ currQuestion, numOfQuestions }) {
  const navigate = useNavigate()
  
  if (currQuestion > numOfQuestions) {
    return navigate("/results")
  }
  return (
    <div style={{display:"flex", justifyContent:"center", marginTop:"1em"}}>
      <span style={{fontSize:"1.5em"}}className="question-number">Question {currQuestion} of {numOfQuestions}</span>
    </div>
  );
}

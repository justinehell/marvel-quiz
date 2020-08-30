import React, { useState, useEffect } from "react";
import Levels from "../Levels";
import ProgressBar from "../ProgressBar";
// import Questions from "../Questions";
import { QuizMarvel } from "../QuizMarvel";

const Quiz = () => {
  // const [questions] = useState(QuizMarvel);

  const [levelNames] = useState(["debutant", "confirme", "expert"]);
  const [quizLevel] = useState(0);
  const [storedQuestions, setStoredQuestions] = useState([]);
  const [question, setQuestion] = useState(null);
  const [options, setOptions] = useState([]);
  const [idQuestion] = useState(0);

  const loadQuestions = (level) => {
    const fetchedArrayQuiz = QuizMarvel[0].quizz[level];
    // return new array without the answer
    const newArray = fetchedArrayQuiz.map(({ answer, ...rest }) => rest);
    setStoredQuestions(newArray);
  };

  useEffect(() => {
    loadQuestions(levelNames[quizLevel]);
  }, [levelNames, quizLevel]);

  useEffect(() => {
    if (storedQuestions[0] !== undefined) {
      setQuestion(storedQuestions[idQuestion].question);
      setOptions(storedQuestions[idQuestion].options);
    }
  }, [storedQuestions, idQuestion]);

  const displayOptions = options.map((option, index) => {
    return (
      <p key={index} className="answerOptions">
        {option}
      </p>
    );
  });

  return (
    <div className="">
      <Levels />
      <ProgressBar />
      <h2>{question}</h2>
      {displayOptions}
      <button className="btnSubmit">Suivant</button>
    </div>
  );
};

export default Quiz;

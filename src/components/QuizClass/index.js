import React from "react";
import Levels from "../Levels";
import ProgressBar from "../ProgressBar";
import { QuizMarvel } from "../QuizMarvel";

class Quiz extends React.Component {
  state = {
    levelNames: ["debutant", "confirme", "expert"],
    quizLevel: 0,
    maxQuestions: 10,
    storedQuestions: [],
    question: null,
    options: [],
    idQuestion: 0,
  };

  loadQuestion = (level) => {
    const fetchedArrayQuiz = QuizMarvel[0].quizz[level];
    if (fetchedArrayQuiz.length >= this.state.maxQuestions) {
      // Remove answer for the question - put the rest inside storedQuestions
      // return new array without the answer
      const newArray = fetchedArrayQuiz.map(({ answer, ...rest }) => rest);
      this.setState({
        storedQuestions: newArray,
      });
    } else {
      console.log("pas assez de questions!!!");
    }
  };

  componentDidMount() {
    this.loadQuestion(this.state.levelNames[this.state.quizLevel]);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.storedQuestions !== prevState.storedQuestions) {
      this.setState({
        question: this.state.storedQuestions[this.state.idQuestion].question,
        options: this.state.storedQuestions[this.state.idQuestion].options,
      });
    }
  }

  render() {
    const displayOptions = this.state.options.map((option, index) => {
      return (
        <p key={index} className="answerOptions">
          {option}
        </p>
      );
    });

    return (
      <div className="">
        <h2>CLASS COMPONENT</h2>
        <Levels />
        <ProgressBar />
        <h2>{this.state.question}</h2>
        {displayOptions}
        <button className="btnSubmit">Suivant</button>
      </div>
    );
  }
}

export default Quiz;

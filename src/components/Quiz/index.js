import React from "react";
import Levels from "../Levels";
import ProgressBar from "../ProgressBar";
import Questions from "../Questions";

const Quiz = ({ userData }) => {
  return (
    <div className="">
      <Levels />
      <ProgressBar />
      <Questions />
    </div>
  );
};

export default Quiz;

import React from "react";

import "../styles/components/selected-answer.scss";

const SelectAnswer = ({
  submitted,
  onClick,
  possibleAnswer,
  answers,
  i,
  selectedAnswerTexts,
  isAnsweredCorrectly,
  index,
  isAnswered,
}) => {
  console.log(selectedAnswerTexts);
  console.log(possibleAnswer);

  const getTextColor = () => {
    if (!(i in answers)) {
      return "";
    }
    if (submitted === true) {
      if (isAnsweredCorrectly && possibleAnswer.correctAnswer) {
        return "right-answer";
      } else if (!isAnsweredCorrectly && !possibleAnswer.correctAnswer) {
        return "wrong-answer";
      } else {
        return "";
      }
    }
  };

  return (
    <li className="answer-option">
      <input
        disabled={submitted}
        onClick={onClick}
        name={"twoPossibleAnswers" + i}
        type="radio"
        className="radio"
      />
      <p className={getTextColor()}>{possibleAnswer.title}</p>
    </li>
  );
};

export default SelectAnswer;
// {i in answers && answers[i] == true}
// onClick={() => select(possibleAnswer, i)}

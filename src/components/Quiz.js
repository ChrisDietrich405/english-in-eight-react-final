import { useState } from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import "../styles/components/quiz.scss";
import SelectAnswer from "./SelectAnswer";

function AnswerIcon({ isAnswered, isAnsweredCorrectly }) {
  //this is component. components are returned in the JSX code
  if (!isAnswered) {
    //is Answered and is AnsweredCorrectly are props
    return (
      <>
        {/* <AiOutlineQuestionCircle
          size={20}
          style={{ marginLeft: "10px", marginBottom: "5px" }}
        />{" "} */}
        <span>Not answered</span>
      </>
    );
  }
  return <></>;
}

export default function Quiz(props) {
  const [answers, setAnswers] = useState({});
  const [selectedAnswerTexts, setSelectedAnswerTexts] = useState({});

  const select = (answer, i) => {
    setAnswers({
      ...answers,
      ...{ [i]: "correctAnswer" in answer && answer.correctAnswer },
    });
    setSelectedAnswerTexts({ ...selectedAnswerTexts, [i]: answer });
  };

  const [submitted, setSubmitted] = useState(false); //if this is true the correct answers are already shown

  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const reset = (e) => {
    setAnswers({});
    setSubmitted(false);
  };

  return (
    <div className="quiz-container">
      <form onSubmit={submit} onReset={reset}>
        <div className="quiz-title">
          <h4>{props.title}</h4>
        </div>
        <ol className="questions-and-answers">
          {props.questions.map((question, i) => (
            <li key={i}>
              {`${i + 1}. ${question.title}`}

              {submitted === true && (
                <AnswerIcon
                  className="answer-icon"
                  isAnswered={i in answers}
                  isAnsweredCorrectly={i in answers && answers[i] === true}
                />
              )}
              <ul>
                {question.possibleAnswers.map((possibleAnswer, index) => {
                  return (
                    <SelectAnswer
                      key={`answer${index}`}
                      submitted={submitted}
                      onClick={() => select(possibleAnswer, i)}
                      possibleAnswer={possibleAnswer}
                      answers={answers}
                      i={i}
                      selectedAnswerTexts={selectedAnswerTexts}
                      isAnsweredCorrectly={i in answers && answers[i] === true}
                      index={index}

                      //if i in answers and answers[i] is true then return the green value
                    />
                  );
                })}
              </ul>
            </li>
          ))}
        </ol>
        <div className="quiz-buttons">
          <button className="btn btn-primary">Check your answers</button>
          <button className="btn btn-secondary" type="reset">
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

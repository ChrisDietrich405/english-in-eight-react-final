import Quiz from "../../../components/Quiz";
import "../../../styles/components/tables.scss";

export default function PresentContinuous() {
  return (
    <div className="page-body">
      <div className="page-title">
        <h2>Present Continuous</h2>
      </div>
      <div className="page-body">
        <p className="grammar-explanation-paragraph">
          The present continuous (also called present progressive) is a verb
          tense which is used to show that an ongoing action is happening now.
          The present continuous can also be used to show that an action is
          going to take place in the near future.
        </p>
        <div className="table-container">
          <table className="table-body">
            <tr>
              <th>Positive</th>
              <th>Positive Short Form</th>
            </tr>
            <tr>
              <td>I am swimming</td>
              <td>I'm swimming</td>
            </tr>
            <tr>
              <td>You are working</td>
              <td>You're working</td>
            </tr>
            <tr>
              <td>She, he, it is fighting</td>
              <td>She's he's it's fighting</td>
            </tr>
            <tr>
              <td>We are talking</td>
              <td>We're talking</td>
            </tr>
            <tr>
              <td>They are dancing</td>
              <td>They're dancing</td>
            </tr>
          </table>
        </div>
        <div className="table-container">
          <table className="table-body">
            <tr>
              <th>Negative</th>
              <th>Negative Short Form</th>
            </tr>
            <tr>
              <td>I am not swimming</td>
              <td>I'm not swimming</td>
            </tr>
            <tr>
              <td>You are not working</td>
              <td>You're not working</td>
            </tr>
            <tr>
              <td>She, he's it's fighting</td>
              <td>She's he's it's notfighting</td>
            </tr>
            <tr>
              <td>We are talking</td>
              <td>We're talking</td>
            </tr>
            <tr>
              <td>They are dancing</td>
              <td>They're dancing</td>
            </tr>
          </table>
        </div>
      </div>
      <Quiz
        title="Take a Quiz"
        questions={[
          {
            title: "I ___________ (study) at the moment.",
            possibleAnswers: [
              { title: "a. am study" },
              { title: "b. am studying", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "I ___________ (sleep).",
            possibleAnswers: [
              { title: "a. am not sleeping", correctAnswer: true },
              { title: "b. is not sleeping" },
            ],
            userAnswer: "",
          },
          {
            title: "You ___________ (play) badminton tonight.",
            possibleAnswers: [
              { title: "a. are not playing", correctAnswer: true },
              { title: "b. am not playing" },
            ],
            userAnswer: "",
          },
          {
            title: "We ___________ (watch) TV.",
            possibleAnswers: [
              { title: "a. are watch" },
              { title: "b. are watching", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "She ____________ (work) in Spain.",
            possibleAnswers: [
              { title: "a. are not working", correctAnswer: true },
              { title: "b. is not working" },
            ],
            userAnswer: "",
          },
          {
            title: "He ___________ (wait) for the bus.",
            possibleAnswers: [
              { title: "a. is not waiting", correctAnswer: true },
              { title: "b. are not waiting" },
            ],
            userAnswer: "",
          },
          {
            title: "They __________ (read).",
            possibleAnswers: [
              { title: "a. are reading", correctAnswer: true },
              { title: "b. is reading" },
            ],
            userAnswer: "",
          },
          {
            title: "We _______________ (go) to the movies tonight.",
            possibleAnswers: [
              { title: "a. are not going", correctAnswer: true },
              { title: "b. are not go" },
            ],
            userAnswer: "",
          },
          {
            title: "You ___________ (read) the newspaper.",
            possibleAnswers: [
              { title: "a. are not read" },
              { title: "b. are not reading", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "She _________ chocolate.",
            possibleAnswers: [
              { title: "a. am eating" },
              { title: "b. is eating", correctAnswer: true },
            ],
            userAnswer: "",
          },
        ]}
      ></Quiz>
    </div>
  );
}

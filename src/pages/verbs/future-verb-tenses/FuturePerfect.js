import Quiz from "../../../components/Quiz";

export default function FuturePerfect() {
  return (
    <div className="page-body">
      <div className="page-title">
        <h2>Future Perfect</h2>
      </div>
      <p className="grammar-explanation-paragraph">
        The future perfect tense is used to indicate a future event that has a
        definitive end date.{" "}
      </p>
      <div className="table-container">
        <table className="table-body">
          <thead>
            <tr>
              <th>Positive</th>
              <th>Negative</th>
              <th>Negative short form</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>I will have swum</td>
              <td>I will have not swum</td>
              <td>I won't have swum</td>
            </tr>
            <tr>
              <td>You will have fought</td>
              <td>You will have not fought</td>
              <td>You won't have fought</td>
            </tr>
            <tr>
              <td>She, he, it will have worked</td>
              <td>She, he, it will not have worked</td>
              <td>She, he, it won't have worked</td>
            </tr>
            <tr>
              <td>We will have talked</td>
              <td>We will not have talked</td>
              <td>We won't have talked</td>
            </tr>
            <tr>
              <td>They will have danced</td>
              <td>They will have not danced</td>
              <td>They won't danced</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        We use the future perfect to talk about 'how long' an action will have
        lasted compared to another action.{" "}
      </p>
      <ul className="page-examples">
        <li>Nia will have married Demarcus by then.</li>
        <li>The storm will have finished by the time we arrive.</li>
      </ul>
      <p>
        We use the future perfect with a future time word, (and often with 'by')
        to talk about an action that will finish before a certain time in the
        future, but we don't know exactly when.
      </p>
      <ul className="page-examples">
        <li>By 10, I will have finished my homework.</li>
        <li>By the time I'm sixty, I will have retired.</li>
      </ul>

      <Quiz
        title="Quiz"
        questions={[
          {
            title: "I ______________ (sleep) eight hours.",
            possibleAnswers: [
              { title: "a. will have slept", correctAnswer: true },
              { title: "b. will have sleep" },
            ],
            userAnswer: "",
          },
          {
            title: "The plant _________________ by then.",
            possibleAnswers: [
              { title: "a. will have grown", correctAnswer: true },
              { title: "b. will have grew" },
            ],
            userAnswer: "",
          },
          {
            title: "Henry ______________ by ten o’clock.",
            possibleAnswers: [
              { title: "a. will have returned", correctAnswer: true },
              { title: "b. will have return" },
            ],
            userAnswer: "",
          },
          {
            title:
              "When we get married, I ______________ Jerome for four years.",
            possibleAnswers: [
              { title: "a. will have known", correctAnswer: true },
              { title: "b. will have knew" },
            ],
            userAnswer: "",
          },
          {
            title:
              "At 4 o'clock, she ______________ in this office for 24 hours.",
            possibleAnswers: [
              { title: "a. will have been", correctAnswer: true },
              { title: "b. will have be" },
            ],
            userAnswer: "",
          },
          {
            title:
              "Mom ______________ our favorite food by the time you get home.",
            possibleAnswers: [
              { title: "a. will have grown" },
              { title: "b. will have grew", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "It _______________ raining by then.",
            possibleAnswers: [
              { title: "a. will have stopped", correctAnswer: true },
              { title: "b. will have stop" },
            ],
            userAnswer: "",
          },
          {
            title: "They _______________ Japan by the time you get home.",
            possibleAnswers: [
              { title: "a. will have leave" },
              { title: "b. will have left", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "By Friday he _____________ 56 hours.",
            possibleAnswers: [
              { title: "a. will have worked", correctAnswer: true },
              { title: "b. will have work" },
            ],
            userAnswer: "",
          },
          {
            title: "I _________________ to work by then .",
            possibleAnswers: [
              { title: "a. will have gone", correctAnswer: true },
              { title: "b. will have go" },
            ],
            userAnswer: "",
          },
        ]}
      ></Quiz>
    </div>
  );
}

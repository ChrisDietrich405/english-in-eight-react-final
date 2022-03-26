import Quiz from "../../../components/Quiz";

export default function PastContinuous() {
  return (
    <>
      <div className="page-title">
        <h2>Past Continuous</h2>
      </div>
      <p className="grammar-explanation-paragraph">
        The past continuous tense refers to an ongoing action or state that was
        happening at some time in the past. The past continuous tense is formed
        by combining the past tense of to be (i.e., was/were) with the verb’s
        present participle (-ing word).
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
              <td>I was swimming</td>
              <td>I was not swimming</td>
              <td>I wasn't swimming</td>
            </tr>
            <tr>
              <td>You were fighting</td>
              <td>You were not fighting</td>
              <td>You weren't fighting</td>
            </tr>
            <tr>
              <td>She, he, it was working</td>
              <td>She, he, it was not working</td>
              <td>She, he, it wasn't working</td>
            </tr>
            <tr>
              <td>We were talking</td>
              <td>We weren't talking</td>
              <td>We weren't talking</td>
            </tr>
            <tr>
              <td>They were dancing</td>
              <td>They were not dancing</td>
              <td>They weren't dancing</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="page-body">
        <p className="grammar-explanation-paragraph">
          We use the past continuous to describe something that was happening in
          the past when some other event interrupted it.
        </p>

        <ul className="page-examples">
          <li>
            I <b>was talking</b> to my sister when my son came home.
          </li>
          <li>
            They <b>were dancing</b> when the rain started.
          </li>
          <li>
            She <b>was watching </b> a movie when her husband told her the news.
          </li>
          <li>
            We <b>were working</b> in the garden when the dog started barking.
          </li>
        </ul>
      </div>
      <div className="page-body"></div>

      <Quiz
        title="Take a Quiz!"
        questions={[
          {
            title: "He ___________ (make) dinner when she came home.",
            possibleAnswers: [
              { title: "a. was making", correctAnswer: true },
              { title: "b. were making" },
            ],
            userAnswer: "",
          },
          {
            title: "You ___________ (sing) loudly when the fight started.",
            possibleAnswers: [
              { title: "a. were singing", correctAnswer: true },
              { title: "b. was singing" },
            ],
            userAnswer: "",
          },
          {
            title: "It __________ (rain) a lot when I noticed my car was gone.",
            possibleAnswers: [
              { title: "a. were raining" },
              { title: "b. was raining", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title:
              "They _____________ (work) on the computer when the teacher came in the room.",
            possibleAnswers: [
              { title: "a. was working" },
              { title: "b. were working", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "He __________ (leave) when she called him.",
            possibleAnswers: [
              { title: "a. were leaving" },
              { title: "b. was leaving", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title:
              "I __________ (cut) some vegetables when she told me she had already ordered our dinner.",
            possibleAnswers: [
              { title: "a. were cutting" },
              { title: "b. was cutting", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "We _________ (talk) to our neighbors when they came.",
            possibleAnswers: [
              { title: "a. was talking" },
              { title: "b. were talking", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title:
              "They ___________ (wash) the dishes when the baby started crying.",
            possibleAnswers: [
              { title: "a. were washing", correctAnswer: true },
              { title: "b. was washing" },
            ],
            userAnswer: "",
          },
          {
            title: "It ____________ (frustrate).",
            possibleAnswers: [
              { title: "a. were frustrating" },
              { title: "b. was frustrating", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title:
              "They ___________ (think) about a solution when Nia came up with a great idea.",
            possibleAnswers: [
              { title: "a. was thinking" },
              { title: "b. were thinking", correctAnswer: true },
            ],
            userAnswer: "",
          },
        ]}
      ></Quiz>
    </>
  );
}

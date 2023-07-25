import Quiz from "../../../components/Quiz";

//DONE

export default function PastContinuous() {
  return (
    <>
      <div className="page-title">
        <h2>Past Continuous</h2>
      </div>
      <p className="grammar-explanation-paragraph">
        The past continuous tense is a way to talk about actions or events that
        were happening in the past and were ongoing or in progress at a specific
        moment. It is formed by using the past tense of the verb "to be"
        (was/were) and adding the present participle (-ing form) of the main
        verb.
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
          the past when another other event interrupted it.
        </p>

        <ul className="page-examples">
          <li>
            I <b>was dancing</b> when the fight started.
          </li>
          <li>
            She <b>was watching </b> a movie when her friend told her the news.
          </li>
          <li>
            <li>
              He <b>was talking</b> to his sister when his daughter came home.
            </li>
            I <b>was working</b> in the garden when the delivery guy came to the
            door.
          </li>
        </ul>
        <p className="grammar-explanation-paragraph">
          When you talk about an exact time in the past, use the past continuous
          tense if the action started before that specific time and then
          continued afterward.
        </p>
        <ul className="page-examples">
          <li>
            She <b>was working</b> in Morocco in November.
          </li>
          <li>
            At the end of the meeting, everyone at the meeting{" "}
            <b>was still arguing</b>.
          </li>
        </ul>
      </div>
      <div className="page-body"></div>

      <Quiz
        title="Take a Quiz!"
        questions={[
          {
            title:
              "I ___________ (think) about a solution when Nia came up with a great idea.",
            possibleAnswers: [
              { title: "a. was thinking" },
              { title: "b. were thinking", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "You ___________ (talk) loudly when the fight started.",
            possibleAnswers: [
              { title: "a. were talking", correctAnswer: true },
              { title: "b. was talking" },
            ],
            userAnswer: "",
          },
          {
            title:
              "It __________ (rain) a lot when I noticed my car door was broken",
            possibleAnswers: [
              { title: "a. were raining" },
              { title: "b. was raining", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title:
              "They _____________ (work) on the computer when the teacher came into the room.",
            possibleAnswers: [
              { title: "a. was working" },
              { title: "b. were working", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "He __________ (leave) when his boss called him.",
            possibleAnswers: [
              { title: "a. were leaving" },
              { title: "b. was leaving", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title:
              "I __________ (cut) some vegetables when he told me he had already ordered our lunch.",
            possibleAnswers: [
              { title: "a. were cutting" },
              { title: "b. was cutting", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "We _________ (talk) to our colleagues when they came in.",
            possibleAnswers: [
              { title: "a. was talking" },
              { title: "b. were talking", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "He ___________ (make) dinner when the phone rang.",
            possibleAnswers: [
              { title: "a. was making", correctAnswer: true },
              { title: "b. were making" },
            ],
            userAnswer: "",
          },
          {
            title: "They ___________ (wash) clothes when they heard a noise.",
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
        ]}
      ></Quiz>
    </>
  );
}

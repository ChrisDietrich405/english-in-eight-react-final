import Quiz from "../../../components/Quiz";

export default function PastPerfectContinuous() {
  return (
    <div>
      <div className="page-title">
        <h2>Past Perfect Continuous</h2>
      </div>
      <p className="grammar-explanation-paragraph">
        The past perfect continuous tense (also known as the past perfect
        progressive tense) shows that an action that started in the past
        continued up until another time in the past.
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
              <td>I had been swimming</td>
              <td>I had not been swimming</td>
              <td>I hadn't been swimming</td>
            </tr>
            <tr>
              <td>You had been fighting</td>
              <td>You had not been fighting</td>
              <td>You hadn't been fighting</td>
            </tr>
            <tr>
              <td>She, he, it had been working</td>
              <td>She, he, it had not been working</td>
              <td>She, he, it hadn't been working</td>
            </tr>
            <tr>
              <td>We had been talking</td>
              <td>We had not been talking</td>
              <td>We hadn't been talking</td>
            </tr>
            <tr>
              <td>They had been dancing</td>
              <td>They had not been dancing</td>
              <td>They hadn't been dancing</td>
            </tr>
          </tbody>
        </table>
      </div>
      <ul className="page-examples">
        <li>
          They <b>hadn't been studying</b> very hard.
        </li>
        <li>
          He <b>had been drinking</b> all day.
        </li>
        <li>
          John was very tired. He <b>had been running</b>.
        </li>
        <li>
          I could smell cigarettes. Somebody <b>had been smoking</b>.
        </li>
      </ul>

      <Quiz
        title="Take a Quiz!"
        questions={[
          {
            title:
              "He ______________ juice out the carton when mom walked into the kitchen.",
            possibleAnswers: [
              { title: "a. had been drinking", correctAnswer: true },
              { title: "b. has drunk" },
            ],
            userAnswer: "",
          },

          {
            title:
              "I ________________ (work) at the company for five years when I got the promotion.",
            possibleAnswers: [
              { title: "a. had worked" },
              { title: "b. had been working", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "Martha ____________ three miles a day she broke her leg.",
            possibleAnswers: [
              { title: "a. had walked" },
              { title: "b. had been walking", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title:
              "She _______________ (go) to that store since 2005 when it closed.",
            possibleAnswers: [
              { title: "a. had been going", correctAnswer: true },
              { title: "b. had gone" },
            ],
            userAnswer: "",
          },
          {
            title:
              "I _________________ (study) for hours when I fell asleep at my desk.",
            possibleAnswers: [
              { title: "a. had studied" },
              { title: "b. had been studying", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title:
              "We ________________ (argue) for days when Elizabeth came up with a solution.",
            possibleAnswers: [
              { title: "a. had argued" },
              { title: "b. had been arguing", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title:
              "They were angry because they ________________ (wait) for me for hours.",
            possibleAnswers: [
              { title: "a. had waited" },
              { title: "b. had been waiting", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "They ____________ (teach) at the university since June.",
            possibleAnswers: [
              { title: "a. had been teaching", correctAnswer: true },
              { title: "b. had taught" },
            ],
            userAnswer: "",
          },
          {
            title: "I ______________ (feel) a little depressed.",
            possibleAnswers: [
              { title: "a. had been feeling", correctAnswer: true },
              { title: "b. have felt" },
            ],
            userAnswer: "",
          },
          {
            title:
              "She ______________ (eat) too much and that's why they think she got sick.",
            possibleAnswers: [
              { title: "a. had been eating", correctAnswer: true },
              { title: "b. have eat" },
            ],
            userAnswer: "",
          },
        ]}
      ></Quiz>
    </div>
  );
}

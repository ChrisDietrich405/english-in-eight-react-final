import Quiz from "../../../components/Quiz"


export default function PresentPerfect() {
    return (
        <div className="page-body">
        <div className="page-title">
            <h2>Present Perfect </h2>
        </div>
        <div >
            <p>The present perfect is used to indicate a connection between the past and the present. The time of the action is before now but not specified.</p>
        </div>
        <div className="table-container">
              <table className="table-body">
                  <tr>
                    <th>Positive</th>
                    <th>Negative</th> 
                    <th>Negative short form</th> 
                  </tr>
                  <tr>
                    <td>I have swum</td>
                    <td>I have not swum</td> 
                    <td>I haven't swum</td> 
                  </tr>
                  <tr>
                    <td>You have worked</td>
                    <td>You have not worked</td>
                    <td>You haven't worked</td>
                  </tr>
                  <tr>
                    <td>She, he, it has fought</td>
                    <td>She, he, it has not fought</td> 
                    <td>She, he, it hasn't fought</td> 
                  </tr>
                  <tr>
                    <td>We have talked</td>
                    <td>We have not talked</td> 
                    <td>We haven't talked</td> 
                  </tr>
                  <tr>
                    <td>They have danced</td>
                    <td>They have not danced</td>
                    <td>They haven't danced</td>
                  </tr>
              </table>
            </div>
        <h4>Actions started in the past and continuing in the present</h4>
            <ul className="page-examples">
                <li>They haven't lived here for years.</li>
                <li>She has worked in the bank for five years.</li>
                <li>We have had the same car for ten years.</li>
                <li>Have you played the piano since you were a child?</li>
            </ul>
        <h4>When the time period referred to has not finished</h4>
            <ul className="page-examples">
                <li>I have worked hard this week.</li>
                <li>It has rained a lot this year.</li>
                <li>We haven't seen her today.</li>
            </ul>
        <h4>Actions repeated in an unspecified period between the past and now.</h4>
            <ul className="page-examples">
                <li>They have seen that movie six times.</li>
                <li>It has happened several times already.</li>
                <li>She has visited them frequently.</li>
                <li>We have eaten at that restaurant many times.</li>
            </ul>
        <h4>Actions completed in the very recent past (+just)</h4>
            <ul className="page-examples">
                <li>Have you just finished work?</li>
                <li>I have just eaten.</li>
                <li>We have just seen her.</li>
                <li>Has he just left?</li>
            </ul>
        <h4>When the precise time of the action is not important or not known, including actions which are finished (not continuing into the present)</h4>
            <ul className="page-examples">
                <li>Someone has eaten my soup!</li>
                <li>I have been to Paris.</li>
                <li>Have you seen  'Black Panther'?</li>
                <li>She's studied Japanese, Swahili, and English.</li>
            </ul>

 
        <p>Make the positive present perfect</p>
        <Quiz title="Quiz" questions={[
            {
                title: "I ___________ (study) French.",
                possibleAnswers: [
                    {title: "a. has studied"},
                    {title: "b. have studied", correctAnswer: true},
                ],
                userAnswer: "",
            },
            {
                title: "She ___________ (eat) tofu.",
                possibleAnswers: [
                    {title: "a. has eaten", correctAnswer: true},
                    {title: "b. have eaten"},
                ],
                userAnswer: "",
            },
            {
                title: "They ___________ (go) to Tanzania.",
                possibleAnswers: [
                    {title: "a. has gone",},
                    {title: "b. have gone", correctAnswer: true},
                ],
                userAnswer: "",
            },
            {
                title: "They ___________ (go) to Tanzania.",
                possibleAnswers: [
                    {title: "a. has gone",},
                    {title: "b. have gone", correctAnswer: true},
                ],
                userAnswer: "",
            },
            {
                title: "We ___________ (read) that book.",
                possibleAnswers: [
                    {title: "a. has read",},
                    {title: "b. have read", correctAnswer: true},
                ],
                userAnswer: "",
            },
            {
                title: "He ____________ (live) here for three years.",
                possibleAnswers: [
                    {title: "a. has lived", correctAnswer: true},
                    {title: "b. have lived",},
                ],
                userAnswer: "",
            },
            {
                title: "You ______________ Marcus for ten years.",
                possibleAnswers: [
                    {title: "a. have known", correctAnswer: true},
                    {title: "b. has known",},
                ],
                userAnswer: "",
            },
            {
                title: "We ______________ (be) here for two weeks.",
                possibleAnswers: [
                    {title: "a. have been", correctAnswer: true},
                    {title: "b. has been",},
                ],
                userAnswer: "",
            },
            {
                title: "I ______________ (lose) my keys.",
                possibleAnswers: [
                    {title: "a. have lost", correctAnswer: true},
                    {title: "b. has lost",},
                ],
                userAnswer: "",
            },
            {
                title: "He ______________ (drink) too much coffee.",
                possibleAnswers: [
                    {title: "a. have drunk", },
                    {title: "b. has drunk", correctAnswer: true},
                ],
                userAnswer: "",
            },
            {
                title: "They ______________ (miss) the train.",
                possibleAnswers: [
                    {title: "a. have missed", correctAnswer: true },
                    {title: "b. has drunk",},
                ],
                userAnswer: "",
            },

        ]} ></Quiz>

        </div>
    )
}
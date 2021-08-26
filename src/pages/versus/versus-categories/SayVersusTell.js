import Quiz from "../../../components/Quiz"

export default function SayVersusTell() {
    return (
            <div className="page-body">
                <div className="page-title">
                   <h2>Say versus Tell</h2>
                </div>
                <p className="grammar-explanation-paragraph">The verbs say and tell have similar meanings. They both mean "to communicate verbally with someone". But we often use them differently.</p>
                <p>The simple way to think of say and tell is:</p>
                <ul className="page-examples">
                    <li>You say something</li>
                    <li>You tell someone something</li>
                </ul>
                <div className="table-container">
              <table className="table-body">
                  <tr>
                    <th>You say something</th>
                    <th>You tell someone something</th>  
                  </tr>
                  <tr>
                    <td>Ram said that he was tired.</td>
                    <td>Ram told Jane that he was tired.</td> 
                  </tr>
                  <tr>
                    <td>Nia says you have a new job.</td>
                    <td>Nia tells me you have a new job.</td>
                  </tr>
                  <tr>
                    <td>Tara said: "I love you."</td>
                    <td>Tara told John that she loved him.</td> 
                  </tr>
              </table>
            </div>
                <p>We usually follow tell with a <b>personal object</b> (the person that we are speaking to). We usually use say without a personal object:</p>
                <ul className="page-examples">
                    <li>She told <b>me</b> that she loved John.</li>
                    <li>She said that she loved John.</li>
                    <li>He told <b>everybody</b> that he had to leave.</li>
                    <li>He said that he had to leave.</li>
                </ul>
                <p>With say, we sometimes use "to someone":</p>
                <ul className="page-examples">
                    <li>He said to me that he was tired.</li>
                    <li>Tara said to Ram that he had done very well.</li>
                    <li>Anthony said to her, "I hope you come soon."</li>
                    <li>"I'd like to sleep," she said to him quietly.</li>
                </ul>
                <p>There are a few fixed phrases with tell. We can’t use say with these phrases:</p>
                <ul className="page-examples">
                    <li>tell (someone) a story</li>
                    <li>tell (someone) a lie</li>
                    <li>tell (someone) the truth</li>
                    <li>tell the time </li>
                    <li>tell the difference</li>
                </ul>
            <p>Add a form of say or tell</p>
            <Quiz title="Quiz" questions={[
                {
                    title: "Maria  _____________ that she would join us after work.",
                    possibleAnswers: [
                        {title: "said", correctAnswer: true},
                        {title: "told"},
                    ],
                    userAnswer: "",
                },
                {
                    title: " He ______________ a very big lie. ",
                    possibleAnswers: [
                        {title: "told" },
                        {title: "said", correctAnswer: true},
                    ],
                    userAnswer: "",
                },
                {
                    title: "She _____________ me that she was going running this evening.",
                    possibleAnswers: [
                        {title: "said" },
                        {title: "told",correctAnswer: true},
                    ],
                    userAnswer: "",
                },
                {
                    title: "Demarcus  ___________ us that he couldn't come to the party.",
                    possibleAnswers: [
                        {title: "said" },
                        {title: "told",correctAnswer: true},
                    ],
                    userAnswer: "",
                },
                {
                    title: "Maria _________ that she went to the movies Saturday. ",
                    possibleAnswers: [
                        {title: "said", correctAnswer: true },
                        {title: "told"},
                    ],
                    userAnswer: "",
                },
                {
                    title: "She  __________ them she wanted to quit.",
                    possibleAnswers: [
                        {title: "said" },
                        {title: "told", correctAnswer: true },
                    ],
                    userAnswer: "",
                },
                {
                    title: "Hi, may I ________ with Mr. Gordon?",
                    possibleAnswers: [
                        {title: "speak", correctAnswer: true },
                        {title: "talk" },
                    ],
                    userAnswer: "",
                },
                {
                    title: "Please ____________ me a story daddy.",
                    possibleAnswers: [
                        {title: "tell", correctAnswer: true },
                        {title: "say" },
                    ],
                    userAnswer: "",
                },
                {
                    title: "David _____________ that he was going to arrive at eight.",
                    possibleAnswers: [
                        {title: "said", correctAnswer: true },
                        {title: "told" },
                    ],
                    userAnswer: "",
                },
                {
                    title: "They _________ that they didn't want to meet us on Tuesday.",
                    possibleAnswers: [
                        {title: "said" },
                        {title: "told", correctAnswer: true },
                    ],
                    userAnswer: "",
                },       
            ]}></Quiz>
        </div>
    )
}
import Quiz from "../../../components/Quiz"

export default function PastPerfect() {
    return(
        <div className="page-body">
          <div className="page-title">
              <h2>Past Perfect</h2>
          </div>
          <p>The past perfect is used to describe an action that happened before another action</p>
          <div className="table-container">
                <table className="table-body">
                    <tr>
                      <th>Positive</th>
                      <th>Negative</th> 
                      <th>Negative short form</th> 
                    </tr>
                    <tr>
                      <td>I had swum</td>
                      <td>I had not swum</td> 
                      <td>I hadn't swum</td> 
                    </tr>
                    <tr>
                      <td>You had fought</td>
                      <td>You had not fought</td>
                      <td>You hadn't fought</td>
                    </tr>
                    <tr>
                      <td>She, he, it had worked</td>
                      <td>She, he, it had not worked</td> 
                      <td>She, he, it had not worked</td> 
                    </tr>
                    <tr>
                      <td>We had talked</td>
                      <td>We had not talked</td> 
                      <td>We hadn't talked</td> 
                    </tr>
                    <tr>
                      <td>They had danced</td>
                      <td>They had not danced</td>
                      <td>They hadn't danced</td>
                    </tr>
                </table>
              </div>

                  <ul className="page-examples">
                      <li>I <b>had finished</b> eating by the time she came home.</li>
                      <li>We <b>had already eaten</b> before you ordered the food.</li>
                      <li>She told him to move out, but he <b>had already moved</b> out most of his stuff.</li>
                      <li>They <b>had started</b>the project before their boss directed them to. </li>
                  </ul>
                  <Quiz title="Quiz" questions={[

            {
                title: "He ___________ (meet) him before the party",
                possibleAnswers: [
                    {title: "a. had met", correctAnswer: true},
                    {title: "b. has meet",},
                ],
                userAnswer: "",
            }, 
            {
                title: "The plane ____________ (leave) by the time I got to the airport",
                possibleAnswers: [
                    {title: "a. had leave"},
                    {title: "b. had left", correctAnswer: true},
                ],
                userAnswer: "",
            }, 
            {
                title: "She _____________________ (write) the email before he apologized",
                possibleAnswers: [
                    {title: "a. had leave"},
                    {title: "b. had left", correctAnswer: true},
                ],
                userAnswer: "",
            }, 
            {        
                title: "We _____________ (establish) our company before 2003",
                possibleAnswers: [
                    {title: "a. had established", correctAnswer: true},
                    {title: "b. has established"},
                ],
                userAnswer: "",
            }, 
            {
                title: "He _____________ (play) football until last week",
                possibleAnswers: [
                    {title: "a. had never play"},
                    {title: "b. had never played", correctAnswer: true},
                ],
                userAnswer: "",
            }, 
            {
                title: "They ___________ (get) engaged before last year",
                possibleAnswers: [
                    {title: "a. had get"},
                    {title: "b. had gotten", correctAnswer: true},
                ],
                userAnswer: "",
            }, 
            {
                title: "I __________ (fall) asleep before 8pm last night",
                possibleAnswers: [
                    {title: "a. had fall"},
                    {title: "b. had fallen", correctAnswer: true},
                ],
                userAnswer: "",
            }, 
            {
                title: "We wished we ____________ (purchase) the winning ticket.",
                possibleAnswers: [
                    {title: "a. has purchased", correctAnswer: true},
                    {title: "b. had purchased"},
                ],
                userAnswer: "",
            }, 
            {
                title: "I wished I ______________ (tell) the truth.",
                possibleAnswers: [
                    {title: "a. had told", correctAnswer: true},
                    {title: "b. has tell"},
                ],
                userAnswer: "",
            }, 
            
        ]}></Quiz>
      

        </div>
    ) 
} 
import Quiz from "../../../components/Quiz"

export default function FuturePerfect() {
    return(
        <div className="page-body">
          <div className="page-title">
              <h2>Future Perfect</h2>
          </div>
          <p>The future perfect tense is used to indicate a future event that has a definitive end date. </p>
          <div className="table-container">
                <table className="table-body">
                    <tr>
                      <th>Positive</th>
                      <th>Negative</th> 
                      <th>Negative short form</th> 
                    </tr>
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
                </table>
              </div>

                  <ul className="page-examples">
                      <li>Nia will have married Demarcus by then.</li>
                      <li>The storm will have finished by the time we arrive.</li>
                      <li>Mom will have cooked our favorite meal.</li>
                  </ul>
                  <Quiz title="Quiz" questions={[

            {
                title: "I ______________ (sleep) eight hours.",
                possibleAnswers: [
                    {title: "a. will have slept", correctAnswer: true},
                    {title: "b. will have sleep",},
                ],
                userAnswer: "",
            }, 
            {
                title: "The plant _________________ by then.",
                possibleAnswers: [
                    {title: "a. will have grown", correctAnswer: true},
                    {title: "b. will have grew",},
                ],
                userAnswer: "",
            }, 
            {
                title: "Henry ______________ by ten o’clock.",
                possibleAnswers: [
                    {title: "a. will have grown", correctAnswer: true},
                    {title: "b. will have grew",},
                ],
                userAnswer: "",
            }, 


            



        
            
        ]}></Quiz>
      

        </div>
    ) 
} 
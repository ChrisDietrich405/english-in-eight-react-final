import Quiz from "../../../components/Quiz"

export default function PresentPerfectContinuous() {
    return(
        <div className="page-body">
            <div className="page-title">
                <h2>Present Perfect Continuous</h2>
            </div>
            <p className="grammar-explanation-paragraph">The present perfect continuous tense (also known as the present perfect progressive tense) shows that something started in the past and is continuing at the present time. The present perfect continuous is formed using the construction has/have been + the present participle (root + -ing).</p>

             <div className="table-container">
                  <table className="table-body">
                      <tr>
                        <th>Positive</th>
                        <th>Positive Short Form</th> 
                      </tr>
                      <tr>
                        <td>I have been swimming</td>
                        <td>I've been swimming</td> 
                      </tr>
                      <tr>
                        <td>You have been working</td>
                        <td>You've been working</td>
                      </tr>
                      <tr>
                        <td>She, he, it has been fighting</td>
                        <td>She's he's it's been fighting</td> 
                      </tr>
                      <tr>
                        <td>We have been talking</td>
                        <td>We've been talking</td> 
                      </tr>
                      <tr>
                        <td>They have been dancing</td>
                        <td>They've been dancing</td>

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
                        <td>I have not been swimming</td>
                        <td>I haven't been swimming</td> 
                      </tr>
                      <tr>
                        <td>You has not been working</td>
                        <td>You haven't been working</td>
                      </tr>
                      <tr>
                        <td>She, he, it has not been fighting</td>
                        <td>She, he, it hasn't been fighting</td> 
                      </tr>
                      <tr>
                        <td>We have not been talking</td>
                        <td>We haven't been talking</td> 
                      </tr>
                      <tr>
                        <td>They have not been dancing</td>
                        <td>They haven't been dancing</td>

                      </tr>
                  </table>
                </div>
        
            <p>When to use the Present Perfect Continuous</p>
                <p>Unfinished actions</p>
            <p>To talk about unfinished actions which started in the past and continue to the present. We often use this with 'for' and 'since'.</p>
                <ul className="page-examples">
                    <li>I've been living in Rabat for two years.</li>
                    <li>She's been working here since 2004.</li>
                    <li>We've been waiting for the bus for hours.</li>
                </ul>
            <p>For temporary habits or situations. </p>
                <ul className="page-examples">
                    <li>I've been going to the gym a lot recently.</li>
                    <li>They've been living with his mother while they look for a house.</li>
                    <li>I've been reading a lot recently.</li>
                </ul>
            <p>Actions which have recently stopped.</p>
                <ul className="page-examples">
                    <li>I'm so tired, I've been studying for hours.</li>
                    <li>I've been running, so I'm really hot.</li>
                    <li>It's been raining so the pavement is wet.</li>
                </ul>


                <p>Complete the sentence with the correct present perfect continuous form</p>


            <Quiz title="Quiz" questions={[ //because we are in react we need to start the array with a curly bracket (because it's inside of a component)
                    {
                        title: "He ___________________ (work) for this company since 1985.",
                        possibleAnswers: [ 
                            {title: "a. have worked"},
                            {title: "b. has been working", correctAnswer: true},                          
                        ],
                        userAnswer: "", 
                    },
                    {
                        title: "I _____________________ (wait) for you since two o'clock.",
                        possibleAnswers: [ 
                            {title: "a. has waited"},
                            {title: "b. have been waiting", correctAnswer: true},                          
                        ],
                        userAnswer: "", 
                    },
                    {
                        title: "Mary ____________________(live) in Nairobi since 1992.",
                        possibleAnswers: [ 
                            {title: "a. have lived"},
                            {title: "b. has been living", correctAnswer: true},                          
                        ],
                        userAnswer: "", 
                    },
                    {
                        title: "They _____________________ all day.",
                        possibleAnswers: [ 
                            {title: "a. have fought"},
                            {title: "b. have been fighting", correctAnswer: true},                          
                        ],
                        userAnswer: "", 
                    },
                    {
                        title: "He ______________________ (play) tennis for five hours.",
                        possibleAnswers: [ 
                            {title: "a. have played"},
                            {title: "b. has been playing", correctAnswer: true},                          
                        ],
                        userAnswer: "", 
                    },
                    {
                        title: "How long ___________________ (learn / you)  English?",
                        possibleAnswers: [ 
                            {title: "a. has you learned"},
                            {title: "b. have you been learning", correctAnswer: true},                          
                        ],
                        userAnswer: "", 
                    },
                    {
                        title: "We ______________________ (look for) the highway for more than an hour.",
                        possibleAnswers: [ 
                            {title: "a. have been looking", correctAnswer: true},
                            {title: "b. has looked"},                          
                        ],
                        userAnswer: "", 
                    },
                    {
                        title: "I ________________________ (live) without electricity for two weeks.",
                        possibleAnswers: [ 
                            {title: "a. have been living", correctAnswer: true},
                            {title: "b. has lived"},                          
                        ],
                        userAnswer: "", 
                    },
                    {
                        title: "How long _______________________ (work / she) in the garden?",
                        possibleAnswers: [ 
                            {title: "a. have she worked"},
                            {title: "b. has she been working", correctAnswer: true},                          
                        ],
                        userAnswer: "", 
                    },
                    {
                        title: "I ____________________________ (study) all day.",
                        possibleAnswers: [ 
                            {title: "a. have been studying", correctAnswer: true},
                            {title: "b. has studied"},                          
                        ],
                        userAnswer: "", 
                    }
                                
                ]}></Quiz>       
        </div>
    )
}

 
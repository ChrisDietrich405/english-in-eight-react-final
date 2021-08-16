import Quiz from "../../../components/Quiz"

export default function FutureContinuous() {
    return(
        <>
        <div className="page-title">
            <h2>Future Continuous</h2>
        </div>
        <p className="grammar-explanation-paragraph">The future continuous refers to an unfinished action or event that will be in progress at a time later than now.</p>
        <div className="table-container">
              <table className="table-body">
                  <tr>
                    <th>Positive</th>
                    <th>Negative</th> 
                    <th>Negative short form</th> 
                  </tr>
                  <tr>
                    <td>I will be swimming</td>
                    <td>I will not be swimming</td> 
                    <td>I won't be swimming</td> 
                  </tr>
                  <tr>
                    <td>You will be fighting</td>
                    <td>You will not be fighting</td>
                    <td>You won't be fighting</td>
                  </tr>
                  <tr>
                    <td>She, he, it will be working</td>
                    <td>She, he, it will not be working</td> 
                    <td>She, he, it won't be working</td> 
                  </tr>
                  <tr>
                    <td>We will be talking</td>
                    <td>We will not be talking</td> 
                    <td>We won't be talking</td> 
                  </tr>
                  <tr>
                    <td>They will be dancing</td>
                    <td>They will not be dancing</td>
                    <td>They won't be dancing</td>
                  </tr>
              </table>
            </div>
        
        
        <div className="page-body">
         
    
           <ul className="page-examples">
             <li>This time next week I will be sun-bathing in Bali.</li>
             <li>By Christmas I will be skiing like a pro.</li>
             <li>Just think, next Monday you will be working in your new job.</li>
           </ul>
        </div>
        <div className="page-body">
        </div>
           
        <Quiz title="Quiz" questions={[
            {
                title: "In an hour I _______________ (clean) the kitchen",
                possibleAnswers: [
                    {title: "a. will be cleaning", correctAnswer: true},
                    {title: "b. will be clean",},
                ],
                userAnswer: "",
            }, 
            {
                title: "Next month he _______________ (complain) about his job",
                possibleAnswers: [
                    {title: "a. will be complain"},
                    {title: "b. will be complaining", correctAnswer: true},
                ],
                userAnswer: "",
            },
            {
                title: "Unfortunately, sea levels will ____________ (rise) in 20 years.",
                possibleAnswers: [
                    {title: "a. will still be rise"},
                    {title: "b. will still be rising", correctAnswer: true},
                ],
                userAnswer: "",
            },
            {
                title: "I ______________ (see) Jim at the conference next week.",
                possibleAnswers: [
                    {title: "a. will be see"},
                    {title: "b. will be seeing", correctAnswer: true},
                ],
                userAnswer: "",
            },
            {
                title: "When they are in Australia they _____________ with friends.",
                possibleAnswers: [
                    {title: "a. will be stay"},
                    {title: "b. will be staying", correctAnswer: true},
                ],
                userAnswer: "",
            },
            {
                title: "I ___________  with Nia this evening so I can tell her.",
                possibleAnswers: [
                    {title: "a. will be eat"},
                    {title: "b. will be eating", correctAnswer: true},
                ],
                userAnswer: "",
            },
            {
                title: "Miguel _____________ (compete) in a triathlon this weekend.",
                possibleAnswers: [
                    {title: "a. will be competing", correctAnswer: true},
                    {title: "b. will be compete"},
                ],
                userAnswer: "",
            },
            {
                title: "Demarcus _______________ (run) in the race.",
                possibleAnswers: [
                    {title: "a. will also be running", correctAnswer: true},
                    {title: "b. will also be run"},
                ],
                userAnswer: "",
            },
            {
                title: "I _____________ (play) tennis at 10am tomorrow.",
                possibleAnswers: [
                    {title: "a. will be play"},
                    {title: "b. will be playing", correctAnswer: true},
                ],
                userAnswer: "",
            },
            {
                title: "She _____________ (sleep) when you telephone her.",
                possibleAnswers: [
                    {title: "a. will be sleep"},
                    {title: "b. will be sleeping", correctAnswer: true},
                ],
                userAnswer: "",
            },     
        ]}></Quiz>
        </>
    )
}
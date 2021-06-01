import Quiz from "../../../components/Quiz"

export default function SimplePresent() {
    return(
        <>
        <div className="page-title">
            <h2>Simple Present</h2>
        </div>
        <p>We use the simple present tense when an action is happening right now, or when it happens regularly. The positive form for regular verbs is really easy. It's just the verb with an extra 's' if the subject is 'he', 'she', or 'it'. Let's take the verb 'play' as an example:</p>
        <div className="table-container">
              <table className="table-body">
                  <tr>
                    <th>Positive</th>
                    <th>Negative</th> 
                    <th>Negative short form</th> 
                  </tr>
                  <tr>
                    <td>I swim</td>
                    <td>I do not swim</td> 
                    <td>I don't swim</td> 
                  </tr>
                  <tr>
                    <td>You fight</td>
                    <td>You do not fight</td>
                    <td>You don't fight</td>
                  </tr>
                  <tr>
                    <td>She, he, it works</td>
                    <td>She, he, it does not work</td> 
                    <td>She, he, it doesn't work</td> 
                  </tr>
                  <tr>
                    <td>We talk</td>
                    <td>We do not talk</td> 
                    <td>We don't talk</td> 
                  </tr>
                  <tr>
                    <td>They dance</td>
                    <td>They do not dance</td>
                    <td>They don't dance</td>
                  </tr>
              </table>
            </div>
 
        <div className="page-body">
            <h4>Present simple tense with irregular verbs</h4>
            <p>Some verbs have present simple spelling changes with 'he', 'she' or 'it':</p>

            <p>Verbs that end in <b>'y'</b> often change to <b>'ie'</b> before 's':</p>
            <ul>
                <li>study becomes studies</li>
                <li>try becomes tries</li>
                <li>marry becomes marries</li>
                <li>fly becomes flies</li>
                <li>cry becomes cries</li>
            </ul>
            <p>She tries very hard</p>
            <p>Be careful! 'y' doesn't change to 'ie' if the ending is 'ay', 'ey', 'oy', 'uy'.</p>     
            <ul>
                <li>play becomes plays</li>
                <li>buy becomes buys</li>
                <li>enjoy becomes enjoys</li>
                <li>stay becomes stays</li>
            </ul>
            <p>He buys a lot of clothes</p>
          

            <p>Verbs that end in 's', 'sh', 'ch' or 'x' often add 'e' before 's':</p>
            <ul>
                <li>pass becomes passes</li>
                <li>wash becomes washes</li>
                <li>teach becomes teaches</li>
            </ul>
            <p>He washes the dishes</p>
            <p>The verbs go and do add es for the third person singular:</p>
            <p>I go, you go, we go, they go, but she, he, it <b>goes</b></p>
            <p>I do, you do, we do, they do, but she, he, it <b>does</b></p>
            <p>She goes to the gym on Friday mornings</p>
            <p>He does the laundry in the morning</p>
        </div> 
        <br />
        <Quiz title="Quiz" questions={[
            {
                title: "You ________ to school every day",
                possibleAnswers: [
                    {title: "a. goes"},
                    {title: "b. go", correctAnswer: true},
                ],
                userAnswer: "",
            },
            {
                title: "I _________ swimming",
                possibleAnswers: [
                    {title: "a. like", correctAnswer: true},
                    {title: "b. likes"},
                ],
                userAnswer: "",
            },
            {
                title: "He ____________ badminton",
                possibleAnswers: [
                    {title: "a. plays", correctAnswer: true},
                    {title: "b. play"},
                ],
                userAnswer: "",
            },
            {
                title: "The class (it) __________ at 9am",
                possibleAnswers: [
                    {title: "a. begin",},
                    {title: "b. begins",  correctAnswer: true},
                ],
                userAnswer: "",
            },
            {
                title: "They ________ to the movies sometimes",
                possibleAnswers: [
                    {title: "a. goes",},
                    {title: "b. go",  correctAnswer: true},
                ],
                userAnswer: "",
            },
            {
                title: "She ________ chocolate",
                possibleAnswers: [
                    {title: "a. loves", correctAnswer: true},
                    {title: "b. love",  },
                ],
                userAnswer: "",
            },
            {
                title: "We ________ Arabic",
                possibleAnswers: [
                    {title: "a. study", correctAnswer: true},
                    {title: "b. studies",  },
                ],
                userAnswer: "",
            },
            {
                title: "They _________ in Tunisia",
                possibleAnswers: [
                    {title: "a. live", correctAnswer: true},
                    {title: "b. lives",  },
                ],
                userAnswer: "",
            },
            {
                title: "He _______ in a restaurant",
                possibleAnswers: [
                    {title: "a. works", correctAnswer: true},
                    {title: "b. work",  },
                ],
                userAnswer: "",
            },
            {
                title: "Nia _______ the guitar very well",
                possibleAnswers: [
                    {title: "a. play",},
                    {title: "b. work", correctAnswer: true },
                ],
                userAnswer: "",
            },
        ]} ></Quiz>
        </>
    )
}
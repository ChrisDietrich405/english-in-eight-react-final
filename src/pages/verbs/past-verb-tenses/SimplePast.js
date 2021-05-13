import Quiz from "../../../components/Quiz"

export default function SimplePast() {
    return(
        <>
        <div className="page-title">
            <h2>Simple Past</h2>
        </div>
        <div className="page-body">
            <p>The simple past tense, is used to talk about a completed action in a time before now. The simple past is the basic form of past tense in English. The time of the action can be in the recent past or the distant past.</p>
            <p>Regular Verbs</p>
            <p>We usually make the positive by adding '-ed' to the infinitive. For example, 'play' becomes 'played'.</p>
            <p>I played</p>
            <p>You walked</p>
            <p>She, He, it talked<b>s</b></p>
            <p>We worked</p>
            <p>They cooked</p>
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
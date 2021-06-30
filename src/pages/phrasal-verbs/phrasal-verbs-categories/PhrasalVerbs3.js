import Quiz from "../../../components/Quiz"

export default function PhrasalVerbs3() {
    return(
        <>
        <div className="page-title">
            <h2>Phrasal Verbs List Three</h2>
        </div>
        <div className="page-body">
         
           <ul>
                <li><b>Think over</b> - to think deeply about a decision before you make it 
                    <p>Can I <b>think it over</b> and tell you my answer tomorrow? </p>
                </li>

                <li><b>Put up with</b> - tolerate
                    <p>He couldn’t <b>put up with</b> his boss anymore so he quit. </p>
                </li>

                <li><b>Fall for</b> - To either become infatuated with or fall in love with someone
                    <p>I <b>fell for</b> her pretty quickly.</p>
                </li>

                <li><b>Take apart</b> - to disassemble
                    <p>We needed to <b>take apart</b> the desk in order to take it out of the room. </p>
                </li>

                <li><b>Build up</b> - to increase in intensity. 
                    <p>They had a big fight after the tension between them <b>built up</b> </p>
                </li>
            </ul>
        </div>
        <Quiz title="Quiz" questions={[
            {
                title: "The car came out of nowhere and hit our van.",
                possibleAnswers: [
                    {title: "a. To one up someone"},
                    {title: "b. Time is money", correctAnswer: true},
                ],
                userAnswer: "",
            }, 
            {
                title: "Let's go! Hurry up! ____________.",
                possibleAnswers: [
                    {title: "a. To one up someone"},
                    {title: "b. Time is money", correctAnswer: true},
                ],
                userAnswer: "",
            }, 
            {
                title: "It's probably not necessary to check the figures again, but it's better to be safe than sorry.",
                possibleAnswers: [
                    {title: "a. To one up someone"},
                    {title: "b. Time is money", correctAnswer: true},
                ],
                userAnswer: "",
            }, 
            {
                title: "a foolproof security system",
                possibleAnswers: [
                    {title: "a. To one up someone"},
                    {title: "b. Time is money", correctAnswer: true},
                ],
                userAnswer: "",
            }, 
            {
                title: "I hate telling stories around Jack because he always tries to one up you with some amazing story of his own.",
                possibleAnswers: [
                    {title: "a. To one up someone"},
                    {title: "b. Time is money", correctAnswer: true},
                ],
                userAnswer: "",
            }, 
        ]}></Quiz>
        </>
    )
}
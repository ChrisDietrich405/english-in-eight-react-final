import Quiz from "../../../components/Quiz"

export default function PhrasalVerbs2() {
    return(
        <>
        <div className="page-title">
            <h2>Phrasal Verbs List Two</h2>
        </div>
        <div className="page-body">
        


            <ul>
                <li><b>Put together</b> - to assemble, construct something using several pieces
                    <p>I bought a desk from the store and now I need to <b>put it together</b></p>
                </li>

                <li><b>Drive around</b> - to drive with no real purpose
                    <p>I love to drive so much that sometimes I just <b>drive around</b></p>
                </li>

                <li><b>To go off (alarm)</b> - when an alarm starts 
                    <p>When my alarm goes off in the morning I’m miserable </p>
                </li>

                <li><b>Live off of</b> - to be able to survive with a minimum amount of something
                    <p>She <b>lives off of </b>R$2,000,00 a month. I don’t know how she does it</p>
                </li>

                <li><b>Talk into</b> -to persuade someone to do something . 
                    <p>Gabriela<b>talked Caio into </b>going to Bahia for their vacation </p>
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
import Quiz from "../../../components/Quiz"

export default function RememberVersusRemind() {
    return (
            <div className="page-body">
                <div className="page-title">
                   <h2>Remember versus Remind</h2>
                </div>
                <span className="grammar-explanation-paragraph">Remember</span>
                <p>If we remember someone or something, we keep that person or thing in our mind or we bring that person or thing back to our mind:</p>
                <ul className="page-examples">
                    <li>I’ll always remember you. You have helped me so much.</li>
                    <li>Suddenly I remembered I promised to call my mother.</li>
                </ul>
                <p>Remember + infinitive means that we don’t forget to do something:</p>
                <ul className="page-examples">
                    <li>Remember to back up your files, just in case your computer crashes.</li>
                </ul>
                <p>Remember + the -ing form of a verb means ‘have a memory of something we did or of something that happened in the past:</p>
                <ul className="page-examples">
                    <li>She said she didn’t remember getting an email from him.</li>
                    <li>I remember meeting her once. It must have been about five years ago.</li>
                </ul>
                <h3>Remind</h3>
                <p>If a person or thing reminds you of someone or something, they make you think of that person or thing, or they resemble that person or thing:</p>
                <ul className="page-examples">
                    <li>That song always reminds me of the time I fell in love with a Nigerian girl.</li>
                    <li>Jason reminds me of my father. They have the same eyes and the same way of talking.</li>
                </ul>
                <p>If we remind someone to do something or about something, we make them remember it or help them not to forget it:</p>
                <ul className="page-examples">
                    <li>He’s probably forgotten he was supposed to be here at 6. Should I call and remind him?</li>
                    <li>Remind me to email Tony today; otherwise I’ll probably forget.</li>
                </ul>
            
            <p>Add a form of remember or remind</p>
            <Quiz title="Quiz" questions={[
                {
                    title: "Did you  ____________________ Jeff to bring his credit card?",
                    possibleAnswers: [
                        {title: "remind", correctAnswer: true},
                        {title: "remember"},
                    ],
                    userAnswer: "",
                },
                {
                    title: "I can't ___________________ anything about the accident at all.",
                    possibleAnswers: [
                        {title: "remind" },
                        {title: "remember",correctAnswer: true},
                    ],
                    userAnswer: "",
                },
                {
                    title: "I had to ______________________ him that we had signed an agreement. He seemed to have forgotten.",
                    possibleAnswers: [
                        {title: "remember" },
                        {title: "remind",correctAnswer: true},
                    ],
                    userAnswer: "",
                },
                {
                    title: "Please ____________________ not to walk on the grass and not to pick any flowers.",
                    possibleAnswers: [
                        {title: "remind" },
                        {title: "remember",correctAnswer: true},
                    ],
                    userAnswer: "",
                },
                {
                    title: "The leader of the group ____________________ me of my best friend's brother.",
                    possibleAnswers: [
                        {title: "reminds", correctAnswer: true },
                        {title: "remembers"},
                    ],
                    userAnswer: "",
                },
                {
                    title: " ____________________to switch off the computer when you leave the office, and turn off all the lights.",
                    possibleAnswers: [
                        {title: "Remember" },
                        {title: "Remind", correctAnswer: true },
                    ],
                    userAnswer: "",
                },
                {
                    title: "I've read that book but I don't __________________ the author's name.",
                    possibleAnswers: [
                        {title: "remember", correctAnswer: true },
                        {title: "remind" },
                    ],
                    userAnswer: "",
                },
                {
                    title: "That perfume _______________ me of my grandmother. She always wore it.",
                    possibleAnswers: [
                        {title: "reminds", correctAnswer: true },
                        {title: "remembers" },
                    ],
                    userAnswer: "",
                },
                {
                    title: "_______________ me to buy flowers for my mother. It's her birthday tomorrow.",
                    possibleAnswers: [
                        {title: "remind", correctAnswer: true },
                        {title: "remember" },
                    ],
                    userAnswer: "",
                },
                {
                    title: "I don't ______________ where I left my umbrella. Have you seen it anywhere?",
                    possibleAnswers: [
                        {title: "remind" },
                        {title: "remember", correctAnswer: true },
                    ],
                    userAnswer: "",
                },       
            ]}></Quiz>
        </div>
    )
} 














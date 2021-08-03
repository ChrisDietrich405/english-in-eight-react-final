import Quiz from "../../../components/Quiz"

export default function SpeakVersusTalk() {
    return (
            <div className="page-body">
                <div className="page-title">
                   <h2>Speak versus Talk</h2>
                </div>
                <p>The verbs speak and talk both generally mean ‘say words’, but there are some small differences in how they are used. Speak is more formal than talk.</p>
                <p>We usually use speak for more formal presentations and lectures, and talk for more informal ones:</p>
                <ul className="page-examples">
                    <li>Dr Graham Foster will speak about the history of the region.</li>
                    <li>Kyle is going to talk us through the benefits of the software and then Liz will talk about the marketing plan.</li>
                </ul>
                <p>When we refer to languages, we use speak:</p>
                <ul className="page-examples">
                    <li>How many languages do you speak?</li>
                    <li>I wish I could speak Italian.</li>
                </ul>
                <p>We usually use to after speak and talk. We can also use with:</p>
                <ul className="page-examples">
                    <li>I need to speak to you about this conference next week.</li>
                    <li>I was talking to Carlos the other day about the new project.</li>
                    <li>Can I speak with you for a moment?</li>
                </ul>
               
                <p>Certain phrasal verbs require speak or talk. The two verbs in these situations are not interchangeableCertain phrasal verbs require speak or talk. The two verbs in these situations are not interchangeable</p>
                <ul className="page-examples">
                    <li>I need to talk it over with my wife before making a decision (to have a conversation to resolve an issue)</li>
                    <li>Speak up! You’re talking too softly. (to speak louder)</li>
                    <li>My boss always talks down to me. (to talk in a disrespectful way)</li>
                </ul>
                <p>Talk can be a noun or a verb. Speak is only a verb. </p>
                <ul className="page-examples">
                    <li>He gave a great talk about diet</li>
                </ul>
            
            <p>Add a form of speak or talk</p>
            <Quiz title="Quiz" questions={[
                {
                    title: "She ____ several languages.",
                    possibleAnswers: [
                        {title: "speaks", correctAnswer: true},
                        {title: "talks"},
                    ],
                    userAnswer: "",
                },
                {
                    title: "It was an interesting ____.",
                    possibleAnswers: [
                        {title: "speak" },
                        {title: "talk",correctAnswer: true},
                    ],
                    userAnswer: "",
                },
                {
                    title: "We ____ things over and everything's OK between us now.",
                    possibleAnswers: [
                        {title: "spoke" },
                        {title: "talked",correctAnswer: true},
                    ],
                    userAnswer: "",
                },
                {
                    title: "It's just ____- they'll never actually do it.",
                    possibleAnswers: [
                        {title: "speak" },
                        {title: "talk",correctAnswer: true},
                    ],
                    userAnswer: "",
                },
                {
                    title: "________ up! I can't hear you at all.",
                    possibleAnswers: [
                        {title: "Speak", correctAnswer: true },
                        {title: "Talk"},
                    ],
                    userAnswer: "",
                },
                {
                    title: "Every time they meet they only  ________ about sports.",
                    possibleAnswers: [
                        {title: "speak" },
                        {title: "talk", correctAnswer: true },
                    ],
                    userAnswer: "",
                },
                {
                    title: "We ________ today with Joyce Ann McConnell and Jackie King.",
                    possibleAnswers: [
                        {title: "spoke", correctAnswer: true },
                        {title: "talk" },
                    ],
                    userAnswer: "",
                },
                {
                    title: "After dinner we usually sit and ________ on the back porch.",
                    possibleAnswers: [
                        {title: "talk", correctAnswer: true },
                        {title: "speak" },
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
                    title: "Well, I’ll  ________ to you later then.",
                    possibleAnswers: [
                        {title: "speak" },
                        {title: "talk", correctAnswer: true },
                    ],
                    userAnswer: "",
                },       
            ]}></Quiz>
        </div>
    )
} 

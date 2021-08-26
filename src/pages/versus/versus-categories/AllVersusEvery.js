import Quiz from "../../../components/Quiz"

export default function AllVersusEvery() {
    return (
            <div className="page-body">
                <div className="page-title">
                   <h2>All Versus Every</h2>
                </div>
                
                <p className="grammar-explanation-paragraph">We use both all and every to refer to the total number of something. All refers to a complete group. Every refers to each member of a complete group:</p>
                <ul className="page-examples">
                    <li>The questionnaire was sent to all employees.</li>
                    <li>The questionnaire was sent to every employee.</li>
                </ul>
                <p>We can use every to focus on each individual member.</p>
                <p>Compare:</p>
                <ul className="page-examples">
                    <li>All passengers must turn off their cell phones. (refers to the whole group)</li>
                    <li>Every passenger must turn off their cell phone. (focuses on each individual member of the whole group)</li>
                </ul>
                <p>We can use all, but not every, on its own without a noun. We use everyone/everybody/everything instead:</p>
                <ul className="page-examples">
                    <li>The meeting is at Oriel Hall. It begins at 8 pm and all are welcome.</li>
                    <li>The meeting is at Oriel Hall. It begins at 8 pm and everyone is welcome.</li>
                </ul>
                <p>We use all with plural and uncountable nouns and every with singular nouns:</p>
                <ul className="page-examples">
                    <li>All donations will be sent to the earthquake relief fund.</li>
                    <li>Every donation is appreciated.</li>
                </ul>
                <p>We use all day, all week, all month to mean ‘one entire day/week/month’:</p>
                <ul className="page-examples">
                    <li>We spent all day at the beach yesterday.</li>
                </ul>
                <p>Every day (week/month) focuses on each individual day (week/month):</p>
                <ul className="page-examples">
                    <li>We spent every day at the beach when we were on vacation .</li>
                </ul>
            
            <p>Add all or every</p>
            <Quiz title="Quiz" questions={[
                {
                    title: "_________________ child needs love.",
                    possibleAnswers: [
                        {title: "every", correctAnswer: true},
                        {title: "all"},
                    ],
                    userAnswer: "",
                },
                {
                    title: "I have written to ______________ my friends.",
                    possibleAnswers: [
                        {title: "every" },
                        {title: "all", correctAnswer: true},
                    ],
                    userAnswer: "",
                },
                {
                    title: "Not ___________ birds can sing.",
                    possibleAnswers: [
                        {title: "every" },
                        {title: "all",correctAnswer: true},
                    ],
                    userAnswer: "",
                },
                {
                    title: "I see her ______________ few days.",
                    possibleAnswers: [
                        {title: "all" },
                        {title: "every",correctAnswer: true},
                    ],
                    userAnswer: "",
                },
                {
                    title: " I have cleaned _______________ the rooms except the bathroom.",
                    possibleAnswers: [
                        {title: "all", correctAnswer: true },
                        {title: "every"},
                    ],
                    userAnswer: "",
                },
                {
                    title: " You don’t see tigers __________ day.",
                    possibleAnswers: [
                        {title: "all" },
                        {title: "every", correctAnswer: true },
                    ],
                    userAnswer: "",
                },
                {
                    title: "I have invited ____________ my friends.",
                    possibleAnswers: [
                        {title: "all", correctAnswer: true },
                        {title: "every" },
                    ],
                    userAnswer: "",
                },
                {
                    title: "I see my dentist ______________ six months.",
                    possibleAnswers: [
                        {title: "every", correctAnswer: true },
                        {title: "all" },
                    ],
                    userAnswer: "",
                },
                {
                    title: " I talk to my grandparents ____________ day.",
                    possibleAnswers: [
                        {title: "every", correctAnswer: true },
                        {title: "all" },
                    ],
                    userAnswer: "",
                },
                {
                    title: "I’ve worked for this company ___________ my life.",
                    possibleAnswers: [
                        {title: "every" },
                        {title: "all", correctAnswer: true },
                    ],
                    userAnswer: "",
                },       
            ]}></Quiz>
        </div>
    )
} 














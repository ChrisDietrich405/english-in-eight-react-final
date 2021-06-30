import Quiz from "../../../components/Quiz"

export default function PhrasalVerbs4() {
    return(
        <>
        <div className="page-title">
            <h2>Phrasal Verbs List Four</h2>
        </div>
        <div className="page-body">
            <ul>
            Ask around - to ask a lot of different people in order to get information or help
I’m going to ask around to find the best mechanic.

Sell out - to no longer have a product available in a store because every one of that product was purchased.
All the new IPhones were sold out at the Apple store.

Look down on - to feel that others are inferior
Many rich people look down on poor people.

Come back - to return to the place you are right now 
I’m leaving soon, but I’m coming right back.

Go back - to return to a place where you aren’t right now 
I’m going back to Colombia in December. 

                <li><b>Take up</b> - occupy time, space, or attention.
                    <p>I don't want to <b>take up</b> any more of your time.</p>
                </li>

                <li><b>Fed up with</b> - annoyed or upset at a situation or treatment.
                    <p>He was <b>fed up with</b> doing all the work.</p>
                </li>

                <li><b>Talk it out</b> - to resolve a fight, disagreement, misunderstanding through talking.
                    <p>After my wife and I <b>talked it out</b> we were fine.</p>
                </li>

                <li><b>Hit it off</b> - to immediately have a good relationship when meeting someone new.
                    <p>I met my new boss today and we <b>hit it off</b> from the start. I’m so happy.</p>
                </li>

                <li><b>Cheat on</b> - to be unfaithful to your romantic partner, or when being dishonest when taking tests. 
                    <p>Skylar <b>cheated on</b> Walter (she had sex with her boss).</p>
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
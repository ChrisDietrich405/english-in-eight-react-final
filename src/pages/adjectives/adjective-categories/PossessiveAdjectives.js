import Quiz from "../../../components/Quiz"

export default function PossessiveAdjectives() {
    return (
        <>
        <div className="superlative-adjectives">
            <div className="page-title">
                <h2>Possessive Adjectives</h2>
            </div>
            <div className="page-body">
                <p>The possessive adjectives in English  are: my, your, his, her, its, our and their.</p>
            </div>
            
            <ul>
                <li>I have a bag - this is my bag.</li>
                <li>You have a cat - that is your cat.</li>
                <li>He has a car - it is his car.</li>
                <li>She has a book - it is her book.</li>
                <li>The car has four tires - its tires are red.</li>
                <li>We have an apartment - it is our apartment.</li>
                <li>They have a daughter - she is their daughter.</li>   
            </ul>
        </div>
        


<p>Replace the personal pronouns with the correct possessive adjective:</p>
<Quiz title="Quiz" questions={[
                {
                    title: "Where is (I) _______________ book?",
                    possibleAnswers: [
                        {title: "my", correctAnswer: true},
                        {title: "your"},
                    ],
                    userAnswer: "",
                },
                {
                    title: "Where is (we) ________________  teacher?",
                    possibleAnswers: [
                        {title: "my" },
                        {title: "our",correctAnswer: true},
                    ],
                    userAnswer: "",
                },
                {
                    title: "She goes to school with (she) _____________brother.",
                    possibleAnswers: [
                        {title: "your" },
                        {title: "her",correctAnswer: true},
                    ],
                    userAnswer: "",
                },
                {
                    title: "(They) ________________ father works in a factory.",
                    possibleAnswers: [
                        {title: "His" },
                        {title: "Their",correctAnswer: true},
                    ],
                    userAnswer: "",
                },
                {
                    title: "(You) ______________ laptop is very expensive.",
                    possibleAnswers: [
                        {title: "Your", correctAnswer: true },
                        {title: "My"},
                    ],
                    userAnswer: "",
                },
                {
                    title: "(He)  ________________favorite hobby is tennis.",
                    possibleAnswers: [
                        {title: "Your" },
                        {title: "His", correctAnswer: true },
                    ],
                    userAnswer: "",
                },
                {
                    title: "(I) _____________ husband wants to go to Abuja.",
                    possibleAnswers: [
                        {title: "My", correctAnswer: true },
                        {title: "Her" },
                    ],
                    userAnswer: "",
                },
                {
                    title: "We want to see (it) ________________ historical monuments.",
                    possibleAnswers: [
                        {title: "its", correctAnswer: true },
                        {title: "their" },
                    ],
                    userAnswer: "",
                },
                {
                    title: "Leila loves (she) _____________ dog!",
                    possibleAnswers: [
                        {title: "her", correctAnswer: true },
                        {title: "their" },
                    ],
                    userAnswer: "",
                },
                {
                    title: "(He) _____________ name is Bobby.",
                    possibleAnswers: [
                        {title: "Her" },
                        {title: "His", correctAnswer: true },
                    ],
                    userAnswer: "",
                },
                
            ]}></Quiz>
 

        </>
    )
}
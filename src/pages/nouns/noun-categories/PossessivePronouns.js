import Quiz from "../../../components/Quiz"

export default function PossessivePronouns() {
    return(
        <>
        <div className="page-title">
            <h2>Possessive Pronouns</h2>
        </div>
        <div className="page-body">
        <p>Possessive pronouns say who something belongs to, and replace a noun. So we use them alone. In English, the possessive pronouns are: mine, yours, his, hers, ours and theirs.</p>
        </div>
        <div className="page-examples">
            <p>Examples</p>
            <ul>
                <li>I have a bag - this is mine.</li>
                <li>You have a cat - that cat is yours.</li>
                <li>He has a car - it is his.</li>
                <li>She has a book - it is hers.</li>
                <li>We have an apartment - it is ours.</li>
                <li>They have a daughter - she is theirs.</li>
            </ul>
        </div>
        <Quiz title="Quiz" questions={[ //because we are in react we need to start the array with a curly bracket (because it's inside of a component)
                    {
                        title: " Jane has already eaten her lunch , but I'm saving (I) _____________  until later.",
                        possibleAnswers: [ 
                            {title: "a. mine", correctAnswer: true},
                            {title: "b. my"},                          
                        ],
                        userAnswer: '', 
                    },
                    {
                        title: " My cell phone needs to be fixed, but (you) _____________ is working.",
                        possibleAnswers: [ 
                            {title: "a. you"},
                            {title: "b. yours", correctAnswer: true},                          
                        ],
                        userAnswer: '', 
                    },
                    {
                        title: "My computer is a Mac, but (she) _______________ is a PC.",
                        possibleAnswers: [ 
                            {title: "a. hers", correctAnswer: true},
                            {title: "b. she"},                          
                        ],
                        userAnswer: '', 
                    },
                    {
                        title: "We gave them our telephone number, and they gave us (they) __________________ .",
                        possibleAnswers: [ 
                            {title: "a. theirs"},
                            {title: "b. they", correctAnswer: true},                          
                        ],
                        userAnswer: '', 
                    },
                    {
                        title: "My pencil is broken. Can I borrow (you) ____________ ?",
                        possibleAnswers: [ 
                            {title: "a. you"},
                            {title: "b. yours", correctAnswer: true},                          
                        ],
                        userAnswer: '', 
                    },
                    {
                        title: "My  car is old, but (he)  __________ is new .",
                        possibleAnswers: [ 
                            {title: "a. he"},
                            {title: "b. his", correctAnswer: true},                          
                        ],
                        userAnswer: '', 
                    },
                    {
                        title: "You can't have any chocolate! It's all (I)______________ !",
                        possibleAnswers: [ 
                            {title: "a. my"},
                            {title: "b. mine", correctAnswer: true},                          
                        ],
                        userAnswer: '', 
                    },
                    {
                        title: "The books are (I) ____________.",
                        possibleAnswers: [ 
                            {title: "a. mine", correctAnswer: true},
                            {title: "b. my"},                          
                        ],
                        userAnswer: '', 
                    },
                    {
                        title: "The dog is (we) ______________.",
                        possibleAnswers: [ 
                            {title: "a. ours", correctAnswer: true},
                            {title: "b. we"},                          
                        ],
                        userAnswer: '', 
                    },
                    {
                        title: "The motorcycle is (she)_____________. ",
                        possibleAnswers: [ 
                            {title: "a. hers", correctAnswer: true},
                            {title: "b. she"},                          
                        ],
                        userAnswer: '', 
                    },

                    
                ]}></Quiz>

        
        </>
    )
}

//         Jane has already eaten her lunch , but I'm saving (I) _____________  until later.        
 
// My cell phone needs to be fixed, but (you) _____________ is working.
 
// My computer is a Mac, but (she) _______________ is a PC.
 
// We gave them our telephone number, and they gave us (they) __________________ .
// My pencil is broken. Can I borrow (you) ____________ ?
 
//  My  car is old, but (he)  __________ is new .
 
// You can't have any chocolate! It's all (I)______________ !
//             8. The books are (I) ____________.
//              9. The dog is (we) ______________.
// 	10. The motorcycle is (she)_____________. 

      
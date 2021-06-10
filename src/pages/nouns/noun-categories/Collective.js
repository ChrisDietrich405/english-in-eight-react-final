import Quiz from "../../../components/Quiz"

export default function Collective() {
    return(
        <>
        <div className="page-title">
            <h2>Collective Nouns</h2>
        </div>
        <div className="page-body">
            <p>Collective nouns are words for single things that are made up of more than one person, animal, place, thing, or ide You can’t have a team without individual members; even so, we discuss a team as a single entity.</p>
        </div>       
        <div className="page-examples">
            <p>Examples</p>
            <ul>
                <li>Our class takes a field trip to the natural history museum every year.</li>
                <li>The jury is made up of 12 people.</li>
                <li>This year’s basketball team includes three players who are over six feet tall.</li>
                <li>Napoleon’s army was finally defeated at Waterloo.</li>
                <li>The town council has approved plans to create a new park.</li>
            </ul>

        </div> 
        <Quiz title="Quiz" questions={[ //because we are in react we need to start the array with a curly bracket (because it's inside of a component)
                    {
                        title: "The students __________ fighting in the cafeteria",
                        possibleAnswers: [ 
                            {title: " are", correctAnswer: true},
                            {title: " is"},                          
                        ],
                        userAnswer: '', 
                    },
                    {
                        title: "The group __________ decided together to file the petition",
                        possibleAnswers: [
                            {title: "has", correctAnswer: true},
                            {title: "have"},
                        ],
                        userAnswer: '',
                    }, 
                    {
                        title: "The United States army _____________ a budget much larger than any other countries",
                        possibleAnswers: [
                            {title: "have"},
                            {title: "has", correctAnswer: true},
                        ],
                        userAnswer: '',
                    }, 
                    {
                        title: "My sisters ____________ to go to the beach this weekend",
                        possibleAnswers: [
                            {title: "want", correctAnswer: true},
                            {title: "wants"},
                        ],
                        userAnswer: "",
                    },
                    {
                        title: "___________ the parents' committee made a decision",
                        possibleAnswers: [
                            {title: "Has", correctAnswer: true},
                            {title: "have"}, 
                        ],
                        userAnswer: "",
                    },
                    {
                        title: "___________ any of the soldiers hurt?",
                        possibleAnswers: [
                            {title: "Was"},
                            {title: "Were", correctAnswer: true},
                        ],
                        userAnswer: "",
                    },
                    {
                        title: "That team __________ every game",
                        possibleAnswers: [
                            {title: "wins", correctAnswer: true},
                            {title: "win"},
                        ],
                        userAnswer: "",
                    },
                    {
                        title: "The members of the jury ______________ very frustrated by the prosecuting lawyer.",
                        possibleAnswers: [
                            {title: "was"},
                            {title: "were", correctAnswer: true},
                        ],
                        userAnswer: "",
                    }, 
                    {
                        title: "The school choir ______________ won many competitions.",
                        possibleAnswers: [
                            {title: "have", correctAnswer: true},
                        ],
                        userAnswer: "",
                    },
                    {
                        title: "His family ______________ very big. He has 10 uncles and 11 aunts",
                        possibleAnswers: [
                            {title: "are"},
                            {title: "is", correctAnswer: true},
                        ],
                        userAnswer: "",
                    }
                    
                ]}></Quiz>

        
        </>
    )
}
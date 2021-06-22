import Quiz from "../../../components/Quiz"

export default function Expressions() {
    return(
        <>
        <div className="page-title">
            <h2>Idiomatic Expressions List One</h2>
        </div>
        <div className="page-body">
          <ul>
              <li><b>Cold calling</b> -  working in sales when you contact people to sell to them and you don’t know them at all.
                  <p>I hate <b>cold calling</b>. I never get any sales from it. </p>
              </li>

              <li><b>B movie</b> - A film that is a low-budget commercial motion picture
                  <p>My friends and I like to watch <b>B movies</b>. We like making fun of them</p>
              </li>

              <li><b>You had to be there</b> - when retelling a funny story that isn’t as funny when being told 
                  <p>After I told my mom what happened, she didn’t laugh at all and so I said <b>“you had to be there"</b></p>
              </li>

              <li><b>(period of time) tops</b> - the longest time something will take. 
                  <p>I’ll finish this website in <b>one week tops</b></p>
              </li>
              <li><b>Ahead of schedule</b> - earlier than planned or expected. 
                  <p>They finished the project 2 weeks <b>ahead of schedule.</b></p>
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
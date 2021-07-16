import Quiz from "../../../components/Quiz"

export default function Expressions() {
    return(
        <>
        <div className="page-title">
            <h2>Idiomatic Expressions List Four</h2>
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
                title: "Why didn't you laugh at my joke?",
                possibleAnswers: [
                    {title: "a. I guess it was ahead of schedule"},
                    {title: "b. I guess you had to be there", correctAnswer: true},
                ],
                userAnswer: "",
            }, 
            {
                title: "__________ is a very ineffective way to get sales",
                possibleAnswers: [
                    {title: "a. B movie"},
                    {title: "b. Cold calling", correctAnswer: true},
                ],
                userAnswer: "",
            }, 
            {
                title: "I actually like ___________. They are so bad they make me laugh",
                possibleAnswers: [
                    {title: "a. Cold calling"},
                    {title: "b. B movies", correctAnswer: true},
                ],
                userAnswer: "",
            }, 
            {
                title: "The project will be finished 3 weeks ________",
                possibleAnswers: [
                    {title: "a. you had to be there"},
                    {title: "b. tops", correctAnswer: true},
                ],
                userAnswer: "",
            }, 
            {
                title: "Hopefully we can finish the project ________________",
                possibleAnswers: [
                    {title: "a. tops"},
                    {title: "b. ahead of schedule", correctAnswer: true},
                ],
                userAnswer: "",
            }, 
        ]}></Quiz>
        </>
    )
}
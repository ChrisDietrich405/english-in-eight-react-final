import Quiz from "../../../components/Quiz"

export default function Expressions() {
    return(
        <>
        <div className="page-title">
            <h2>Idiomatic Expressions List One</h2>
        </div>
        <div className="page-body">
          <ul>
              <li><b>Time is money</b> -  time is a valuable resource, therefore it is better to do things as quickly as possible.
                  <p>Come on hurry up! <b>Time is money</b></p>
              </li>

              <li><b>Foolproof</b> -  incapable of going wrong or being misused.
                  <p>a <b>foolproof</b> security system</p>
              </li>

              <li><b>Out of nowhere</b> - appearing or happening suddenly and unexpectedly.
                  <p>The car came <b>out of nowhere</b> and hit our van.</p>
              </li>

              <li><b>To one up someone</b> - To make a point of outdoing, outperforming, outclassing, etc., someone. 
                  <p>I hate telling stories around Jack because he always tries <b>to one up</b> you with some amazing story of his own.</p>
              </li>
              <li><b>It's better to be safe than sorry</b> - it’s better to be careful now so that problems do not occur later on. 
                  <p>It's probably not necessary to check the figures again, but <b>it's better to be safe than sorry.</b></p>
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
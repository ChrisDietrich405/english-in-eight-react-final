import Quiz from "../../../components/Quiz"

export default function Expressions3() {
    return(
        <>
        <div className="page-title">
            <h2>Idiomatic Expressions List Three</h2>
        </div>
        <div className="page-body">
          <ul>
              <li><b>If it’s not broke don’t fix it</b> - when a situation is going well we should leave it alone
                  My refrigerator was making a very small noise, but it was working. I was about to investigate with a screwdriver when my wife said leave it alone. <b>If it’s not broke don’t fix it</b>.  
              </li>

              <li><b>Read someone’s mind</b> - to guess correctly what someone was thinking
                  When I told my wife that we should order Chinese she said “Wow! <b>You read my mind</b>. That’s exactly what I wanted to have for dinner. 
              </li>

              <li><b>Spread the word</b> - to help a business by telling other people about it 
                  I ask my students to please <b>spread the word</b> about my services 
              </li>

              <li><b>Measure twice cut once</b> - to double check your work before you submit
              I have to go back to the store because I cut the wrong size out of my last piece of material. <b>"Measure twice, cut once"</b> should be my new motto!
              </li>

              <li><b>Binge watch</b> - watching a lot of episodes of a series in a short period of time 
                  Over the weekend I <b>binge watched</b> Breaking Bad. I watched the first three seasons.
              </li>  
          </ul>
        </div>
        <Quiz title="Quiz" questions={[
            {
                title: "Another way to say check your work before making a final decision is....",
                possibleAnswers: [
                    {title: "a. Spread the word"},
                    {title: "b. Measure once, cut twice", correctAnswer: true},
                ],
                userAnswer: "",
            }, 
            {
                title: "Would you please help me to ________________ about my new restaurant",
                possibleAnswers: [
                    {title: "a. spread the word", correctAnswer: true},
                    {title: "b. binge watch"},
                ],
                userAnswer: "",
            }, 
            {
                title: "I told my wife I wanted Chinese food for dinner. She responded 'you ________________! I want Chinese food too'",
                possibleAnswers: [
                    {title: "a. read my mind", correctAnswer: true},
                    {title: "b. if it's not broke don't fix it"},
                ],
                userAnswer: "",
            }, 
            {
                title: "I don't like watching series, because sometimes I get addicted to one and ________________ watch it",
                possibleAnswers: [
                    {title: "a. spread the word"},
                    {title: "b. binge watch", correctAnswer: true},
                ],
                userAnswer: "",
            }, 
            {
                title: "My wife wanted to change her resume, but it was perfect the way it was so I told her _______________",
                possibleAnswers: [
                    {title: "a. read my mind"},
                    {title: "b. if it's not broke don't fix it", correctAnswer: true},
                ],
                userAnswer: "",
            }, 
        ]}></Quiz>
        </>
    )
}
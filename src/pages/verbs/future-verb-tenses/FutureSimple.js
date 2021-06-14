import Quiz from "../../../components/Quiz"

export default function FutureSimple() {
    return(
        <>
        <div className="page-title">
            <h2>Future Simple</h2>
        </div>
        <p> The simple future is a verb tense that's used to talk about things that haven't happened yet. For example, this year I <b>will change</b> careers. Use the simple future to talk about an action or condition that will begin and end in the future.
        There are two ways to express the future. You can use <b>will</b> or <b>going to</b> depending on the circumtances. 
        </p>

        <div className="table-container">
              <table className="table-body">
                  <tr>
                    <th>Positive</th>
                    <th>Negative</th> 
                    <th>Negative short form</th> 
                  </tr>
                  <tr>
                    <td>I will walk</td>
                    <td>I will not walk</td> 
                    <td>I won't walk</td> 
                  </tr>
                  <tr>
                    <td>You will kiss</td>
                    <td>You will not kiss</td>
                    <td>You won't kiss</td>
                  </tr>
                  <tr>
                    <td>She, he, it will work</td>
                    <td>She, he, it will not work</td> 
                    <td>She, he, it won't work</td> 
                  </tr>
                  <tr>
                    <td>We will talk</td>
                    <td>We will not talk</td> 
                    <td>We won't talk</td> 
                  </tr>
                  <tr>
                    <td>They will greet</td>
                    <td>They will not greet</td>
                    <td>They won't greet</td>
                  </tr>
              </table>
            </div>
        <div className="page-body">
        <p>
        For irregular verbs, things get more complicated. The simple past tense of some irregular verbs looks exactly like the root form:</p>
        <div className="table-container">
              <table className="table-body">
                  <tr>
                    <th>Positive</th>
                    <th>Negative</th> 
                    <th>Negative short form</th> 
                  </tr>
                  <tr>
                    <td>I put</td>
                    <td>I did not put</td> 
                    <td>I didn't put</td> 
                  </tr>
                  <tr>
                    <td>You let</td>
                    <td>You did not let</td>
                    <td>You didn't let</td>
                  </tr>
                  <tr>
                    <td>She, he, it cost</td>
                    <td>She, he, it did not cost</td> 
                    <td>She, he, it didn't cost</td> 
                  </tr>
                  <tr>
                    <td>We hurt</td>
                    <td>We did not hurt</td> 
                    <td>We didn't hurt</td> 
                  </tr>
                  <tr>
                    <td>They hit</td>
                    <td>They did not hit</td>
                    <td>They didn't hit</td>
                  </tr>
              </table>
            
            </div>
           <p> For other irregular verbs, the simple past forms are more extremely different:</p>
           <ul className="page-examples">
               <li>see changes to saw</li>
               <li>eat changes to ate</li>
               <li>build changes to built</li>
               <li>go changes to went</li>
           </ul>

        </div>
           

        <Quiz title="Quiz" questions={[
            {
                title: "He ___________ that movie three movies",
                possibleAnswers: [
                    {title: "a. saw", correctAnswer: true},
                    {title: "b. sawed",},
                ],
                userAnswer: "",
            }, 
            {
                title: "I _____________ to the store",
                possibleAnswers: [
                    {title: "a. walk"},
                    {title: "b. walked", correctAnswer: true},
                ],
                userAnswer: "",
            }, 
            {
                title: "The car ___________ the tree",
                possibleAnswers: [
                    {title: "a. hit", correctAnswer: true},
                    {title: "b. hited"},
                ],
                userAnswer: "",
            }, 
            {
                title: "They _____________ house very well",
                possibleAnswers: [
                    {title: "a. builded"},
                    {title: "b. built", correctAnswer: true},
                ],
                userAnswer: "",
            }, 
            {
                title: "I _________ to her",
                possibleAnswers: [
                    {title: "a. didn't talked"},
                    {title: "b. didn't talk", correctAnswer: true},
                ],
                userAnswer: "",
            }, 
            {
                title: "She ____________ her hand with a knife",
                possibleAnswers: [
                    {title: "a. cuted"},
                    {title: "b. cut", correctAnswer: true},
                ],
                userAnswer: "",
            }, {
                title: "We ________ too much last night",
                possibleAnswers: [
                    {title: "a. ate", correctAnswer: true},
                    {title: "b. eated"},
                ],
                userAnswer: "",
            }, {
                title: "I _________ him on the cheek",
                possibleAnswers: [
                    {title: "a. kissed", correctAnswer: true},
                    {title: "b. kiss"},
                ],
                userAnswer: "",
            }, {
                title: "It ____________ a lot of money",
                possibleAnswers: [
                    {title: "a. didn't costed"},
                    {title: "b. didn't cost", correctAnswer: true},
                ],
                userAnswer: "",
            }, {
                title: "They ___________ to the movies",
                possibleAnswers: [
                    {title: "a. wented"},
                    {title: "b. went", correctAnswer: true},
                ],
                userAnswer: "",
            }, 
        ]}></Quiz>
        </>
    )
}
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
        Here's the second way</p>
        <div className="table-container">
              <table className="table-body">
                  <tr>
                    <th>Positive</th>
                    <th>Negative</th> 
                    <th>Negative short form</th> 
                  </tr>
                  <tr>
                    <td>I am going to walk</td>
                    <td>I'm going to walk</td> 
                    <td>I'm not going to walk</td> 
                  </tr>
                  <tr>
                    <td>You are going to kiss</td>
                    <td>You're going to kiss</td>
                    <td>You're not going to kiss</td>
                  </tr>
                  <tr>
                    <td>She, he, it is going to work</td>
                    <td>She, he, it's going to work</td> 
                    <td>She, he, it's not going to work</td> 
                  </tr>
                  <tr>
                    <td>We are going to talk</td>
                    <td>We're going to talk</td> 
                    <td>We're not going to talk</td> 
                  </tr>
                  <tr>
                    <td>They are going to greet</td>
                    <td>They're going to greet</td>
                    <td>They're not going to greet</td>
                  </tr>
              </table>
            
            </div>
           <p> We use will with offers, promises, and refusals</p>
           <ul className="page-examples">
               <li>You look tired. I will help you with the housework. (offer)</li>
               <li>I'll always be your friend. I will never disappoint you. (promise)</li>
               <li>He won't listen to you. (refusal)</li>
           </ul>
           <p> We use going to for previous plans and in situations where something is likely to happen</p>
           <ul className="page-examples">
               <li>We're going to go on vacation this weekend. (previous plan)</li>
               <li>Our team is leading 65-23. They are going to win (likely to happen)</li>
           </ul>

        </div>
           

        <Quiz title="Quiz" questions={[
            {
                title: "I don't have anything to eat. That's ok. I _______ share my food with you.",
                possibleAnswers: [
                    {title: "a. will", correctAnswer: true},
                    {title: "b. am going to"},
                ],
                userAnswer: "",
            }, 
            {
                title: "It's Nia's birthday next week, so we _____________ buy her a TV.",
                possibleAnswers: [
                    {title: "a. are going to", correctAnswer: true},
                    {title: "b. will",},
                ],
                userAnswer: "",
            }, 
            {
                title: "Could you lend me $10? I promise  _______________ pay you back  tomorrow.",
                possibleAnswers: [
                    {title: "a. am going to"},
                    {title: "b. will", correctAnswer: true},
                ],
                userAnswer: "",
            }, 
            {
                title: "They ______________ have a barbecue tomorrow. It's all planned, so I hope it won't rain.",
                possibleAnswers: [
                    {title: "a. are going to", correctAnswer: true},
                    {title: "b. will"},
                ],
                userAnswer: "",
            }, 
            {
                title: "TLook! The coach __________________! Run or we'll miss her",
                possibleAnswers: [
                    {title: "a. are going to"},
                    {title: "b. will", correctAnswer: true},
                ],
                userAnswer: "",
            }, 
            {
                title: "They ___________ get a new computer",
                possibleAnswers: [
                    {title: "a. are going to", correctAnswer: true},
                    {title: "b. will"},
                ],
                userAnswer: "",
            },
            {
                title: "Antonio's sister ____________________ have a baby.",
                possibleAnswers: [
                    {title: "a. is going to", correctAnswer: true},
                    {title: "b. will"},
                ],
                userAnswer: "",
            },
            {
                title: "Just a moment. I __________________ help you with the bags.",
                possibleAnswers: [
                    {title: "a. am going to"},
                    {title: "b. will", correctAnswer: true},
                ],
                userAnswer: "",
            },
            {
                title: "We ____________________ take a trip to Accra in June.",
                possibleAnswers: [
                    {title: "a. are going to", correctAnswer: true},
                    {title: "b. will"},
                ],
                userAnswer: "",
            },
            {
                title: "Look at the clouds! It _________________  rain soon. ",
                possibleAnswers: [
                    {title: "a. is going to", correctAnswer: true},
                    {title: "b. will"},
                ],
                userAnswer: "",
            }, 

        ]}></Quiz>
        </>
    )
}
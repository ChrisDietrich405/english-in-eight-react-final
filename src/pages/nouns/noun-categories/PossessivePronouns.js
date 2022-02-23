import Quiz from "../../../components/Quiz";

export default function PossessivePronouns() {
  return (
    <>
      <div className="page-title">
        <h2>Possessive Pronouns</h2>
      </div>
      <div className="page-body">
        <p className="grammar-explanation-paragraph">
          Possessive pronouns say who something belongs to, and replace a noun.
          So we use them alone. In English, the possessive pronouns are: mine,
          yours, his, hers, ours and theirs.
        </p>
      </div>
      <div className="page-examples">
        <p>Examples</p>
        <ul>
          <li>
            I have a bag - this is <b>mine.</b>
          </li>
          <li>
            You have a cat - that cat is <b>yours.</b>
          </li>
          <li>
            He has a car - it is <b>his.</b>
          </li>
          <li>
            She has a book - it is <b>hers.</b>
          </li>
          <li>
            We have an apartment - it is <b>ours.</b>
          </li>
          <li>
            They have a daughter - she is <b>theirs.</b>
          </li>
        </ul>
      </div>
      <Quiz
        title="Take a quiz!"
        questions={[
          //because we are in react we need to start the array with a curly bracket (because it's inside of a component)
          {
            title:
              " Jane has already eaten her lunch , but I'm saving (I) _____________  until later.",
            possibleAnswers: [
              { title: " mine", correctAnswer: true },
              { title: " my" },
            ],
            userAnswer: "",
          },
          {
            title:
              " My cell phone needs to be fixed, but (you) _____________ is working.",
            possibleAnswers: [
              { title: " you" },
              { title: " yours", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "My computer is a Mac, but (she) _______________ is a PC.",
            possibleAnswers: [
              { title: " hers", correctAnswer: true },
              { title: " she" },
            ],
            userAnswer: "",
          },
          {
            title:
              "We gave them our telephone number, and they gave us (they) __________________.",
            possibleAnswers: [
              { title: " theirs" },
              { title: " they", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "My pencil is broken. Can I borrow (you) ____________ ?",
            possibleAnswers: [
              { title: " you" },
              { title: " yours", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "My  car is old, but (he)  __________ is new.",
            possibleAnswers: [
              { title: " he" },
              { title: " his", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "You can't have any chocolate! It's all (I)______________ !",
            possibleAnswers: [
              { title: " my" },
              { title: " mine", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "The books are (I) ____________.",
            possibleAnswers: [
              { title: " mine", correctAnswer: true },
              { title: " my" },
            ],
            userAnswer: "",
          },
          {
            title: "The dog is (we) ______________.",
            possibleAnswers: [
              { title: " ours", correctAnswer: true },
              { title: " we" },
            ],
            userAnswer: "",
          },
          {
            title: "The motorcycle is (she)_____________. ",
            possibleAnswers: [
              { title: " hers", correctAnswer: true },
              { title: " she" },
            ],
            userAnswer: "",
          },
        ]}
      ></Quiz>
    </>
  );
}

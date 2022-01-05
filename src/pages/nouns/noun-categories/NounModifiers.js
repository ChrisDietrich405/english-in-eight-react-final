import Quiz from "../../../components/Quiz";

export default function NounModifiers() {
  return (
    <>
      <div className="page-title">
        <h2>Noun Modifiers</h2>
      </div>
      <div className="page-body">
        <p className="grammar-explanation-paragraph">
          We often use two nouns together to show that one thing is a part of
          something else. In the following examples, the first noun is called a
          noun modifier.
        </p>

        <ul className="page-examples">
          <li>
            <b>Baltimore</b> residents
          </li>
          <li>
            the <b>dog</b> leash
          </li>
          <li>
            the <b>kitchen</b> window
          </li>
          <li>
            the <b>chair</b> leg
          </li>
          <li>
            my <b>coat</b> pocket
          </li>
        </ul>
        <p></p>
        <p>
          <b>Be careful!</b>
        </p>
        <p>
          We don’t use a possessive form for these things. We do NOT talk about:
        </p>
        <ul className="page-examples">
          <li>the car's door</li>
          <li>the kitchen's window</li>
          <li>the chair's leg</li>
        </ul>
        <p>We say</p>
        <ul className="page-examples">
          <li>the car door</li>
          <li>the kitchen window</li>
          <li>the chair leg</li>
        </ul>
        <p>We can use noun modifiers to show what something is made of:</p>
        <ul className="page-examples">
          <li>a gold watch</li>
          <li>a canvas purse</li>
          <li>a metal box</li>
        </ul>
        <p>We often use noun modifiers with nouns ending in –er:</p>
        <ul className="page-examples">
          <li>an office worker</li>
          <li>a jewelry maker</li>
          <li>a potato peeler</li>
        </ul>
        <p>We use measurements, age or value as noun modifiers:</p>
        <ul className="page-examples">
          <li>a two-minute rest</li>
          <li>a fifteen pound suitcase</li>
          <li>a fifty-mile journey</li>
        </ul>
        <p>We often use nouns ending in -ing as noun modifiers:</p>
        <ul className="page-examples">
          <li>a shopping list</li>
          <li>a swimming lesson</li>
          <li>a washing machine</li>
        </ul>
      </div>

      <Quiz
        title="Take a Quiz!"
        questions={[
          {
            title: "It's a bridge made of rope. It's a _____________.",
            possibleAnswers: [
              { title: "bridge's rope" },
              { title: "rope bridge", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "It's a bat for baseballs. It's a _____________.",
            possibleAnswers: [
              { title: "batball" },
              { title: "baseball bat", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title:
              "It's a cloth that goes on top of the table. It's a _____________.",
            possibleAnswers: [
              { title: "table cloth", correctAnswer: true },
              { title: "cloth table" },
            ],
            userAnswer: "",
          },
          {
            title: "It's a key for my car. It's a _____________.",
            possibleAnswers: [
              { title: "key car" },
              { title: "car key", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "We bought a bone for dogs. We gave Zak a _____________.",
            possibleAnswers: [
              { title: "bone dog" },
              { title: "dog bone", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "We need a trap for a mouse. We need a ______________.",
            possibleAnswers: [
              { title: "trap mouse" },
              { title: "mousetrap", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "We built a house in the trees. We built a ______________.",
            possibleAnswers: [
              { title: "tree house", correctAnswer: true },
              { title: "house tree" },
            ],
            userAnswer: "",
          },
          {
            title:
              "These are my slippers that I wear in the house .   They’re my ________________",
            possibleAnswers: [
              { title: "house slippers", correctAnswer: true },
              { title: "slippers house" },
            ],
            userAnswer: "",
          },
          {
            title: "This is a ladder with steps.   It’s a ___________.",
            possibleAnswers: [
              { title: "step ladder", correctAnswer: true },
              { title: "ladder step" },
            ],
            userAnswer: "",
          },
          {
            title:
              "My grandmother gave me a plate that is used for serving desserts.   It’s a _____________.",
            possibleAnswers: [
              { title: "dessert plate", correctAnswer: true },
              { title: "plate dessert" },
            ],
            userAnswer: "",
          },
        ]}
      ></Quiz>
    </>
  );
}

import Quiz from "../../../components/Quiz";

export default function ComparativeAdjectives() {
  return (
    <div className="comparative-adjectives">
      <div className="page-title">
        <h2>Comparative Adjectives</h2>
      </div>
      <div className="page-body">
        <p className="grammar-explanation-paragraph">
          To make the comparative form (like 'bigger' or 'more expensive'),
          first we need to know how many syllables are in the adjective.
        </p>
      </div>
      <div className="page-body">
        <p>Adjectives with one syllable</p>
        <p>
          Usually if an adjective has only one syllable, we add 'er' to make the
          comparative form.
        </p>
        <ul className="page-examples">
          <li>clean → cleaner</li>
          <li>small → smaller</li>
          <li>young → younger</li>
          <li>tall → taller</li>
        </ul>
        <p>
          There are some spelling changes. If there is one vowel followed by one
          consonant at the end of the adjective, we often double the consonant.
        </p>
        <ul className="page-examples">
          <li>wet → wetter</li>
          <li>big → bigger</li>
          <li>hot → hotter</li>
          <li>thin → thinner</li>
        </ul>
        <p>If the adjective ends in 'y', this often changes to 'i'.</p>
        <ul className="page-examples">
          <li>dry → drier</li>
          <li>busy → busier</li>
        </ul>
        <p>If the adjective ends in 'e', we don't add another 'e', just 'r'.</p>
        <ul className="page-examples">
          <li>nice → nicer</li>
          <li>large → larger</li>
        </ul>
        <p>
          There are a few adjectives that we have to use 'more' with, even
          though they only have one syllable. We CAN'T add 'er' or 'est'.
        </p>
        <ul className="page-examples">
          <li>fun → more fun (NOT funner)</li>
          <li>real → more real (NOT realer)</li>
          <li>right → more right (NOT righter)</li>
          <li>wrong → more wrong (NOT wronger)</li>
        </ul>
        <p>Adjectives with two syllables</p>
        <p>For adjectives with two syllables we generally use 'more'.</p>
        <ul className="page-examples">
          <li>careful → more careful</li>
          <li>bored → more bored</li>
        </ul>
        <p>
          But some two syllable adjectives can take 'er'. It's also fine to use
          'more'.
        </p>
        <ul className="page-examples">
          <li>clever → cleverer</li>
          <li>simple → simpler</li>
          <li>narrow → narrower</li>
          <li>quiet → quieter</li>
        </ul>
        <p>
          Adjectives with two syllables that end in 'y' usually can add 'er' (y
          generally changes to i). It's also fine to use 'more'.
        </p>
        <ul className="page-examples">
          <li>dirty → dirtier</li>
          <li>pretty → prettier</li>
          <li>happy → happier</li>
          <li>ugly → uglier</li>
        </ul>
        <p>Adjectives with more than two syllables</p>
        <p>
          Adjectives with more than two syllables can only make their
          comparative by using 'more'.
        </p>
        <ul className="page-examples">
          <li>beautiful → more beautiful</li>
          <li>intelligent → more intelligent</li>
          <li>interesting → more more interesting</li>
          <li>expensive → more expensive</li>
        </ul>
        <p>Irregular adjectives</p>
        <p>
          There are also some irregular adjectives. We just need to learn these
          forms.
        </p>
        <ul className="page-examples">
          <li>good → better</li>
          <li>bad → worse</li>
          <li>far → further</li>
          <li>little → less</li>
          <li>much → more</li>
        </ul>
      </div>
      <Quiz
        title="Take a Quiz!"
        questions={[
          {
            title: "Dogs are _______________ (loyal) than cats",
            possibleAnswers: [
              { title: "more loyal", correctAnswer: true },
              { title: "loyaler" },
            ],
            userAnswer: "",
          },
          {
            title: "Marcus is ______________ (old) than Nia.",
            possibleAnswers: [
              { title: "older", correctAnswer: true },
              { title: "more old" },
            ],
            userAnswer: "",
          },
          {
            title: "Samantha is ______________(quiet) than her brother.",
            possibleAnswers: [
              { title: "quietter" },
              { title: "quieter", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "Whales are ________________ (large) than Elephants.",
            possibleAnswers: [
              { title: "largger" },
              { title: "larger", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title:
              "My Latin class is ______________ (boring) than my English class. ",
            possibleAnswers: [
              { title: "more boring", correctAnswer: true },
              { title: "boringer" },
            ],
            userAnswer: "",
          },
          {
            title:
              "The streets here are  _______________ (narrow) than in Baltimore.",
            possibleAnswers: [
              { title: "narrower", correctAnswer: true },
              { title: "narroest" },
            ],
            userAnswer: "",
          },
          {
            title: "Malcolm is _______________ (busy) than his brother.",
            possibleAnswers: [
              { title: "busier", correctAnswer: true },
              { title: "busyer" },
            ],
            userAnswer: "",
          },
          {
            title:
              "Demetrius is ________________ (ambitious) than his colleagues.",
            possibleAnswers: [
              { title: "ambitiouser" },
              { title: "more ambitious", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title:
              "My garden is  ________________  (colorful) than my neighbors.",
            possibleAnswers: [
              { title: "colorfuler" },
              { title: "more colorful", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "His house is _______________ (comfortable) than my house .",
            possibleAnswers: [
              { title: "more comfortable", correctAnswer: true },
              { title: "comfortabler" },
            ],
            userAnswer: "",
          },
        ]}
      ></Quiz>
    </div>
  );
}

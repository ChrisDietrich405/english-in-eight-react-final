//Done

import Quiz from "../../../components/Quiz";

export default function UncountableAndCountable() {
  return (
    <div className="page-body">
      <div className="page-title">
        <h1>Countable & Uncountable Nouns </h1>
      </div>

      <div>
        <h4>Countable Nouns</h4>
        <p className="grammar-explanation-paragraph">
          Countable nouns are nouns we can count, e.g.,1 cat, 2 dogs. They have
          a singular and a plural form. The singular form can use "a" or "an".
          If you need to ask about the quantity of a countable noun, you ask
          "How many?" along with the plural countable noun, e.g., How many dogs?
        </p>
      </div>
      <div>
        <p>Examples</p>
        <ul className="page-examples">
          <li>
            I own <b>a</b> house.
          </li>
          <li>
            There were <b>a few</b> fights.
          </li>
          <li>
            The need <b>two</b> t-shirts please.
          </li>
          <li>
            <b>How many</b> people are at the party?
          </li>
          <li>
            She has <b>six</b> cats.
          </li>
        </ul>
      </div>
      <div>
        <h4>Uncountable Nouns</h4>
        <p className="grammar-explanation-paragraph">
          Uncountable nouns are for nouns we don’t count. These nouns might be
          used to describe abstract ideas , e.g., anger. They can be used for
          physical objects that are too small , e.g., rice. Uncountable nouns
          can be used for things that don't have shape (powders, liquids, gases,
          etc.). Uncountable nouns usually are used as singular nouns with
          singular verbs , e.g., The <b>rice is</b> delicious
        </p>
      </div>
      <div>
        <p>Examples</p>
        <ul className="page-examples">
          <li>water</li>
          <li>tea</li>
          <li>sugar</li>
          <li>fear</li>
          <li>rice</li>
          <li>anger</li>
          <li>knowledge</li>
          <li>beauty</li>
          <li>air</li>
        </ul>
      </div>
      <p className="grammar-explanation-paragraph">
        We can’t use a/an with uncountable nouns. To explain a quantity of an
        uncountable noun, use an expression or word like <b>some</b>,{" "}
        <b>a lot of</b>, <b>much</b>, or else use an exact measurement like{" "}
        <b>a cup of</b>, <b>a bag of</b>,<b> a slice of</b> e.g., a cup of
        coffee. In order to ask about the quantity of an uncountable noun, you
        say <b>"How much?"</b> e.g., How much water do you have?
      </p>

      <p>Example</p>
      <ul className="page-examples">
        <li>
          There isn't a lot of <b>sugar</b> in these cookies.
        </li>
        <li>
          I need some <b>information</b> about that.
        </li>
        <li>
          He didn't havemuch <b>money</b>.
        </li>
        <li>
          How much <b>tea </b>do you want?
        </li>
      </ul>
      <p>
        <b>Careful!!!</b>
      </p>

      <p className="grammar-explanation-paragraph">
        There are some uncountable nouns that are countable in other languages
        but uncountable in English. Obviously they must follow the rules for
        uncountable nouns. Some common ones are: <b>advice</b>, <b>behavior</b>,{" "}
        <b>bread</b>, <b>furniture</b>, <b>information</b>, <b>news</b>,{" "}
        <b>progress</b>, <b>stuff</b>, <b>traffic</b>, <b>travel</b>,{" "}
        <b>trouble</b>, <b>weather</b>, <b>work</b>.
      </p>

      <p>Examples</p>

      <ul className="page-examples">
        <li>
          The <b>furniture</b> in this store is very expensive.
        </li>
        <li>
          How much<b> bread </b>should I bring?
        </li>
        <li>
          I didn't make much<b>progress</b> today.
        </li>
        <li>
          She gave me some very good <b> advice</b>
        </li>
      </ul>
      <br />
      <Quiz
        title="Take a quiz!"
        questions={[
          {
            title: "We don't drink ____ coffee.",
            possibleAnswers: [
              { title: " many" },
              { title: " much", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "I ate _____ soup for lunch.",
            possibleAnswers: [
              { title: " a few" },
              { title: " a little", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "How _________ rice do we need.",
            possibleAnswers: [
              { title: " much", correctAnswer: true },
              { title: " many" },
            ],
            userAnswer: "",
          },
          {
            title: "Eating _____ chocolate is unhealthy.",
            possibleAnswers: [
              { title: " a lot of", correctAnswer: true },
              { title: " many" },
            ],
            userAnswer: "",
          },

          {
            title: "How ________ soy milk do you want?",
            possibleAnswers: [
              { title: " much", correctAnswer: true },
              { title: " many" },
            ],
            userAnswer: "",
          },

          {
            title: "There _______ many beans in the soup.",
            possibleAnswers: [
              { title: " are", correctAnswer: true },
              { title: " is" },
            ],
            userAnswer: "",
          },

          {
            title: "______ there tofu in the salad?",
            possibleAnswers: [
              { title: " Are" },
              { title: " Is", correctAnswer: true },
            ],
            userAnswer: "",
          },

          {
            title: "How ___________ cups of tea do you drink in the morning?",
            possibleAnswers: [
              { title: " much" },
              { title: " many", correctAnswer: true },
            ],
            userAnswer: "",
          },

          {
            title: "There ______ orange juice on the table.",
            possibleAnswers: [
              { title: " is", correctAnswer: true },
              { title: " are" },
            ],
            userAnswer: "",
          },

          {
            title: "I have ________ friends in Kenya.",
            possibleAnswers: [
              { title: " a few", correctAnswer: true },
              { title: " a little" },
            ],
            userAnswer: "",
          },
        ]}
      ></Quiz>
    </div>
  );
}

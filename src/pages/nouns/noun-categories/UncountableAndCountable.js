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
          Countable nouns are for things we can count using numbers. They have a
          singular and a plural form. The singular form can use "a" or "an". If
          you want to ask about the quantity of a countable noun, you ask "How
          many?" combined with the plural countable noun.
        </p>
      </div>
      <div>
        <p>Examples</p>
        <ul className="page-examples">
          <li>
            There were <b>a few</b> cars.
          </li>
          <li>
            I own <b>a</b> bike.
          </li>
          <li>
            I would like <b>two</b> books please.
          </li>
          <li>
            <b>How many</b> friends do you have?
          </li>
          <li>
            She has <b>five</b> cats.
          </li>
        </ul>
      </div>
      <div>
        <h4>Uncountable Nouns</h4>
        <p className="grammar-explanation-paragraph">
          Uncountable nouns are for the things that we don’t count with numbers.
          They may be the names for abstract ideas or qualities or for physical
          objects that are too small or too amorphous (no definite shape) to be
          counted (liquids, powders, gases, etc.). Uncountable nouns are used
          with a singular verb. They usually do not have a plural form.
        </p>
      </div>
      <div>
        <p>Examples</p>
        <ul className="page-examples">
          <li>tea</li>
          <li>sugar</li>
          <li>water</li>
          <li>air</li>
          <li>rice</li>
          <li>knowledge</li>
          <li>beauty</li>
          <li>anger</li>
          <li>fear</li>
          <li>love</li>
          <li>money</li>
          <li>research</li>
          <li>safety</li>
          <li>evidence</li>
        </ul>
      </div>
      <p className="grammar-explanation-paragraph">
        We can’t use a/an with these nouns. To express a quantity of an
        uncountable noun, use a word or expression like <b>some</b>,{" "}
        <b>a lot of</b>, <b>much</b>, <b>a great deal of</b> , or else use an
        exact measurement like <b>a cup of</b>, <b>a bag of</b>,
        <b> a slice of</b>. If you want to ask about the quantity of an
        uncountable noun, you ask <b>"How much?"</b>
      </p>

      <p>Example</p>
      <ul className="page-examples">
        <li>
          There has been <b>a lot of</b> research into the causes of this
          disease.
        </li>
        <li>
          Can you give me <b>some</b> information about uncountable nouns?
        </li>
        <li>
          He did not have <b>much</b> sugar left.
        </li>
        <li>
          Measure <b>1 cup of</b> water, <b>300g of</b> flour, and{" "}
          <b>1 teaspoon of</b> salt.
        </li>
        <li>
          <b>How much</b> rice do you want?
        </li>
      </ul>
      <p>
        <b>Careful!!!</b>
      </p>

      <p className="grammar-explanation-paragraph">
        Some nouns are countable in other languages but uncountable in English.
        Obviously they must follow the rules for uncountable nouns. The most
        common ones are: <b>advice</b>, <b>baggage</b>, <b>behavior</b>,{" "}
        <b>bread</b>, <b>furniture</b>, <b>information</b>, <b>luggage</b>,{" "}
        <b>news</b>, <b>progress</b>, <b>stuff</b>, <b>traffic</b>,{" "}
        <b>travel</b>, <b>trouble</b>, <b>weather</b>, <b>work</b>.
      </p>

      <p>Examples</p>

      <ul className="page-examples">
        <li>
          I would like to give you <b>some</b> advice.
        </li>
        <li>
          <b>How much</b> bread should I bring?
        </li>
        <li>
          I didn't make <b>much</b> progress today.
        </li>
        <li>
          This looks like <b>a lot of</b> trouble to me.
        </li>
        <li>We did an hour of work yesterday.</li>
      </ul>
      <br />
      <Quiz
        title="Take a quiz!"
        questions={[
          {
            title: "Eating _____ chocolate is unhealthy.",
            possibleAnswers: [
              { title: " a lot of", correctAnswer: true },
              { title: " many" },
            ],
            userAnswer: "",
          },
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
            title:
              "How ___________ cups of coffee do you drink in the morning?",
            possibleAnswers: [
              { title: " much" },
              { title: " many", correctAnswer: true },
            ],
            userAnswer: "",
          },

          {
            title: "There ______ juice in the refrigerator.",
            possibleAnswers: [
              { title: " is", correctAnswer: true },
              { title: " are" },
            ],
            userAnswer: "",
          },

          {
            title: "I have ________ friends in Germany.",
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

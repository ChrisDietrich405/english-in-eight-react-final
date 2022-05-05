import "../../../styles/pages/other-topics.scss";

export default function PhrasalVerbs() {
  return (
    <>
      <div className="page-title">
        <h1>Phrasal Verbs</h1>
      </div>
      <div className="page-body">
        <p className="grammar-explanation-paragraph">
          Phrasal Verbs are expressions consisting of a verb and another
          element, typically either an adverb, as in <b>break down</b>, or a
          preposition, for example <b>see to</b>, or a combination of both, such
          as <b>look down on.</b>
        </p>
      </div>
      <div className="content-wrapper">
        <img
          src="../../../images/break-down.jpg"
          className="expressions-image1"
          aria-hidden="true"
        />
        <p>
          In the phrasal verb <strong>break down</strong>, break is a verb and{" "}
          <strong>down</strong>
          &nbsp;is a preposition. <strong>Break down</strong> can mean that a
          vehicle stops functioning.
        </p>
      </div>
      <div className="content-wrapper">
        <img
          src="../../../images/fall-for.jpg"
          className="expressions-image2"
          aria-hidden="true"
        />
        <p>
          In the phrasal verb <strong>fall for</strong>, fall is a verb and{" "}
          <strong>for</strong>
          &nbsp;is a preposition. <strong>Fall for</strong> can mean that
          someone falls in love.
        </p>
      </div>
    </>
  );
}

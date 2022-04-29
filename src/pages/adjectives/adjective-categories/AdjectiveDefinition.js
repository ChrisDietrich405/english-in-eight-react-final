export default function AdjectiveDefinition() {
  return (
    <>
      <div className="page-title">
        <h2>Adjectives Definition</h2>
      </div>
      <div className="expressions-definition-body">
        <p className="grammar-explanation-paragraph">
          {" "}
          An adjective is a word that tells us more about a noun. It "describes"
          a noun. In these examples, the adjectives are in bold and the nouns
          are in italics.
        </p>
      </div>
      <div className="definition-pictures-container">
        <div className="definition-pictures">
          <div className="picture-wrapper">
            <img
              src="../../../images/strong-man-adjectives-definition.jpg"
              alt=""
            />
          </div>
          <p>
            <strong>Strong</strong> <em>man</em>
          </p>
        </div>
        <div className="definition-pictures">
          <div className="picture-wrapper">
            <img
              src="../../../images/happy-child-adjectives-definition.jpg"
              alt=""
            />
          </div>
          <p>
            <strong>Happy</strong> <em>child</em>
          </p>
        </div>
        <div className="definition-pictures">
          <div className="picture-wrapper">
            <img
              src="../../../images/small-dog-adjectives-definition.jpg"
              alt=""
            />
          </div>
          <p>
            <strong>Small</strong> <em>dog</em>
          </p>
        </div>
      </div>
    </>
  );
}

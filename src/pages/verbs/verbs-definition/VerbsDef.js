//find three new verbs

export default function VerbsDef() {
  return (
    <>
      <div className="page-title">
        <h2>Verbs Definition</h2>
      </div>
      <div className="page-body">
        <p className="grammar-explanation-paragraph">
          A verb is a word used to describe an action (for example hear), state
          (for example become), or occurrence (for example happen)
        </p>
      </div>
      <div className="definition-pictures-container">
        <div className="definition-pictures">
          <div className="picture-wrapper">
            <img src="../../../images/action-verbs-definition.png" alt="" />
          </div>
          <p className="picture-subtitle">Hear</p>
        </div>
        <div className="definition-pictures">
          <div className="picture-wrapper">
            <img src="../../../images/state-verbs-definition.png" alt="" />
          </div>
          <p className="picture-subtitle">Become</p>
        </div>
        <div className="definition-pictures">
          <div className="picture-wrapper">
            <img src="../../../images/occurence-verbs-definition.png" alt="" />
          </div>
          <p className="picture-subtitle">Happen</p>
        </div>
      </div>
    </>
  );
}

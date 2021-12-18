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
          <img src="../../../images/action-verbs-definition.png" alt="" />
          <p>Hear</p>
        </div>
        <div className="definition-pictures">
          <img src="../../../images/state-verbs-definition.png" alt="" />
          <p>Become</p>
        </div>
        <div className="definition-pictures">
          <img src="../../../images/occurence-verbs-definition.png" alt="" />
          <p>Happen</p>
        </div>
      </div>
    </>
  );
}

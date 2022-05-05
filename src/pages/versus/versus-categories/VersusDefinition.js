import "../../../styles/pages/versus.scss";
import "../../../styles/pages/other-topics.scss";

export default function VersusDefinition() {
  return (
    <div className="expressions">
      <div className="page-title">
        <h2>Versus Definition</h2>
      </div>
      <div className="versus">
        <p className="grammar-explanation-paragraph">
          In this section let's compare different topics in order to clear up
          any confusion. For example many students don't really understand the
          difference between the verbs talk and say or the verbs remember and
          remind.
        </p>
        <div className="versus-image-container">
          <div className="versus-content-wrapper">
            <img
              src="../../../images/remember-versus-remind.jpg"
              className="expressions-image1"
              alt=""
            />
          </div>
          <div className="versus-content-wrapper">
            <img
              src="../../../images/speak-versus-talk.png"
              className="expressions-image2"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

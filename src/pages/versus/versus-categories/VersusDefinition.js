import "../../../styles/pages/versus.scss"

export default function VersusDefinition() {
    return(
        <div className="expressions">
            <div className="page-title">
                <h2>Versus Definition</h2>
            </div>
            <div className="body">
                <p>In this section let's compare different topics in order to clear 
                    up any confusion. For example many students don't really understand the
                    difference between the verbs talk and say or the verbs remember and remind. 
                </p>
                <div className="versus-image-container">
                    <div className="versus-expressions-image1-container">
                        <img src="../../../images/remember-versus-remind.jpg" className="expressions-image1" alt=""/>
                    </div>
                    <div className="versus-expressions-image2-container">
                        <img src="../../../images/speak-versus-talk.png" className="expressions-image2" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}
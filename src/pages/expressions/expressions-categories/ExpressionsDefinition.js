import "../../../styles/pages/expressions.scss"

export default function ExpressionsDefinition() {
    return(
        <div className="expressions">
            <div className="page-title">
                <h2>Idiomatic Expressions Definition</h2>
            </div>
            <div className="body">
                <p>Idiomatic expressions are a type of informal language that have a meaning
                   different from the meaning of the words in the expression. 
                </p>
                <div className="expressions-image1-container">
                    <img src="../../../images/timeismoney.png" className="expressions-image1" alt=""/>
                    <p>In the expression <strong>time is money</strong> we are not literally saying that time
                       is actual currency. We are explaining that time is a valuable resource.</p>
                </div>
                <div className="expressions-image2-container">
                    <img src="../../../images/MindYourOwnBusiness.jpg" className="expressions-image2" alt=""/>
                    <p> Some expressions don't have meaning even in a literal sense, e.g., &nbsp;
                    <strong>mind your own business</strong>. It means to have respect for other people's privacy.</p>
                </div>
            </div>
        </div>
    )
}
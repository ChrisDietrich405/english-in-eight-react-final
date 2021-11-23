import { Link } from "react-router-dom"

export default function FutureTenseVerbDefinition() {
    return(
        <>
        <div className="page-title">
            <h2>Future Tense Verbs</h2>
        </div>
        <div className="page-body">
            <p className="grammar-explanation-paragraph">There are a number of different ways of referring to the future in English. It is important to remember that we are expressing more than simply the time of the action or event. Obviously, any 'future' tense will always refer to a time 'later than now', but it may also express our attitude to the future event.
            </p>
            <div className="btn-container btn-flex">
                <Link to="/future-verb-tenses/future-simple" className=" btn btn-primary">Future Simple</Link>
                <Link to="/future-verb-tenses/future-continuous" className="btn btn-primary">Future Continuous</Link>
                <Link to="/future-verb-tenses/future-perfect" className="btn btn-primary">Future Perfect</Link>
                <Link to="/future-verb-tenses/future-perfect-continuous" className="btn btn-primary">Future Perfect Continuous</Link>
            </div>
        </div>
        </>
    )
}
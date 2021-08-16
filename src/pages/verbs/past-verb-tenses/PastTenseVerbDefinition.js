import { Link } from "react-router-dom"

export default function PastTenseVerbDefinition() {
    return(
        <>
        <div className="page-title">
            <h2>Past Tense Verbs</h2>
        </div>
        <div className="page-body">
            <p className="grammar-explanation-paragraph">There are four past tenses in English. The past tense refers to events that have happened in the past. The simple past refers to events that have started and ended in the past. For example I went to the store yesterday The past continuous refers to an event that was in progress at some point in the past. For example at 6 o'clock, I was eating dinner. The past perfect tense is used to make it clear that one event happened before another in the past. For example I had eaten before she arrived The past perfect continuous tense shows that an action that started in the past continued up until another time in the past. For example I had been working at the company for five years when I got the promotion.
            </p>
            <div className="btn-container">
                <Link to="/past-verb-tenses/past-simple" className=" btn btn-primary">Simple Past</Link>
                <Link to="/past-verb-tenses/past-continuous" className="btn btn-primary">Past Continuous</Link>
                <Link to="/past-verb-tenses/past-perfect" className="btn btn-primary">Past Perfect</Link>
                <Link to="/past-verb-tenses/past-perfect-continuous" className="btn btn-primary">Past Perfect Continuous</Link>
            </div>
            
        </div>
        </>
    )
}
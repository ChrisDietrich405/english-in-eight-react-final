import { Link } from "react-router-dom";

//DONE

export default function PastTenseVerbDefinition() {
  return (
    <>
      <div className="page-title">
        <h2>Past Tense Verbs</h2>
      </div>
      <div className="page-body">
        <p className="grammar-explanation-paragraph">
          There are four past tenses in English. The past tense describes events
          that have happened in the past. The <b>simple past</b> describes
          events that have started and finished in the past. The{" "}
          <b>past continuous</b> describes an event that was in progress at some
          point in the past. The <b>past perfect</b> is used to make it clear
          that one event happened before another in the past. The{" "}
          <b>past perfect continuous</b> shows that an action that started in
          the past continued up until another time in the past.
        </p>
        <div className="btn-container btn-flex">
          <Link to="/past-verb-tenses/past-simple" className=" btn btn-primary">
            Simple Past
          </Link>
          <Link
            to="/past-verb-tenses/past-continuous"
            className="btn btn-primary"
          >
            Past Continuous
          </Link>
          <Link to="/past-verb-tenses/past-perfect" className="btn btn-primary">
            Past Perfect
          </Link>
          <Link
            to="/past-verb-tenses/past-perfect-continuous"
            className="btn btn-primary"
          >
            Past Perfect Continuous
          </Link>
        </div>
      </div>
    </>
  );
}

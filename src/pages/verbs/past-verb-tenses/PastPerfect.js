import Quiz from "../../../components/Quiz"

export default function PastPerfect() {
    return(
        <>
        <div className="page-title">
            <h2>Past Perfect</h2>
        </div>
        <div className="table-container">
              <table className="table-body">
                  <tr>
                    <th>Positive</th>
                    <th>Negative</th> 
                    <th>Negative short form</th> 
                  </tr>
                  <tr>
                    <td>I had swum</td>
                    <td>I had not swum</td> 
                    <td>I hadn't swum</td> 
                  </tr>
                  <tr>
                    <td>You had fought</td>
                    <td>You had not fought</td>
                    <td>You hadn't fought</td>
                  </tr>
                  <tr>
                    <td>She, he, it had worked</td>
                    <td>She, he, it had not worked</td> 
                    <td>She, he, it had not worked</td> 
                  </tr>
                  <tr>
                    <td>We had talked</td>
                    <td>We had not talked</td> 
                    <td>We hadn't talked</td> 
                  </tr>
                  <tr>
                    <td>They had danced</td>
                    <td>They had not danced</td>
                    <td>They hadn't danced</td>
                  </tr>
              </table>
            </div>
            <p>The past perfect is used to describe an action that happened before another action</p>
                <ul className="page-examples">
                    <li>I <b>had finished</b> eating by the time she came home.</li>
                    <li>We <b>had already eaten</b> before you ordered the food.</li>
                    <li>She told him to move out, but he <b>had already moved</b> out most of his stuff.</li>
                    <li>They <b>had started</b>the project before their boss directed them to. </li>
                </ul>
   

        </>
    )
}
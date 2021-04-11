import { Link, Switch, Route } from "react-router-dom";
import SimplePresent from "../pages/verbs/present-verb-tenses/SimplePresent";
import PresentContinuous from "../pages/verbs/present-verb-tenses/PresentContinuous";

export default function SidebarPage({ match }) {

    console.log(arguments)

	return (
		<div className="sidebar-container">
			<div className="sidebar-left">
				<div className="center">
                    <h4>Present Verb Tenses   </h4>
				</div>
				<Link to="/present-verb-tenses/simple-present">
					Simple Present
				</Link>
				<Link to="/present-verb-tenses/present-continuous">
					Present Continuous
				</Link>
				<a href="$">Present Perfect</a>
				<p className="present-perfect-continuous">
					Present Perfect Continuous
				</p>
			</div>
			<div className="sidebar-right">
				<Switch>
					<Route
						path={`/present-verb-tenses/simple-present`}
						exact={true}
						component={() => SimplePresent}
					></Route>
					<Route
						path={`/present-verb-tenses/present-continuous`}
						component={() => PresentContinuous}
					></Route>
				</Switch>
			</div>
		</div>
	);
}

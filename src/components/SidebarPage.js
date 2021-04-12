import { Link, Switch, Route } from "react-router-dom";
import SimplePresent from "../pages/verbs/present-verb-tenses/SimplePresent";
import PresentContinuous from "../pages/verbs/present-verb-tenses/PresentContinuous";

export default function SidebarPage(props) {
	

	return (
		<div className="sidebar-container">
		
        	<div className="sidebar-left">
				<div className="center">
					<h4>{ props.title }</h4>
                </div>
                <ul>
                    {/* <li>
                        <Link to="/present-verb-tenses/simple-present">
					        Simple Present
				        </Link>
                    </li> */}
                    {props.links.map(link => <li>
                        <Link to={link.path}>
					        {link.title}
				        </Link>
                    </li>)}
                </ul>
				
				
				{/* <a href="$">Present Perfect</a>
				<p className="present-perfect-continuous">
					Present Perfect Continuous
				</p> */}
			</div>
			
            
            <div className="sidebar-right">
                <Switch>
                    {props.links.map(link => {
                        <Route
                            path={link.path}
                            component={link.component}
                        />
                    })}
                    {/* 					
					<Route
						path={`/present-verb-tenses/present-continuous`}
						component={PresentContinuous}
					></Route> */}
				</Switch>
			</div>
		</div>
	);
}

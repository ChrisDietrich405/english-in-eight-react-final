import { Link, Switch, Route } from "react-router-dom";
import "../styles/components/sidebar.scss"
import "../styles/pages/images.scss"
import classnames from "classnames"


export default function SidebarPage(props) {
	

	return (
		<div className="sidebar-container">
		
        	<div className="sidebar-left">
            
				    <div className="sidebar-title">
					  <h4>{ props.title }</h4>
            </div>
              <ul>
              {props.links.map(link => <li className="sidebar-left-links">    
                <Link to={link.path}  className={classnames("sidebar-left-subtitle", {active: window.location.pathname==link.path})}>
                {link.title}
                </Link>
                  </li>)}
              </ul>      
		     	</div>

          <div className="sidebar-right">

                <Switch>
                  {props.links.map(link => {
                    return  <Route 
                          path={link.path}
                          component={link.component}
                      />
                  })}				
                </Switch>  
          </div>
		  </div>
	);
}

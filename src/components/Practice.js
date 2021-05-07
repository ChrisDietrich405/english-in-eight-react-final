import { Switch, Route, Link } from "react-router-dom"
import classnames from "classnames"
import "./styles/components/sidebar.scss"

export default function Practice(props) {
    return (
        <div className="sidebar-container">
            <div className="sidebar-left">
                <div className="sidebar-title">
                    <h4>{ props.title }</h4>
                </div>
                <ul>
                    {props.links.slice(1).map(link => <li>
                        <Link to={link.path} className={classnames("sidebar-left-title", {active: window.location.path == link.path})}></Link>
                        {link.title}
                    </li>)}
                </ul>
            </div>

            <div className="sidebar-right">
                <Switch>
                    {props.links.map(link => {
                        return <Route 
                        path={link.path}
                        component={link.component}
                        />
                    })}
                </Switch>
            </div>
        </div>
    )
}
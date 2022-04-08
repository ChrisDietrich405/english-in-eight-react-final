import { Link, Switch, Route } from "react-router-dom";
import classnames from "classnames";
import parser from "html-react-parser";

import "../styles/components/sidebar.scss";
import "../styles/pages/images.scss";

export default function SidebarPage(props) {
  return (
    <div className="sidebar-container">
      <div className="sidebar-left">
        <div className="sidebar-title">
          <h1>{props.title}</h1>
        </div>
        <ul>
          {props.links.map((link, i) => (
            <li key={i} className="sidebar-left-links">
              <div></div>
              <Link
                to={link.path}
                className={classnames("sidebar-left-subtitle", {
                  active: window.location.pathname === link.path,
                })}
              >
                {parser(link.title)}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar-right">
        <Switch>
          {props.links.map((link, i) => {
            return (
              <Route key={i} path={link.path} component={link.component} />
            );
          })}
        </Switch>
      </div>
    </div>
  );
}

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./pages/Home"
import Nouns from "./pages/Nouns"
import Verbs from "./pages/Verbs"
import Expressions from "./pages/Expressions"

import Navbar from "./components/Navbar"

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/nouns"  component={Nouns}/>
        <Route path="/verbs" component={Verbs}/>
        <Route path="/expressions" component={Expressions}/>
      </Switch>     
    </Router>
  
   
  );
}

export default App;

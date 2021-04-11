import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./pages/Home"
import Nouns from "./pages/Nouns"
import Versus from "./pages/Versus"
import Expressions from "./pages/Expressions"

import Navbar from "./components/Navbar"

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/nouns"  component={Nouns}/>
        <Route path="/versus" component={Versus}/>
        <Route path="/expressions" component={Expressions}/>
      </Switch>     
    </Router>
  
   
  );
}

export default App;

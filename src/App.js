import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./pages/Home"
import PartsOfSpeech from "./pages/PartsOfSpeech"
import PresentTenseVerbs from "./pages/verbs/PresentTenseVerbs"
import Nouns from "./pages/nouns/Nouns"
import Expressions from "./pages/expressions/Expressions"

import Navbar from "./components/Navbar"

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/parts-of-speech"  component={PartsOfSpeech}/>
        <Route path="/present-verb-tenses" component={PresentTenseVerbs}/>
        <Route path="/noun-categories" component={Nouns}/>
        <Route path="/expressions" component={Expressions}/>
      </Switch>     
    </Router>
  
   
  );
}

export default App;

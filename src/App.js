
//navbar tabs need to be smaller maybe 16
//add a third value alert that notifies the user that the question wasn't answered
//https://youglish.com/pronounce/recently/english/us?https://youglish.com/pronounce/recently/english/us?
//notification of the questions that the user didn't answer
//after user clicks submit if some of the questions aren't answered change opacity
//of the button and also add a notification at the end of the quiz that the user didn't
//answer for example questions 4, 5


//on home page make subtext larger and titles larger in the cards
//add space between idiomatic expressions 
//try a border or background color around the long explanations
//add a footer 





import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./pages/Home"
import VerbsDefinition from "./pages/verbs/VerbsDefinition"
import PresentTenseVerbs from "./pages/verbs/PresentTenseVerbs"
import PastTenseVerbs from "./pages/verbs/PastTenseVerbs"
import FutureTenseVerbs from "./pages/verbs/FutureTenseVerbs"
import Nouns from "./pages/nouns/Noun"
import Expressions from "./pages/expressions/Expressions"
import PhrasalVerbs from "./pages/phrasal-verbs/PhrasalVerbs"
import Adjectives from "./pages/adjectives/Adjectives"
import Versus from "./pages/versus/Versus"

import Navbar from "./components/Navbar"

import {Helmet} from "react-helmet";

function App() {
  return (
    <div>
       <Helmet>
                <meta charSet="utf-8" />
                <title>English in Eight Minutes</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="English in Eight Minutes Title" />
            </Helmet>
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact={true} component={Home}/>
          <Route path="/home" component={Home}/>
          <Route path="/phrasal-verbs-categories"  component={PhrasalVerbs}/>
          <Route path="/present-verb-tenses" component={PresentTenseVerbs}/>
          <Route path="/past-verb-tenses" component={PastTenseVerbs}/>
          <Route path="/future-verb-tenses" component={FutureTenseVerbs}/>
          <Route path="/verbs-definition" component={VerbsDefinition}/>
          <Route path="/noun-categories" component={Nouns}/>
          <Route path="/expressions-categories" component={Expressions}/>
          <Route path="/adjective-categories" component={Adjectives}/>
          <Route path="/versus-categories" component={Versus}/>
        </Switch>     
      </Router>
    </div>
  
   
  );
}

export default App;

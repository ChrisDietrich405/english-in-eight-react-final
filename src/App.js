//for the quizzes get rid of the letters 
//add the feedback underneath
//add a third value alert that notifies the user that the question wasn't answered
//after user submits disable all the questions (bullets) that were answered 
//notification of the questions that the user didn't answer
//after user clicks submit if some of the questions aren't answered change opacity
//of the button and also add a notification at the end of the quiz that the user they didn't
//answer for example questions 4, 5

//for the sidebar active link make the font bolder 

//the search button in the navbar should have the blue as the default


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


import Navbar from "./components/Navbar"

function App() {
  return (
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
        <Route path="/adjective-categories" component={Adjectives}></Route>
      </Switch>     
    </Router>
  
   
  );
}

export default App;

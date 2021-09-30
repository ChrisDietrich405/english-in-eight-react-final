
//make the border of the dropdown the same color as the divider
//the shadow from the search input should be lighter (the same as the cards below)
//the hr line should be thinner and the same size as the divider lines
//for the footer change the input box shadow (same as the cards)
// submit button for the message in the footer

//sidebar links should be black and when you hover over them they change to blue
//reduce the margin between the sidebar and the content (they should be closer together)
//instead of the explanations having the gray background color have a background of just white
//with a gray border
//lighten the color of the background to a lighter gray

// change the color of the bullet red or green depending on whether the answer is right or wrong
// for the questions that weren't answered add the message to the right of the question
// make sure that all questions have punctuation 
// noun definition text needs to be closer together 






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
import Footer from "./components/Footer"

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

      <Footer/>
    </div>
  
   
  );
}

export default App;

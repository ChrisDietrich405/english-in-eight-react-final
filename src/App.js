//PROOFREADING - FINISHED WITH  PRESENT TENSE VERBS

//add padding to all the grammar boxes

//after MVP add images to all the idiomatic expressions and phrasal verbs

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import VerbsDefinition from "./pages/verbs/VerbsDefinition";
import PresentTenseVerbs from "./pages/verbs/PresentTenseVerbs";
import PastTenseVerbs from "./pages/verbs/PastTenseVerbs";
import FutureTenseVerbs from "./pages/verbs/FutureTenseVerbs";
import Nouns from "./pages/nouns/Noun";
import Expressions from "./pages/expressions/Expressions";
import PhrasalVerbs from "./pages/phrasal-verbs/PhrasalVerbs";
import Adjectives from "./pages/adjectives/Adjectives";
import Versus from "./pages/versus/Versus";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { Helmet } from "react-helmet";

function App() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>English in Eight Minutes</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="English in Eight Minutes Title" />
      </Helmet>
      <Router>
        <Navbar />
        <script
          async
          src="https://cse.google.com/cse.js?cx=3ead13e6e58599c1e"
        ></script>
        <div className="gcse-search"></div>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/phrasal-verbs-categories" component={PhrasalVerbs} />
          <Route path="/present-verb-tenses" component={PresentTenseVerbs} />
          <Route path="/past-verb-tenses" component={PastTenseVerbs} />
          <Route path="/future-verb-tenses" component={FutureTenseVerbs} />
          <Route path="/verbs-definition" component={VerbsDefinition} />
          <Route path="/noun-categories" component={Nouns} />
          <Route path="/expressions-categories" component={Expressions} />
          <Route path="/adjective-categories" component={Adjectives} />
          <Route path="/versus-categories" component={Versus} />
        </Switch>
      </Router>

      <Footer />
    </div>
  );
}

export default App;

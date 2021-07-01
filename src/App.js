import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Partners from "./pages/partners/Partners";
import Resources from "./pages/resources/Resources";
import FAQs from "./pages/faq/FAQs";


const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/partners" component={Partners} />
        <Route path="/resources" component={Resources} />
        <Route path="/faq" component={FAQs} />

        {/* When a user enters an invalid route, redirect to the home page */}
        <Redirect to="/" />
      </Switch>
    </Router>
  )
}

export default App

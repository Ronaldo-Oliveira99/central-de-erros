import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

/* Páginas */

import Home from "../view/Home/index.js";
import Erros from "../view/Erros/index.js";
import Welcome from "../view/Welcome/index.js";

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route path="/app" component={Home} />
      <Route path="/home/:ambients" component={Erros} />
      <Route path="*" component={()=> <h1>Page not found</h1>} />
    </Switch>
  </Router>
);

export default Routes;

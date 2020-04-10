import React from "react";
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import ScrollToTop from './ScrollToTop';
import Home from "pages/Home";
import Resume from "pages/Resume";
import Fillgi from "pages/Fillgi";

export default () => (
  <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/resume" exact component={Resume} />
        <Route path="/Fillgi" exact component={Fillgi} />
        <Redirect from="*" to="/" />
      </Switch>
  </Router>
);
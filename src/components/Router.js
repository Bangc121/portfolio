import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from "pages/Home";
import Project from "pages/Project";
import Detail from "pages/Detail";

export default () => (
  <Router>
    <>
      <Switch>
        <Route path="https://bangc121.github.io/portfolio/" exact component={Home} />
        <Route path="https://bangc121.github.io/portfolio/project" exact component={Project} />
        <Route path="https://bangc121.github.io/portfolio/project/:id" component={Detail} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);
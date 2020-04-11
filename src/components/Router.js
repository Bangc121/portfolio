import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import ScrollToTop from './ScrollToTop';
import Home from "pages/Home";
import Resume from "pages/Resume";
import Fillgi from "pages/Fillgi";
import Tictoc from "pages/Tictoc";
import Fixyou from "pages/Fixyou";
import Easyradio from "pages/Easyradio";
import Freemarket from "pages/Freemarket";

export default () => (
  <Router>
    <>
      <ScrollToTop>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/resume" component={Resume} />
          <Route path="/Fillgi" component={Fillgi} />
          <Route path="/Tictoc" component={Tictoc} />
          <Route path="/Fixyou" component={Fixyou} />
          <Route path="/Easyradio" component={Easyradio} />
          <Route path="/Freemarket" component={Freemarket} />
          <Redirect from="*" to="/" />
        </Switch>
      </ScrollToTop>
    </>
  </Router>
);
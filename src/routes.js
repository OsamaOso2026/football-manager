import React from "react";
import { Route, Switch } from "react-router-dom";
import League from "./containers/league";
import Leagues from "./containers/leagues";
import Team from "./containers/team";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Leagues} />
    <Route path={"/League/:id"} component={League} />
    <Route path={"/team/:id"} component={Team} />
  </Switch>
);

export default Routes;

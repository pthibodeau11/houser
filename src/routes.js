import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Wizard from "./Components/Wizard/Wizard";
import step1 from "./Components/Wizard/step1";
import step2 from "./Components/Wizard/step2";
import step3 from "./Components/Wizard/step3";

export default (
  <Switch>
    <Route component={Dashboard} exact path="/" />
    <Route component={Wizard} exact path="/wizard" />
    <Route component={step1} path="/wizard/step1" />
    <Route component={step2} path="/wizard/step2" />
    <Route component={step3} path="/wizard/step3" />
  </Switch>
);

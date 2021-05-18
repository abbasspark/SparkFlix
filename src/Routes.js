import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";

import NotFound from "./components/404";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

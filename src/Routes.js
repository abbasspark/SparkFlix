import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/Home";
import Genre from "./components/Genre";
import NotFound from "./components/404";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route path="/genre/:type/:id" component={Genre} />
      <Route component={NotFound} />
    </Switch>
  );
}

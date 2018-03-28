import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import Admin from "./Admin";
// import App from "../App";
// import NotFound from './NotFound';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Admin} />
      <Route path="/admin" component={Admin} />
    </Switch>
  </BrowserRouter>
);

export default Router;

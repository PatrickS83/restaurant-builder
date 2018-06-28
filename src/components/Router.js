import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import Admin from "./Admin";
// import App from "../App";
// import NotFound from './NotFound';
import createHashHistory from 'history/createHashHistory';

const hashHistory = createHashHistory({ basename: process.env.PUBLIC_URL });

const Router = () => (
  <BrowserRouter history={hashHistory}>
    <Switch>
      <Route exact path="/" component={Admin} />
      <Route path="/admin" component={Admin} />
    </Switch>
  </BrowserRouter>
);

export default Router;

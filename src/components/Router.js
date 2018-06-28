import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import Admin from './Admin';
// import App from "../App";
// import NotFound from './NotFound';
import createHistory from 'history/createBrowserHistory';

const history = createHistory({ basename: process.env.PUBLIC_URL });

const Router = () => (
  <BrowserRouter history={history}>
    <Switch>
      <Route exact path="/" component={Admin} />
      <Route path="/admin" component={Admin} />
    </Switch>
  </BrowserRouter>
);

export default Router;

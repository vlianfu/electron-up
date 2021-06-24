import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Home from '@comp/home';

const AppRoute = () => (
  <Router>
    <Switch>
      <Route path="/" component={Home} />
      <Route component={Home} />
    </Switch>
  </Router>
);

export default AppRoute;

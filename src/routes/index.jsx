import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import './global';

import App from '../pages/App';
import TaskCenter from '../pages/taskCenter/Home';
import Meet from '../pages/meet/Home';

import NoMatch from '../pages/common/NoMatch';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={ App }/>
      <Route exact path='/taskCenter' component={ TaskCenter }/>
      <Route exact path='/meet' component={ Meet }/>
      <Route component={ NoMatch }/>
    </Switch>
  </BrowserRouter>
)

Routes.propTypes = {
  text: PropTypes.any
};

export default Routes;
import React, { Fragment } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Main from './Main';
import Login from './layout/auth/Login';
import Signup from './layout/auth/Signup';
import Profile from './layout/profile/Profile';

function App() {
  return (
      <Router>
        <Fragment>
          <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/auth/login" component={Login} />
          <Route exact path="/auth/register" component={Signup} />
          <Route exact path="/profile" component={Profile} />
          
          </Switch>
         </Fragment>
      </Router>
      
  );
}

export default App;

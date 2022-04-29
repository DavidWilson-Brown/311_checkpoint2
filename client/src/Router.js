import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import cookie from 'cookie';

import Entry from './containers/Entry';
import TextCard from './containers/TextCard';
import Login from './containers/Login';
import AddEntry from './containers/AddEntry';

const checkAuth = () => {
  const cookies = cookie.parse(document.cookie);
  console.log("cookies", cookies);

  return cookies["loggedIn"] ? true : false;
}

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => checkAuth() === true
              ? <Component {...props} />
              : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Entry} />
      <Route path="/script/:id" component={TextCard} />
      <Route path="/login" component={Login} />
      <ProtectedRoute path="/addentry" component={AddEntry} />
    </Switch>
  )
}

export default Router;
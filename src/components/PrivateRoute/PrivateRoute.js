import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route {...rest} render={props => (
    localStorage.someToken
      ? <Component {...rest} {...props} />
      : <Redirect to="/client/login" />
  )}
  />
)


export default PrivateRoute;
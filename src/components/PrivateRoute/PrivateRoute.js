import React, { Component } from 'react';
import { withAuth } from '../../context/Auth';
import { Route, Redirect } from 'react-router-dom';

class PrivateRoute extends Component {
  render() {
    const { isAuthorized } = this.props;
    const { component: RouteComponent, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props =>
          isAuthorized ? <RouteComponent {...props} /> : <Redirect to="/" />
        }
      />
    );
  }
}

export default withAuth(PrivateRoute);

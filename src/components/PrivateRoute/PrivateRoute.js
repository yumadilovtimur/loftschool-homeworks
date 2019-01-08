import React, { Component } from 'react';
import { withAuth } from '../../context/Auth';
import { Route, Redirect } from 'react-router-dom';

class PrivateRoute extends Component {
  render() {
    const { isAuthorized } = this.props;
    const RouteComponent = this.props.component;
    return (
      <Route
        {...this.props}
        render={props =>
          isAuthorized ? (
            <RouteComponent {...props} />
          ) : (
            <Redirect to="/login" />
          )
        }
      />
    );
  }
}

export default withAuth(PrivateRoute);

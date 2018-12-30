import React, { PureComponent } from 'react';
import Layout from '../Layout';
import LoginForm from '../LoginForm';
import Congratulations from '../Congratulations';
import { AuthProvider, MyContext } from '../../contexts/Auth';

class App extends PureComponent {
  render() {
    return (
      <AuthProvider>
        <Layout>
          <MyContext.Consumer>
            {({ isAuthorized, authorize, authorizeError }) =>
              isAuthorized ? (
                <Congratulations />
              ) : (
                <LoginForm
                  authorize={authorize}
                  authorizeError={authorizeError}
                />
              )
            }
          </MyContext.Consumer>
        </Layout>
      </AuthProvider>
    );
  }
}

export default App;

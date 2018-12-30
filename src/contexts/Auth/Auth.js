import React, { PureComponent } from 'react';

const MyContext = React.createContext('');

class AuthProvider extends PureComponent {
  state = {
    isAuthorized: false,
    email: 'stu@dent.com',
    password: '123',
    authorizeError: ''
  };

  authorize = (emailInput, passwordInput) => {
    const { email, password } = this.state;

    if (emailInput === email && passwordInput === password) {
      this.setState({
        isAuthorized: true,
        authorizeError: ''
      });
    } else {
      this.setState({
        authorizeError: 'Email или пароль введён не верно'
      });
    }
  };

  logout = () => {
    this.setState({
      isAuthorized: false,
      authorizeError: ''
    });
  };

  render() {
    const { children } = this.props;
    const { isAuthorized, authorizeError, email } = this.state;
    const value = {
      email,
      isAuthorized,
      authorizeError,
      authorize: this.authorize,
      logout: this.logout
    };

    return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
  }
}

export { AuthProvider, MyContext };

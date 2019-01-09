import React from 'react';
import { withAuth } from '../../context/Auth';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './LoginForm.css';

class LoginForm extends React.Component {
  state = {
    email: '',
    password: ''
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    const { authorize } = this.props;
    authorize(email, password);
  };

  render() {
    const { authError, isAuthorized } = this.props;
    const { password, email } = this.state;

    return isAuthorized ? (
      <Redirect to="/app" />
    ) : (
      <div className="bg">
        <form className="form" onSubmit={this.handleSubmit}>
          <p>
            <label forHtml="email">
              <span className="labelText">Почта</span>
            </label>
            <input
              type="text"
              name="email"
              className="input"
              value={email}
              onChange={this.handleInputChange}
            />
          </p>
          <p>
            <label forHtml="password">
              <span className="labelText">Пароль</span>
            </label>
            <input
              type="password"
              name="password"
              className="input"
              value={password}
              onChange={this.handleInputChange}
            />
          </p>
          {authError === '' || <p className="error">{authError}</p>}
          <div className="buttons">
            <button type="submit" className="button">
              Войти
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default withAuth(LoginForm);

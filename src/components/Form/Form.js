import React from 'react';
import bond from './assets/bond_approve.jpg';
import './Form.css';

const JamesData = {
  firstName: {
    value: 'james',
    error: 'Имя указано не верно',
    errorEmpty: 'Нужно указать имя'
  },
  lastName: {
    value: 'bond',
    error: 'Фамилия указана не верно',
    errorEmpty: 'Нужно указать фамилию'
  },
  password: {
    value: '007',
    error: 'Пароль указан не верно',
    errorEmpty: 'Нужно указать пароль'
  }
};

class Form extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    password: '',
    isValidate: false,
    errors: {}
  };

  changeInputText = e => {
    this.setState({
      errors: {}
    });

    if (e.target.name === 'firstName') {
      this.setState({
        firstName: e.target.value
      });
    }
    if (e.target.name === 'lastName') {
      this.setState({
        lastName: e.target.value
      });
    }
    if (e.target.name === 'password') {
      this.setState({
        password: e.target.value
      });
    }
  };

  submitForm = e => {
    e.preventDefault();
    const errors = {};
    for (const key in JamesData) {
      if (this.state[key] === '') {
        errors[key] = JamesData[key].errorEmpty;
      } else if (this.state[key].toLowerCase() !== JamesData[key].value) {
        errors[key] = JamesData[key].error;
      }
    }

    this.setState({
      errors,
      isValidate: Object.keys(errors).length === 0
    });
  };

  render() {
    if (!this.state.isValidate) {
      return (
        <div className="app-container">
          <form className="message-list" onSubmit={this.submitForm}>
            <h1>Введите свои данные, агент</h1>
            <p className="field">
              <label className="field__label" htmlFor="firstName">
                <span className="field-label">Имя</span>
              </label>
              <input
                className="field__input field-input t-input-firstname"
                onChange={this.changeInputText}
                type="text"
                name="firstName"
                value={this.state.firstName}
              />
              <span className="field__error field-error t-error-firstname">
                {this.state.errors.firstName}
              </span>
            </p>
            <p className="field">
              <label className="field__label" htmlFor="lastName">
                <span className="field-label">Фамилия</span>
              </label>
              <input
                className="field__input field-input t-input-lastname"
                onChange={this.changeInputText}
                type="text"
                name="lastName"
                value={this.state.lastName}
              />
              <span className="field__error field-error t-error-lastname">
                {this.state.errors.lastName}
              </span>
            </p>
            <p className="field">
              <label className="field__label" htmlFor="password">
                <span className="field-label">Пароль</span>
              </label>
              <input
                className="field__input field-input t-input-password"
                onChange={this.changeInputText}
                type="text"
                name="password"
                value={this.state.password}
              />
              <span className="field__error field-error t-error-password">
                {this.state.errors.password}
              </span>
            </p>

            <div className="form__buttons">
              <input
                type="submit"
                className="button t-submit"
                value="Проверить"
              />
            </div>
          </form>
        </div>
      );
    } else {
      return (
        <div className="app-container">
          <img src={bond} alt="bond approve" className="t-bond-image" />
        </div>
      );
    }
  }
}

export default Form;

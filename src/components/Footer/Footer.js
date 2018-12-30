import React, { PureComponent } from 'react';
import { AuthProvider, MyContext } from '../../contexts/Auth';
import SectionTitle from '../SectionTitle';
import './Footer.css';

class Footer extends PureComponent {
  static contextType = MyContext;

  render() {
    const context = this.context;

    return (
      <footer className="footer">
        <SectionTitle className="header__title">Footer</SectionTitle>
        <p className="footer-message t-footer">
          {context.isAuthorized
            ? `Вы вошли как ${context.email}`
            : `Вы гость в этой системе`}
        </p>
      </footer>
    );
  }
}

export default Footer;

import React, { PureComponent } from 'react';
import { AuthProvider, MyContext } from '../../contexts/Auth';
import Button from '../Button';
import SectionTitle from '../SectionTitle';
import './Header.css';

class Header extends PureComponent {
  static contextType = MyContext;

  render() {
    const context = this.context;

    return (
      <header className="header">
        <SectionTitle className="header__title">Header</SectionTitle>
        <div className="header__content">
          {context.isAuthorized === true && (
            <div class="header-menu">
              <p class="header-menu__email header-email t-header-email">
                {context.email}
              </p>
              <Button
                class="header-menu__button t-logout"
                onClick={context.logout}
              >
                Выйти
              </Button>
            </div>
          )}
        </div>
      </header>
    );
  }
}

export default Header;

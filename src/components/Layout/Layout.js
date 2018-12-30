import React, { Fragment, PureComponent } from 'react';
import './Layout.css';
import SectionTitle from '../SectionTitle';
import Footer from '../Footer';
import Header from '../Header';

class Layout extends PureComponent {
  render() {
    const { children } = this.props;

    return (
      <React.Fragment>
        <Header />
        <main className="main main--with-header main--with-footer">
          <SectionTitle className="main__title">Main</SectionTitle>
          {children}
        </main>
        <Footer className="footer" />
      </React.Fragment>
    );
  }
}

export default Layout;

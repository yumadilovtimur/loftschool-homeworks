import React from 'react';
import Home from '../Home';
import InboxList from '../InboxList';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import OutboxList from '../OutboxList/OutboxList';

class AppRouter extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <nav className="nav">
            <ul className="navList">
              <li className="navElement">
                <Link className="link" aria-current="page" to="/app">
                  Home
                </Link>
              </li>
              <li className="navElement">
                <Link className="link" aria-current="page" to="/app/inbox">
                  Inbox
                </Link>
              </li>
              <li className="navElement">
                <Link className="link" aria-current="page" to="/app/outbox">
                  Outbox
                </Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/app" component={Home} />
            <Route path="/app/inbox" component={InboxList} />
            <Route path="/app/outbox" component={OutboxList} />
            <Redirect to="/app" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default AppRouter;

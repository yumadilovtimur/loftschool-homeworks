import React from 'react';
import { withData } from '../../context/Data';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import InboxMail from '../InboxMail';

class InboxList extends React.Component {
  render() {
    const inboxData = this.props.data.inbox;
    return (
      <div className="content">
        <h3 className="title">Inbox</h3>
        <div className="container">
          <Switch>
            <Route
              exact
              path={`${this.props.match.path}/`}
              render={props =>
                inboxData.map(item => (
                  <Link
                    className="link"
                    key={item.id}
                    to={`${this.props.match.url}/${item.id}`}
                  >
                    {`${item.body.substring(0, 50)}...`}
                  </Link>
                ))
              }
            />
            <Route
              path={`${this.props.match.path}/:id`}
              component={InboxMail}
            />
            <Redirect to="/app/inbox" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default withData(InboxList);

import React from 'react';
import { withData } from '../../context/Data';
import { Route, Link, Redirect } from 'react-router-dom';
import OutboxMail from '../OutboxMail';

class OutboxList extends React.Component {
  render() {
    const outboxData = this.props.data.outbox;
    return (
      <div className="content">
        <h3 className="title">Outbox</h3>
        <div className="container">
          <Route
            exact
            path={`${this.props.match.path}/`}
            render={props =>
              outboxData.map(item => (
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
          <Route path={`${this.props.match.path}/:id`} component={OutboxMail} />
          <Redirect to="/app/outbox" />
        </div>
      </div>
    );
  }
}

export default withData(OutboxList);

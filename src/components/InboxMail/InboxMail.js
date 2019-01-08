import React, { PureComponent } from 'react';
import { withData } from '../../context/Data';
import { Redirect } from 'react-router-dom';

class InboxMail extends PureComponent {
  render() {
    try {
      const {
        match: {
          params: { id }
        },
        data
      } = this.props;
      const mail = data.inbox.find(mail => mail.id === id);

      return (
        <React.Fragment>
          <p className="t-mail-from">
            From: <b>{mail.from}</b>
          </p>
          <p className="t-mail-body">{mail.body}</p>
        </React.Fragment>
      );
    } catch (err) {
      return <Redirect to="/app/inbox" />;
    }
  }
}

export default withData(InboxMail);

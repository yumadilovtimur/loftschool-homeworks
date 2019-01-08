import React, { PureComponent } from 'react';
import { withData } from '../../context/Data';
import { Redirect } from 'react-router-dom';

class OutboxMail extends PureComponent {
  render() {
    try {
      const {
        match: {
          params: { id }
        },
        data
      } = this.props;
      const mail = data.outbox.find(mail => mail.id === id);
      console.log(mail);

      return (
        <React.Fragment>
          <p className="t-mail-from">
            To: <b>{mail.to}</b>
          </p>
          <p className="t-mail-body">{mail.body}</p>
        </React.Fragment>
      );
    } catch (err) {
      return <Redirect to="/app/outbox" />;
    }
  }
}

export default withData(OutboxMail);

import React from 'react';
import { withData } from '../../context/Data';
import { Route } from 'react-router-dom';
import './MailList.css';

class MailList extends React.Component {
  render() {
    return (
      <div className="content">
        <Route exact path="/app/inbox" component={InboxList} />
        <Route exact path="/app/outbox" component={Topics} />
      </div>
    );
  }
}

export default withData(InboxList);

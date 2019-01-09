import React from 'react';
import './Home.css';

class Home extends React.Component {
  render() {
    return (
      <div className="content">
        <h3 className="title">Home</h3>
        <div className="container">
          <p className="t-greeting">Приветствуем в почтовом клиенте!</p>
        </div>
      </div>
    );
  }
}

export default Home;

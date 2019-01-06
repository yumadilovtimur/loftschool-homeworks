import React, { PureComponent } from 'react';
import Card from '../Card';
import './Todo.css';
import withLocalstorage from '../../HOCs/withLocalstorage';

class Todo extends PureComponent {
  state = {
    inputValue: ''
  };

  input = React.createRef();

  getId = () => {
    const { savedData } = this.props;
    const largest = savedData.reduce((acc, el) => Math.max(acc, el.id), 0);
    return largest + 1;
  };

  handleChange = event => {
    this.setState({
      inputValue: event.target.value
    });
  };

  createNewRecordByEnter = event => {
    if (event.key === 'Enter') {
      this.createNewRecord();
    }
  };

  toggleRecordComplete = event => {
    const { savedData, saveData } = this.props;
    const newSavedData = savedData.map(item => {
      if (item.id === +event.target.id) {
        return { ...item, isComplete: !item.isComplete };
      } else {
        return { ...item };
      }
    });

    saveData(newSavedData);
  };

  createNewRecord = () => {
    const { savedData, saveData } = this.props;
    const { inputValue } = this.state;

    if (inputValue !== '') {
      const id = this.getId();
      const newSavedData = [
        { id: id, text: inputValue, isComplete: false },
        ...savedData
      ];
      saveData(newSavedData);
      this.setState({ inputValue: '' });
      this.input.current.focus();
    }
  };

  renderEmptyRecord = () => {
    const { inputValue } = this.state;

    return (
      <div className="todo-item todo-item-new">
        <input
          className="todo-input t-input"
          placeholder="Введите задачу"
          value={inputValue}
          onChange={this.handleChange}
          onKeyPress={this.createNewRecordByEnter}
          ref={this.input}
        />
        <span className="plus t-plus" onClick={this.createNewRecord}>
          +
        </span>
      </div>
    );
  };

  renderRecord = item => {
    const { id, text, isComplete } = item;
    return (
      <div className="todo-item t-todo" key={id}>
        <p className="todo-item__text">{text}</p>
        <span
          className="todo-item__flag t-todo-complete-flag"
          onClick={this.toggleRecordComplete}
          id={id}
        >
          {isComplete ? '[x]' : '[]'}
        </span>
      </div>
    );
  };

  render() {
    const { savedData } = this.props;

    return (
      <Card title="Список дел">
        <div className="todo t-todo-list">
          {this.renderEmptyRecord()}
          {savedData.map(this.renderRecord)}
        </div>
      </Card>
    );
  }
}

export default withLocalstorage('todo-app', [])(Todo);

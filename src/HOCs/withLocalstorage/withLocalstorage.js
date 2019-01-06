import React, { Component } from 'react';
import { load, save } from '../../localstorage';

const withLocalstorage = (localStorageKey, initData) => WrappedComponent => {
  return class extends Component {
    savedData = () => {
      return load(localStorageKey) || initData;
    };

    saveData = data => {
      save(localStorageKey, data);
      this.forceUpdate();
    };

    render() {
      return (
        <WrappedComponent
          {...this.props}
          savedData={this.savedData()}
          saveData={this.saveData}
        />
      );
    }
  };
};

export default withLocalstorage;

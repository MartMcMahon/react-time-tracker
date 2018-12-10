import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.scss';

import Controller from './controller';
import Schedule from './schedule/schedule';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Controller />
        <Schedule />
      </div>
    );
  }
}

export default App;

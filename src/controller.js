import React from 'react';
import { observable } from 'mobx';

// import { store } from './store';
// import { provide, subscribe } from 'alfa';

class testClass {
  constructor() {
    // this.x = 10;
    // console.log(this.x);
  }
}

export default class Controller extends React.Component {
  constructor(props) {
    super(props);
    @observable this.mode = 'normal';
  }

  handleKeyDown = (e) => {
    switch (e.key) {
      case 'a':
      case 'i':
        console.log('insert mode');
        // store.setTest(69);
        this.mode = 'insert';
        break;
      case 'g':
        console.log('g');
        // console.log('testVal', store.getTest());
        break;
      case 't':
        console.log('t');
        // store.setTest(20);
      default:
        console.log('* clears throat *');
        console.log(e.key);
    }

    // store.setTest(69);
  }

  componentDidMount() {
    console.log('mounted');
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    console.log('unmounting');
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    return null;
  }
}

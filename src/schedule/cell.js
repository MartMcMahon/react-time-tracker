import React from 'react';

import { store } from '../store';

export default class Cell extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setInterval(() => {
      const v = store.getTest();
      console.log('cell - testVal', v);
    }, 2000);
  }

  render() {
    return <div className="cell">
      { this.props.d }
    </div>;
  }
}


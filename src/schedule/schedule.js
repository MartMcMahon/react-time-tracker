import React from 'react';
import { subscribe } from 'alfa';

import Cell from './cell';

export const DAYS = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri'];

class Schedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cells: ['ok', 'cool', 'party']
    }
  }

  componentDidMount() {
    setInterval(() => {
      console.log('testVal - sched', this.props.testVal);
    }, 1500);
  }

  render() {
    return <div className="shedule-container">
      <div className="schedule-row week">
        {DAYS.map( day => {
          return <Cell
            d={day}
            key={day}
          >
            </Cell>;
        }) }
      </div>
    </div>;
  }
}

export default subscribe(Schedule, ['testVal']);

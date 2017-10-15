import _ from 'lodash';
import React, { Component } from 'react';
import './style.css';

class ShapeItem extends Component {
  render() {
    const { shapeName, stopTimes } = this.props;
    const departureTimes = _.reduce(stopTimes,
      (acc, value) => acc + " " + value.departure_time,
    '');
    return (
      <div>
        {`${shapeName} ${departureTimes}`}
      </div>
    );
  }
}


export default ShapeItem;

import _ from 'lodash';
import React, { Component } from 'react';
import ShapeItem from '../ShapeItem';
import './style.css';

class RouteItem extends Component {
  render() {
    const { route } = this.props;
    const shapes = _.groupBy(route.stop_times, stop_time => stop_time.shape);
    return (
      <div>
        <p>{route.name}</p>
        {_.map(shapes, (stopTimes, key) =>
          <ShapeItem key={key} shapeName={key} stopTimes={stopTimes} />
        )}
      </div>
    );
  }
}


export default RouteItem;

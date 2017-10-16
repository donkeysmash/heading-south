import _ from 'lodash';
import React from 'react';
import './style.css';

const extractLineNumberAndName = shapeName => {
  const [ lineNumber, ...nameArr ] = shapeName.split(' ');
  return {
    lineNumber,
    lineName: nameArr.join(' ')
  };
}

const ShapeItem = ({ shapeName, stopTimes }) => {
  const lineInfo = extractLineNumberAndName(shapeName);
  return (
    <div className="shape-item">
      <div className="shape-name">
        <span className="line-number">{lineInfo.lineNumber}</span>
        <span className="line-name">{lineInfo.lineName}</span>
      </div>
      <div className="departure-times">
        {_.map(stopTimes, (departureTime, key) => {
          return (<span className="departure-time" key={key}>{departureTime.departure_time}</span>);
        })}
      </div>
    </div>
  );
}

export default ShapeItem;

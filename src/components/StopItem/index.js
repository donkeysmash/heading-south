import React from 'react';
import RouteItem from '../RouteItem';
import './style.css';

const StopItem = ({name, routes}) =>  (
  <div className="stop-item">
    <p>Stop name: <span className="stop-name">{name}</span></p>
    {routes.map((route, key) => <RouteItem key={key} route={route} />)}
  </div>
);

export default StopItem;

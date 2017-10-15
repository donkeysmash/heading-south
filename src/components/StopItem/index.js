import React from 'react';
import RouteItem from '../RouteItem';
import './style.css';

const StopItem = ({name, routes}) =>  (
  <div>
    <p>{'stop name : ' + name}</p>
    {routes.map((route, key) => <RouteItem key={key} route={route} />)}
  </div>
);

export default StopItem;

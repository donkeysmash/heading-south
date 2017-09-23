import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './containers/Home'
import StationInfo from './containers/StationInfoContainer'

export default (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/:name" component={StationInfo} />
    </div>
  </BrowserRouter>
);

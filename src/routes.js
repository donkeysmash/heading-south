import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './containers/Home';
import StationInfo from './containers/StationInfoContainer';
import Navigation from './containers/Navigation';

export default (
  <BrowserRouter>
    <div>
      <Navigation />
      <Route exact path="/" component={Home} />
      <Route path="/:name" component={StationInfo} />
    </div>
  </BrowserRouter>
);

import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './containers/Home'
import TrainInfo from './containers/TrainInfoContainer'

export default (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/:name" component={TrainInfo} />
    </div>
  </BrowserRouter>
);

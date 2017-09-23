import { Provider } from 'react-redux';
import React, { Component } from 'react';
import routes from './routes';
import store from './redux/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {routes}
      </Provider>
    );
  }
}

export default App;

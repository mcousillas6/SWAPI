import React, { Component } from 'react';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import reducer from './Reducer';

import People from '../people';
import Menu from '../menu';

const store = createStore(
    (() => null),
    applyMiddleware(thunk)
);

const Navigator = StackNavigator({
  Menu: {
    screen: Menu
  },
  People: {
    screen: People
  }
});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    )
  }
}

export default App;

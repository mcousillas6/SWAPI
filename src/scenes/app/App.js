import React, { Component } from 'react';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import reducer from './Reducer';

import { people } from '../people';

const store = createStore(
    reducer,
    applyMiddleware(thunk)
);

const Navigator = StackNavigator({
  People: {
    screen: people,
    navigationOptions: ({navigation}) => ({
      title: 'People',
      headerStyle: {
        backgroundColor: 'black'
      },
      headerTitleStyle: {
        color: 'yellow',
        fontSize: 22
      },
      headerTintColor: {
        color: 'white'
      }
    })
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

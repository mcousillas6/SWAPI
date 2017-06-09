/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import {
   AppRegistry
 } from 'react-native';

 import App from './src/scenes/app';

 export default class StarWars extends Component {
   render() {
     return <App />;
   }
 }

 AppRegistry.registerComponent('StarWars', () => StarWars);

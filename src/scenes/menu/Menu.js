import React, { Component } from 'react';
import {
  Text,
  TouchableHighlight,
  ScrollView,
} from 'react-native';

import styles from './Menu.styles';
import MenuButton from './MenuButton';

const PeopleButton = MenuButton("People").build();
const PlanetsButton = MenuButton("Planets").build();
const SpeciesButton = MenuButton("Species").build();

class Menu extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null,
  })

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>SWapp</Text>
        <PeopleButton
          onPress={ () => navigate('People') }
        />
        <PlanetsButton
          onPress={ () => navigate('People') }
        />
        <SpeciesButton
          onPress={ () => navigate('People') }
        />
      </ScrollView>
    );
  }
}

export default Menu;

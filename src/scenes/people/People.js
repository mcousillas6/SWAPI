import React, { Component } from 'react';
import { Text, ListView, View } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';

import styles from './People.styles';

class People extends Component {
  renderHeader(row) {
    return (
      <View style={styles.rowTitle}>
        <Text style={styles.rowTitleText}>{row.name}</Text>
      </View>
    );
  }

  renderContent(row) {
    return (
      <View style={styles.rowContent}>
        <Text style={styles.rowContentText}>Gender: {row.gender}</Text>
        <Text style={styles.rowContentText}>Height: {row.height} cm</Text>
        <Text style={styles.rowContentText}>Birth year: {row.birth_year}</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.background}>
        <Accordion
          sections={this.props.people}
          renderHeader={this.renderHeader}
          renderContent={this.renderContent}
        />
      </View>
    );
  }

}

export default People;

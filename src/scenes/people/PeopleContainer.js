import React, { Component } from 'react';
import { connect } from 'react-redux';

import People from './People';
import { getPeople } from './Actions';

class PeopleContainer extends Component {
  componentDidMount() {
    this.props.getPeople();
  }

  render() {
    return <People people={this.props.people} />;
  }
}

const mapStateToProps = (state) => {
  return {
    people: state.entities.people
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPeople: () => dispatch(getPeople())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PeopleContainer);

import status from '../../helpers/Status';
import types from './ActionTypes';

const updateGetPeopleStatus = (status, error='') => {
  return {
    type: types.getPeopleStatusUpdate,
    status,
    error
  }
}

const peopleRecieved = (people) => {
  return {
    type: types.peopleRecieved,
    people
  }
}

export const getPeople = () => {
  return (dispatch) => {
    dispatch(updateGetPeopleStatus(status.loading));
    fetch('http://swapi.co/api/people')
    .then((response) => response.json())
    .then((responseJson) => {
      dispatch(updateGetPeopleStatus(status.success));
      dispatch(peopleRecieved(responseJson.results));
    })
    .catch((error) => {
      dispatch(updateGetPeopleStatus(status.error, error.message));
      console.error(error);
    });
  }
}

import types from './ActionTypes';

export default (state = [], action) => {
  switch(action.type) {
    case types.peopleRecieved:
      return action.people
    default:
      return state
  }
}

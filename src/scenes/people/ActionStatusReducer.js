import types from './ActionTypes';
import status from '../../helpers/Status';

const initialState = {
  status: status.notStarted,
  error: ''
}

export default (state = initialState, action) => {
  switch(action.type) {
    case types.getPeopleStatusUpdate:
      return {
        status: action.status,
        error: action.error
      }
    default:
      return state
  }
}

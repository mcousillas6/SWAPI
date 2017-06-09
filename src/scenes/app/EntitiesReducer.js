import { combineReducers } from 'redux';
import { reducer as PeopleReducer } from '../people';

export default combineReducers({
  people: PeopleReducer
});

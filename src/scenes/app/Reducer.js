import { combineReducers } from 'redux';
import actionStatesReducer from './ActionStatesReducer';
import entitiesReducer from './EntitiesReducer';

export default combineReducers({
  entities: entitiesReducer,
  actions: actionStatesReducer
});

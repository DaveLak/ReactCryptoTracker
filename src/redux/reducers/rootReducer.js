import { combineReducers } from 'redux';
import data from './data';
import displayOptions from './displayOptions';

const rootReducer = combineReducers({
  displayOptions,
  data
});

export default rootReducer;

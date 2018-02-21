import { combineReducers } from "redux";
import data from "./data";
import displayOptions from "./displayOptions";

// Merge all our reducers into one
const rootReducer = combineReducers({
  displayOptions,
  data
});

export default rootReducer;

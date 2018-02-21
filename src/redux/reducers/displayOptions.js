import initialState from "../store/initialState";
import {
  UPDATE_DISPLAY_CURRENCY,
  UPDATE_DISPLAY_COUNT
} from "../actions/displayOptions";

/* Display options reducer */
const displayOptions = (state = initialState.displayOptions, action) => {
  switch (action.type) {
    case UPDATE_DISPLAY_CURRENCY:
      return {
        ...state,
        currency: action.payload
      };
    case UPDATE_DISPLAY_COUNT:
      return {
        ...state,
        count: action.payload
      };
    default:
      return state;
  }
};

export default displayOptions;

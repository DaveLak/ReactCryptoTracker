import { combineReducers } from 'redux';
import initialState from './initialState';
import {
  UPDATE_DISPLAY_COUNT,
  UPDATE_DISPLAY_CURRENCY,
  RECEIVE_TOP_COINS_LIST,
  REQUEST_TOP_COINS_LIST,
  SET_COIN_DATA,
  GET_COIN_DATA,
} from './actions';

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

/* Data reducer. */
const data = (state = initialState.data, action) => {
  switch (action.type) {
    case GET_COIN_DATA:
    case REQUEST_TOP_COINS_LIST:
      return {
        ...state,
        isFetching: true
      };
    case RECEIVE_TOP_COINS_LIST:
      return {
        ...state,
        isFetching: false,
        topCoins: action.payload
      };
    case SET_COIN_DATA:
      return {
        ...state,
        isFetching: false,
        coinData: action.payload
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  displayOptions,
  data
});

export default rootReducer;
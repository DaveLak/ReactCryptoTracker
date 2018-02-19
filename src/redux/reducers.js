import { combineReducers } from 'redux';
import initialState from './store/initialState';
import {
  UPDATE_DISPLAY_COUNT,
  UPDATE_DISPLAY_CURRENCY,
  RECEIVE_TOP_COINS_LIST,
  REQUEST_INITIAL_DATA,
  RECEIVE_INITIAL_DATA,
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
    case REQUEST_INITIAL_DATA:
      return {
        ...state,
        isReady: false
      };
    case RECEIVE_INITIAL_DATA:
      return {
        ...state,
        isReady: true,
        topCoins: action.payload.topCoins,
        coinData: action.payload.coinData,
        baseImgUrl: action.payload.baseImgUrl,
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
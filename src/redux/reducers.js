import { combineReducers } from 'redux';
import initialState from './store/initialState';
import {
  UPDATE_DISPLAY_COUNT,
  UPDATE_DISPLAY_CURRENCY,
  RECEIVE_TOP_COINS_LIST,
  REQUEST_TOP_COINS_LIST,
  RECEIVE_COIN_DATA,
  REQUEST_COIN_DATA,
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
    case REQUEST_COIN_DATA:
      return {
        ...state,
        hasCoinData: false
      };
    case REQUEST_TOP_COINS_LIST:
      return {
        ...state,
        hasCoinList: false
      };
    case RECEIVE_TOP_COINS_LIST:
      return {
        ...state,
        hasCoinList: true,
        topCoins: action.payload
      };
    case RECEIVE_COIN_DATA:
      return {
        ...state,
        hasCoinData: true,
        coinData: action.payload,
        baseImgUrl: action.baseImgUrl
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
import { combineReducers } from 'redux';
import initialState from './store/initialState';
import {
  UPDATE_DISPLAY_COUNT,
  UPDATE_DISPLAY_CURRENCY,
  REQUEST_INITIAL_DATA,
  RECEIVE_INITIAL_DATA,
  SET_VISIBLE_COINS,
  RECEIVE_COIN_PRICE,
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
    case SET_VISIBLE_COINS:
      return {
        ...state,
        visibleCoins: setVisibleCoins(state, action.count)
      };
    case RECEIVE_COIN_PRICE:
      return {
        ...state,
        visibleCoins: setCoinPrice(state.visibleCoins, action.payload)
      };
    default:
      return state;
  }
};

const setCoinPrice = (visibleCoins, payload) => {

  let prop = visibleCoins[payload.coinSymbol];
  prop.price = payload.price;

  return {
    ...visibleCoins,
    [payload.coinSymbol]: prop
  }
};

const setVisibleCoins = (state, count) => {

  let visibleCoins = {};

  state.topCoins
    .slice(0, Number(count))
    .forEach(coin => {
      return visibleCoins[coin.symbol] = {
        coinSymbol: coin.symbol,
        name: coin.name,
        imgSrc: buildImgSrc(coin.symbol, state.baseImgUrl, state.coinData),
        price: 'loading...'
      };
    });

  return visibleCoins;
};

const buildImgSrc = (coinSymbol, baseUrl, data) => {
  // Check if ticker symbol exits in data
  if (coinSymbol in data) {
    // If it does, then build the URL
    return baseUrl + data[coinSymbol].ImageUrl;
  }
  // Else add a placeholder
  return 'http://fillmurray.com/50/50';
};

const rootReducer = combineReducers({
  displayOptions,
  data
});

export default rootReducer;
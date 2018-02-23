import initialState from "../store/initialState";
import {
  REQUEST_INITIAL_DATA,
  RECEIVE_INITIAL_DATA,
  REQUEST_COIN_PRICE,
  RECEIVE_COIN_PRICE,
  SET_VISIBLE_COINS
} from "../actions/data";

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
        baseImgUrl: action.payload.baseImgUrl
      };
    case SET_VISIBLE_COINS:
      return {
        ...state,
        visibleCoins: setVisibleCoins(state, action.count)
      };
    case REQUEST_COIN_PRICE:
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
  };
};

const setVisibleCoins = (state, count) => {
  let visibleCoins = {};

  state.topCoins.slice(0, Number(count)).forEach(coin => {
    return (visibleCoins[coin.symbol] = {
      coinSymbol: coin.symbol,
      name: coin.name,
      imgSrc: buildImgSrc(coin.symbol, state.baseImgUrl, state.coinData)
    });
  });

  return visibleCoins;
};

const buildImgSrc = (coinSymbol, baseUrl, data) => {
  // Check if ticker symbol exits in data
  if (coinSymbol in data) {
    // If it does, then build the URL
    return baseUrl + data[coinSymbol].ImageUrl;
  }
  // Else it's an empty string
  return "";
};

export default data;

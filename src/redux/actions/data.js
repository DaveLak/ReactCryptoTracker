import axios from 'axios/index';
import { COINMARKETCAP_API_URI, CRYPTOCOMPARE_API_URI } from '../../utils/constants';

/************************
 * Initial Data Actions *
 ************************/
export const REQUEST_INITIAL_DATA = 'REQUEST_INITIAL_DATA';

export function requestInitialData() {
  return {
    type: REQUEST_INITIAL_DATA
  };
}

export const RECEIVE_INITIAL_DATA = 'RECEIVE_INITIAL_DATA';

export function receiveCoinData(topCoins, coinData, baseImgUrl) {
  return {
    type: RECEIVE_INITIAL_DATA,
    payload: {
      topCoins,
      coinData,
      baseImgUrl
    }
  };
}

// CryptoCompare data populates the coinData state field and baseImgUrl
function getCryptoCompareData() {
  return axios.get(CRYPTOCOMPARE_API_URI + '/all/coinlist');
}

// CoinMarketCap gives us a list of coins ordered by market capitalization
function getMarketCapData(numberToShow) {
  return axios.get(COINMARKETCAP_API_URI + `?limit=${numberToShow}`);
}

export function fetchCoinData(numberToShow) {
  return function (dispatch) {
    // Tell store we are starting a request for initial data
    dispatch(requestInitialData());

    return axios.all([getMarketCapData(numberToShow), getCryptoCompareData()])
      .then(
        axios.spread((marketCap, cryptoCompare) => {
          dispatch(receiveCoinData(
            marketCap.data,
            cryptoCompare.data.Data,
            cryptoCompare.data.BaseImageUrl
            )
          );
        }),
        error => console.log('An error occurred fetching initial data.', error)
      );
  };
}

/***********************
 * Coin Price Actions  *
 ***********************/
export const REQUEST_COIN_PRICE = 'REQUEST_COIN_PRICE';

export function requestCoinPrice(coinSymbol) {
  return {
    type: REQUEST_COIN_PRICE,
    payload: {
      coinSymbol,
      price: 'Loading...'
    }
  };
}

export const RECEIVE_COIN_PRICE = 'RECEIVE_COIN_PRICE';

export function receivePrice(coinSymbol, price) {
  return {
    type: RECEIVE_COIN_PRICE,
    payload: {
      coinSymbol,
      price
    }
  };
}

export function fetchCoinPrice(coinSymbol, displayCurrency) {
  return function (dispatch) {

    dispatch(requestCoinPrice(coinSymbol));

    return axios.get(CRYPTOCOMPARE_API_URI + `/price?fsym=${coinSymbol}&tsyms=${displayCurrency}`)
      .then(
        response => dispatch(receivePrice(coinSymbol, response.data[displayCurrency])),
        error => console.log('An error fetching price.', error)
      );
  };
}

/**************************
 * Visible Coins Actions  *
 **************************/
export const SET_VISIBLE_COINS = 'SET_VISIBLE_COINS';

export function setVisibleCoins(count) {
  return {
    type: SET_VISIBLE_COINS,
    count
  };
}

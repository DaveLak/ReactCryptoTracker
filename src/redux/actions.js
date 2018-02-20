import { COINMARKETCAP_API_URI, CRYPTOCOMPARE_API_URI } from '../utils/constants';
import axios from 'axios';

export const UPDATE_DISPLAY_CURRENCY = 'UPDATE_DISPLAY_CURRENCY';
export const UPDATE_DISPLAY_COUNT = 'UPDATE_DISPLAY_COUNT';

// Tells reducer we are requesting initial data. We're not ready to display at this point
export const REQUEST_INITIAL_DATA = 'REQUEST_INITIAL_DATA';

export function requestInitialData() {
  return {
    type: REQUEST_INITIAL_DATA
  };
}

// Tells reducer request finished successfully. Minimum data required is here
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

// Request initial data to populate coinData
function getCryptoCompareData() {
  return axios.get(CRYPTOCOMPARE_API_URI + '/all/coinlist');
}

// Request initial data to populate topCoins
function getMarketCapData() {
  return axios.get(COINMARKETCAP_API_URI + '?limit=20');
}

export function fetchCoinData() {
  return function (dispatch) {
    // Tell store we are starting a request
    // TODO: Load spinner
    dispatch(requestInitialData());

    return axios.all([getMarketCapData(), getCryptoCompareData()])
      .then(
        axios.spread((marketCap, cryptoCompare) => {
          dispatch(receiveCoinData(
            marketCap.data,
            cryptoCompare.data.Data,
            cryptoCompare.data.BaseImageUrl
            )
          );
        }),
        error => console.log('An error occurred.', error)
      );
  };
}

// Set up visible coin state
export const SET_VISIBLE_COINS = 'SET_VISIBLE_COINS';

export function setVisibleCoins(count) {
  return {
    type: SET_VISIBLE_COINS,
    count
  };
}

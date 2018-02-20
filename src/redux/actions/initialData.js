import axios from 'axios/index';
import {
  COINMARKETCAP_API_URI,
  CRYPTOCOMPARE_API_URI
} from '../../utils/constants';

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

// CryptoCompareData populates the coinData state field and baseImgUrl
function getCryptoCompareData() {
  return axios.get(CRYPTOCOMPARE_API_URI + '/all/coinlist');
}

// CoinMarketCap gives us a list of coins ordered by market capitalization
function getMarketCapData(numberToShow) {
  return axios.get(COINMARKETCAP_API_URI + `?limit=${numberToShow}`);
}

export function fetchCoinData(numberToShow) {
  return function (dispatch) {
    // Tell store we are starting a request
    // TODO: Load spinner
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
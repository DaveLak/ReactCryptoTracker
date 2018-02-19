import { COINMARKETCAP_API_URI, CRYPTOCOMPARE_API_URI } from '../utils/constants';

export const UPDATE_DISPLAY_CURRENCY = 'UPDATE_DISPLAY_CURRENCY';
export const UPDATE_DISPLAY_COUNT = 'UPDATE_DISPLAY_COUNT';

// Action fired when we receive coin list
export const RECEIVE_TOP_COINS_LIST = 'RECEIVE_TOP_COINS_LIST';

// Send coin list to reducer as `payload`
export function receiveTopCoinsList(coinList) {
  return {
    type: RECEIVE_TOP_COINS_LIST,
    payload: coinList
  };
}

// Action for requesting list of coins with highest market cap
export const REQUEST_TOP_COINS_LIST = 'REQUEST_TOP_COINS_LIST';

export function requestTopCoinsList() {
  return {
    type: REQUEST_TOP_COINS_LIST
  };
}

// Fetch initial data to populate market capitalization
export function fetchTopCoinList() {
  return function (dispatch) {
    // Tell store we are starting a request
    // TODO: Load spinner
    dispatch(requestTopCoinsList());

    // TODO: Make amount fetched of coins fetched configurable by user
    return fetch(COINMARKETCAP_API_URI + '?limit=20')
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(
        // Dispatch action to set list in store
        data => dispatch(receiveTopCoinsList(data))
      );
  };
}

// Action for requesting coin data
export const REQUEST_COIN_DATA = 'REQUEST_COIN_DATA';

export function requestCoinData() {
  return {
    type: REQUEST_COIN_DATA
  };
}

// Action fired when we receive coin data
export const RECEIVE_COIN_DATA = 'RECEIVE_COIN_DATA';

export function receiveCoinData(data, baseImgUrl) {
  return {
    type: RECEIVE_COIN_DATA,
    payload: data,
    baseImgUrl
  };
}

// Fetch coin data from CryptoCompare
export function fetchCoinData() {
  return function (dispatch) {

    dispatch(requestCoinData());

    return fetch(CRYPTOCOMPARE_API_URI + '/all/coinlist')
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(
        res => dispatch(receiveCoinData(res.Data, res.BaseImageUrl))
      );
  };

}
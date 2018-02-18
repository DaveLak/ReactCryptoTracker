import { COINMARKETCAP_API_URI, CRYPTOCOMPARE_API_URI } from '../utils/constants';

export const UPDATE_DISPLAY_CURRENCY = 'UPDATE_DISPLAY_CURRENCY';
export const UPDATE_DISPLAY_COUNT = 'UPDATE_DISPLAY_COUNT';
export const SET_COIN_DATA = 'SET_COIN_DATA';
export const GET_COIN_DATA = 'GET_COIN_DATA';


// Action fired when we receive coin list
export const RECEIVE_TOP_COINS_LIST = 'RECEIVE_TOP_COINS_LIST';
// Send coin list to reducer as `payload`
export function receiveTopCoinsList(coinData) {
  return {
    type: SET_COIN_DATA,
    payload: coinData
  };
}

// Action for requesting list of coins with highest market cap
export const REQUEST_TOP_COINS_LIST = 'REQUEST_TOP_COINS_LIST';
// Tell store we are starting a request
export function requestTopCoinsList() {
  return {
    type: REQUEST_TOP_COINS_LIST
  };
}

// Fetch initial data to populate market capitalization
export function fetchTopCoinList() {
  return function (dispatch) {
    // Tells state we are fetching
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

import axios from 'axios/index';
import { CRYPTOCOMPARE_API_URI } from '../../utils/constants';

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

    return axios.get(CRYPTOCOMPARE_API_URI + `/price?fsym=${coinSymbol}&tsyms=${displayCurrency}`)
      .then(
        response => dispatch(receivePrice(coinSymbol, response.data[displayCurrency])),
        error => console.log('An error fetching price.', error)
      );
  };
}
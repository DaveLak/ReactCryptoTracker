export const UPDATE_DISPLAY_COUNT = 'UPDATE_DISPLAY_COUNT';

export const UPDATE_DISPLAY_CURRENCY = 'UPDATE_DISPLAY_CURRENCY';

export function updateDisplayCurrency(currency) {
  return {
    type: UPDATE_DISPLAY_CURRENCY,
    payload: currency
  }
}
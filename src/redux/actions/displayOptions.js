export const UPDATE_DISPLAY_COUNT = "UPDATE_DISPLAY_COUNT";

export function updateDisplayCount(count) {
  return {
    type: UPDATE_DISPLAY_COUNT,
    payload: count
  };
}

export const UPDATE_DISPLAY_CURRENCY = "UPDATE_DISPLAY_CURRENCY";

export function updateDisplayCurrency(currency) {
  return {
    type: UPDATE_DISPLAY_CURRENCY,
    payload: currency
  };
}

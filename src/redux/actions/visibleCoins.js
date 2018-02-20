export const SET_VISIBLE_COINS = 'SET_VISIBLE_COINS';

export function setVisibleCoins(count) {
  return {
    type: SET_VISIBLE_COINS,
    count
  };
}
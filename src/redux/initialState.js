/* Initial state of the app */
const initialState = {
  displayOptions: {
    currency: 'USD',
    count: '10',
  },
  data: {
    isFetching: true,
    topCoins: [],
    coinData: [],
    baseImgUrl: '',
  }
};

export default initialState;
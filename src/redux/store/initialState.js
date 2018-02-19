/* Initial state of the app */
const initialState = {
  displayOptions: {
    currency: 'USD',
    count: '10',
  },
  data: {
    hasCoinList: false,
    hasCoinData: false,
    topCoins: [],
    coinData: [],
    baseImgUrl: '',
  }
};

export default initialState;
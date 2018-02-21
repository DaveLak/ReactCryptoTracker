/* Initial state of the app */
const initialState = {
  displayOptions: {
    currency: "USD",
    count: "10"
  },
  data: {
    isReady: false,
    topCoins: [],
    coinData: [],
    baseImgUrl: "",
    visibleCoins: {}
  }
};

export default initialState;

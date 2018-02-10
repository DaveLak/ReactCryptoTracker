import React from 'react';
import axios from 'axios/index';
import { COINMARKETCAP_API_URI, CRYPTOCOMPARE_API_URI } from '../../utils/constants';
import CoinList from '../presentational/CardList/CoinList';

class CoinListContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      coins: [],
      baseImgUrl: '',
      extraCoinData: []
    };
    this.getCryptoCompareData = this.getCryptoCompareData.bind(this);
    this.getMarketCapData = this.getMarketCapData.bind(this);
    this.getCoinData = this.getCoinData.bind(this);
  }

  // Set up request to receive our coin list
  getMarketCapData() {
    return axios.get(COINMARKETCAP_API_URI + '?limit=20');
  }

  // Set up request to receive additional data (only used for images right now)
  getCryptoCompareData() {
    return axios.get(CRYPTOCOMPARE_API_URI + '/all/coinlist');
  }

  // Runs both API calls concurrently and set state when promise resolves
  getCoinData() {
    axios.all([this.getMarketCapData(), this.getCryptoCompareData()])
      .then(axios.spread((marketCap, cryptoCompare) => {
        this.setState({
          coins: marketCap.data,
          baseImgUrl: cryptoCompare.data.BaseImageUrl,
          extraCoinData: cryptoCompare.data.Data
        });
      })).catch(err => {
      console.log(err);
    });
  }

  // Get data and set state
  componentDidMount() {
    this.getCoinData();
  }

  render() {
    return <CoinList {...this.state} />;
  }
}

export default CoinListContainer;
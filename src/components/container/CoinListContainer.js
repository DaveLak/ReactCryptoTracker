import React from 'react';
import axios from 'axios/index';
import { COINMARKETCAP_API_URI, CRYPTOCOMPARE_API_URI } from '../../utils/constants';
import CardList from '../presentational/CardList/CoinList';

class CoinListContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      coins: [],
      baseImgUrl: '',
      extraCoinData: []
    };
    this.getCryptoCompairData = this.getCryptoCompairData.bind(this);
    this.getMarketCapData = this.getMarketCapData.bind(this);
    this.getCoinData = this.getCoinData.bind(this);
  }

  // Set up request to receive our coin list
  getMarketCapData() {
    return axios.get(COINMARKETCAP_API_URI + '?limit=10');
  }

  // Set up request to receive additional data (only used for images right now)
  getCryptoCompairData() {
    return axios.get(CRYPTOCOMPARE_API_URI);
  }

  // Runs both API calls concurrently and set state when promise resolves
  getCoinData() {
    axios.all([this.getMarketCapData(), this.getCryptoCompairData()])
      .then(axios.spread((marketCap, cryptoCompair) => {
        this.setState({
          coins: marketCap.data,
          baseImgUrl: cryptoCompair.data.BaseImageUrl,
          extraCoinData: cryptoCompair.data.Data
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
    return <CardList {...this.state} />;
  }
}

export default CoinListContainer;
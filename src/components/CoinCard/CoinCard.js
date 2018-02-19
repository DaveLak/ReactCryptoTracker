import React from 'react';
import axios from 'axios';
import { CRYPTOCOMPARE_API_URI } from '../../utils/constants';
import Card from '../Card/Card';

class CoinCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      price: 'Loading...'
    };
  }

  componentDidMount() {
    axios.get(CRYPTOCOMPARE_API_URI + '/price?fsym=' + this.props.symbol + '&tsyms=USD')
      .then(response => {
        this.setState({
          price: response.data.USD
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({
          price: 'Temporarily Unavailable'
        });
      });
  }

  render() {
    return <Card {...this.props} price={this.state.price} />;
  }

}

export default CoinCard;
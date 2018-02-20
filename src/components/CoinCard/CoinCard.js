import React from 'react';
import Card from '../Card/Card';

class CoinCard extends React.Component {

  componentDidMount() {
    this.props.fetchCoinPrice(this.props.symbol)
  }

  render() {
    return <Card {...this.props}  />;
  }

}

export default CoinCard;
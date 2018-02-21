import React from 'react';
import Card from '../../presentation/Card/Card';

class CoinCard extends React.Component {

  componentDidMount() {
    const {fetchCoinPrice, symbol, displayCurrency} = this.props;
    fetchCoinPrice(symbol, displayCurrency);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.displayCurrency === nextProps.displayCurrency) {
      return;
    }

    const {fetchCoinPrice, symbol, displayCurrency} = nextProps;

    fetchCoinPrice(symbol, displayCurrency);
  }

  render() {
    const {displayCurrency} = this.props;
    return <Card {...this.props} displayCurrency={displayCurrency} />;
  }

}

export default CoinCard;
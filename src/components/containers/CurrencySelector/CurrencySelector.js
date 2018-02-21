import React from 'react';

class CurrencySelector extends React.Component {

  constructor(props) {
    super(props);
    this.handleCurrencyChange = this.handleCurrencyChange.bind(this);
  }

  handleCurrencyChange(event) {
    const {updateDisplayCurrency} = this.props;
    updateDisplayCurrency(event.target.value);
  }

  render() {
    const {displayCurrency} = this.props;
    return (
      <select value={displayCurrency} onChange={this.handleCurrencyChange}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="BTC">BTC</option>
        <option value="ETH">ETH</option>
      </select>
    );
  }
}

export default CurrencySelector;
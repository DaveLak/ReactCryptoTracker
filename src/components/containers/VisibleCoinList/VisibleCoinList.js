import React from "react";
import CoinList from "../../presentation/CoinList/CoinList";

class VisibleCoinList extends React.Component {
  componentWillMount() {
    const { setVisibleCoins, count } = this.props;
    setVisibleCoins(count);
  }

  render() {
    const { coins, displayCurrency } = this.props;
    return <CoinList coins={coins} displayCurrency={displayCurrency} />;
  }
}

export default VisibleCoinList;

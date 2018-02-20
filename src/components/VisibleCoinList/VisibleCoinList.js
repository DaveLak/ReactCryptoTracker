import React from 'react';
import CoinList from '../CoinList/CoinList';

class VisibleCoinList extends React.Component {

  componentWillMount() {
    const { setVisibleCoins , count } = this.props;
    setVisibleCoins(count);
  }

  render() {
    const {coins} = this.props;
    return (
      <CoinList coins={coins} />
    );
  }
}

export default VisibleCoinList;
import { connect } from 'react-redux';
import CoinList from './CoinList';

const mapStateToProps = (state, ownProps) => {
  return {
    coins: state.data.topCoins,
    baseImgUrl: state.data.baseImgUrl,
    extraCoinData: state.data.coinData
  };
};

export default connect(mapStateToProps)(CoinList)
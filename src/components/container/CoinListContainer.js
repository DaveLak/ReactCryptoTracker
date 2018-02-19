import { connect } from 'react-redux';
import CoinList from '../presentational/CoinList/CoinList';

const mapStateToProps = (state, ownProps) => {
  return {
    coins: state.data.topCoins,
    baseImgUrl: state.data.baseImgUrl,
    extraCoinData: state.data.coinData
  };
};

const CoinListContainer = connect(mapStateToProps)(CoinList);

export default CoinListContainer;
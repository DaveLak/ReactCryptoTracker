import { connect } from 'react-redux';
import CoinList from './CoinList';

const mapStateToProps = (state) => {
  return {
    coins: state.data.visibleCoins
  }
};

export default connect(mapStateToProps)(CoinList)
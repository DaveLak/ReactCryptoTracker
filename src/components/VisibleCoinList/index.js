import { connect } from 'react-redux';
import { setVisibleCoins } from '../../redux/actions';
import VisibleCoinList from './VisibleCoinList';

const mapStateToProps = state => {
  return {
    count: state.displayOptions.count,
    coins: state.data.visibleCoins
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setVisibleCoins: (coinSymbol) => {
      dispatch(setVisibleCoins(coinSymbol))
    }

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VisibleCoinList);
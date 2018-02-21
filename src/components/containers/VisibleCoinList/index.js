import { connect } from 'react-redux';
import { setVisibleCoins } from '../../../redux/actions/visibleCoins';
import VisibleCoinList from './VisibleCoinList';

const mapStateToProps = state => {
  return {
    count: state.displayOptions.count,
    displayCurrency: state.displayOptions.currency,
    coins: state.data.visibleCoins
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setVisibleCoins: (coinSymbol) => {
      dispatch(setVisibleCoins(coinSymbol));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VisibleCoinList);
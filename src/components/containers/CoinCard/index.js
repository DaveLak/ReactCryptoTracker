import { connect } from 'react-redux';
import { fetchCoinPrice } from '../../../redux/actions/coinPrice';
import CoinCard from './CoinCard';

const mapDispatchToProps = dispatch => {
  return {
    fetchCoinPrice: (coinSymbol, displayCurrency) => {
      dispatch(fetchCoinPrice(coinSymbol, displayCurrency));
    }
  };
};

export default connect(null, mapDispatchToProps)(CoinCard);
import { connect } from 'react-redux';
import { fetchCoinPrice } from '../../redux/actions';
import CoinCard from './CoinCard';

const mapDispatchToProps = dispatch => {
  return {
    fetchCoinPrice: (coinSymbol) => {
      dispatch(fetchCoinPrice(coinSymbol));
    }
  };
};

export default connect(null, mapDispatchToProps)(CoinCard)
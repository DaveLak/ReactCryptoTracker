import { connect } from 'react-redux';
import { fetchCoinPrice } from '../../../redux/actions/coinPrice';
import CoinCard from './CoinCard';

const mapStateToProps = state => {
  return {
    displayCurrency: state.displayOptions.currency
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCoinPrice: (coinSymbol, displayCurrency) => {
      dispatch(fetchCoinPrice(coinSymbol, displayCurrency));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoinCard)
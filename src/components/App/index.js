import { connect } from 'react-redux';
import { fetchCoinData } from '../../redux/actions/data';
import App from './App';

const mapStateToProps = state => {
  return {
    isReady: state.data.isReady,
    numberToShow: state.displayOptions.count
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCoinData: numberToShow => {
      dispatch(fetchCoinData(numberToShow));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
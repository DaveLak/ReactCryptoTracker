import { connect } from 'react-redux';
import { fetchCoinData } from '../../redux/actions';
import App from './App';

const mapStateToProps = (state) => {
  return {
    isReady: state.data.isReady
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
    fetchCoinData
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
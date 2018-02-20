import { connect } from 'react-redux';
import { setVisibleCoins } from '../../redux/actions';
import VisibleCoinList from './VisibleCoinList';

const mapStateToProps = state => {
  return {
    count: state.displayOptions.count
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setVisibleCoins: (count) => {
      dispatch(setVisibleCoins(count))
    }

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VisibleCoinList);
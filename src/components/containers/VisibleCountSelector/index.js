import { connect } from 'react-redux';
import { updateDisplayCount } from '../../../redux/actions/displayOptions';
import VisibleCountSelector from './VisibleCountSelector';

const mapStateToProps = state => {
  return {
    count: state.displayOptions.count
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateDisplayCount: (count) => {
      dispatch(updateDisplayCount(count));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VisibleCountSelector);
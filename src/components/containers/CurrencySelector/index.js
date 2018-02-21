import { connect } from "react-redux";
import { updateDisplayCurrency } from "../../../redux/actions/displayOptions";
import CurrencySelector from "./CurrencySelector";

const mapStateToProps = state => {
  return {
    displayCurrency: state.displayOptions.currency
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateDisplayCurrency: displayCurrency => {
      dispatch(updateDisplayCurrency(displayCurrency));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrencySelector);

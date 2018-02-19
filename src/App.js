import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTopCoinList, fetchCoinData } from './redux/actions';
import CardHolder from './components/presentational/CardHolder/CardHolder';
import CoinListContainer from './components/container/CoinListContainer';
import './App.css';

class App extends Component {

  componentDidMount() {
    const {dispatch, fetchTopCoinList, fetchCoinData} = this.props;
    dispatch(fetchTopCoinList());
    dispatch(fetchCoinData());
  }

  render() {
    return (
      <div className="App">
        <CardHolder>
          <CoinListContainer />
        </CardHolder>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isReady: state.data.isFetching
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
    fetchTopCoinList,
    fetchCoinData
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

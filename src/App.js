import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTopCoinList, fetchCoinData } from './redux/actions';
import CardHolder from './components/CardHolder/CardHolder';
import CoinList from './components/CoinList';
import './App.css';

class App extends Component {

  componentDidMount() {
    const {dispatch, fetchTopCoinList, fetchCoinData} = this.props;
    dispatch(fetchTopCoinList());
    dispatch(fetchCoinData());
  }

  render() {

    const {hasCoinList, hasCoinData} = this.props;

    return (
      <div className="App">
        {(hasCoinList && hasCoinData) ? (
          <CardHolder>
            <CoinList />
          </CardHolder>
        ) : (
          <h2>Loading...</h2>
        )

        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    hasCoinList: state.data.hasCoinList,
    hasCoinData: state.data.hasCoinData
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

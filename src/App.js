import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCoinData } from './redux/actions';
import CardHolder from './components/CardHolder/CardHolder';
import CoinList from './components/CoinList';
import './App.css';

class App extends Component {

  componentDidMount() {
    const {dispatch, fetchCoinData} = this.props;
    dispatch(fetchCoinData());
  }

  render() {

    const {isReady} = this.props;

    return (
      <div className="App">
        {isReady ? (
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

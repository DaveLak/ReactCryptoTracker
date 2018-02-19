import React, { Component } from 'react';
import CardHolder from '../CardHolder/CardHolder';
import CoinList from '../CoinList/index';
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

export default App;

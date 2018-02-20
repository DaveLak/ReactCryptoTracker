import React, { Component } from 'react';
import CardHolder from '../CardHolder/CardHolder';
import './App.css';
import VisibleCoinList from '../VisibleCoinList';
import CoinList from '../CoinList';

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
            <VisibleCoinList>
              <CoinList />
            </VisibleCoinList>
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

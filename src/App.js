import React, { Component } from 'react';
import 'normalize.css';
import Header from './components/presentational/Header/Header';
import CardHolder from './components/presentational/CardHolder/CardHolder';
import CoinListContainer from './components/container/CoinListContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <CardHolder>
          <CoinListContainer/>
        </CardHolder>
      </div>
    );
  }
}

export default App;

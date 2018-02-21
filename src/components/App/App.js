import React, { Component } from 'react';
import VisibleCoinList from '../containers/VisibleCoinList';
import CurrencySelector from '../containers/CurrencySelector';
import MainView from '../presentation/MainView/MainView';
import Nav from '../presentation/Nav/Nav';
import './App.css';

class App extends Component {

  componentDidMount() {
    const {fetchCoinData, numberToShow} = this.props;
    fetchCoinData(numberToShow);
  }

  render() {

    const {isReady} = this.props;

    return (
      <div className="App">
        {isReady ? (
          <MainView>
            <Nav>
              <CurrencySelector />
            </Nav>
            <VisibleCoinList />
          </MainView>
        ) : (
          <h2>Loading...</h2>
        )

        }
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import VisibleCoinList from '../containers/VisibleCoinList';
import MainView from '../presentation/MainView/MainView';
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

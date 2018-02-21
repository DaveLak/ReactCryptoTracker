import React, { Component } from 'react';
import VisibleCoinList from '../containers/VisibleCoinList';
import CurrencySelector from '../containers/CurrencySelector';
import VisibleCountSelector from '../containers/VisibleCountSelector';
import LoadingSpinner from '../presentation/LoadingSpinner/LoadingSpinner';
import MainView from '../presentation/MainView/MainView';
import Nav from '../presentation/Nav/Nav';
import './App.css';

class App extends Component {

  componentDidMount() {
    const {fetchCoinData, numberToShow} = this.props;
    fetchCoinData(numberToShow);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.numberToShow === nextProps.numberToShow) {
      return;
    }
    const {fetchCoinData, numberToShow} = nextProps;
    fetchCoinData(numberToShow);
  }

  render() {

    const {isReady} = this.props;

    return (
      <div className="App">
        {isReady ? (
          <MainView>
            <Nav>
              <VisibleCountSelector textBefore={'Show me'} textAfter={'coins'}/>
              <CurrencySelector textBefore={'in'} />
            </Nav>
            <VisibleCoinList />
          </MainView>
        ) : (
          <LoadingSpinner/>
        )

        }
      </div>
    );
  }
}

export default App;

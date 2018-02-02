import axios from 'axios/index';
import React from 'react';
import Card from '../Card/Card';
import './CardHolder.css';

class CardHolder extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      coins: []
    };
  }

  fetchData(url) {
    axios.get(url).then( response => {
      this.setState({ coins: response.data});
      console.log(response);
    });
  }

  componentWillMount() {
    this.fetchData('https://api.coinmarketcap.com/v1/ticker/?limit=10');
  }

  render() {
    return (
      <main className="CardHolder">
        {this.state.coins.map( coin =>
            <Card key={coin.id} name={coin.name} ticker={coin.symbol} price={coin.price_usd} />
        )}
      </main>
    );
  }

}

export default CardHolder;
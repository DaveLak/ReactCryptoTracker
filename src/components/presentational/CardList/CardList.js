import React from 'react';
import Card from '../Card/Card';
import './CardList.css';

// Build URL for coin logos
const buildImgSrc = (symbol, baseUrl, data) => {
  // Check if ticker symbol exits in data
  if ( symbol in data) {
    // If it does build the URL
    return baseUrl + data[symbol].ImageUrl;
  }
  // Else add a placeholder
  return 'http://fillmurray.com/50/50';
};

const CoinList = props => (
  <div className={"CoinList"}>
    {props.coins.map(coin =>
      <Card key={coin.id} name={coin.name} symbol={coin.symbol} price={coin.price_usd}
            imgSrc={buildImgSrc( coin.symbol, props.baseImgUrl, props.extraCoinData)} />
    )}
  </div>
);

export default CoinList;

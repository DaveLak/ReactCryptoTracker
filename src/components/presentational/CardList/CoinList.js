import React from 'react';
import Card from '../Card/Card';

// Build URL for coin logos
const buildImgSrc = (baseUrl, path) => {
  return baseUrl + path;
};

const CoinList = props => (
  <div>
    {props.coins.map(coin =>
      <Card key={coin.id} name={coin.name} symbol={coin.symbol} price={coin.price_usd}
            imgSrc={buildImgSrc(props.baseImgUrl, props.extraCoinData[coin.symbol].ImageUrl)} />
    )}
  </div>
);

export default CoinList;
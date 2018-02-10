import React from 'react';
import CoinCard from '../../container/CoinCard/CoinCard';
import './CoinList.css';

// Build URL for coin logos
const buildImgSrc = (symbol, baseUrl, data) => {
  // Check if ticker symbol exits in data
  if (symbol in data) {
    // If it does, then build the URL
    return baseUrl + data[symbol].ImageUrl;
  }
  // Else add a placeholder
  return 'http://fillmurray.com/50/50';
};

const CoinList = props => (
  <div className={'CoinList'}>
    {props.coins.map(coin =>
      <CoinCard key={coin.id} name={coin.name} symbol={coin.symbol}
                imgSrc={buildImgSrc(coin.symbol, props.baseImgUrl, props.extraCoinData)} />
    )}
  </div>
);

export default CoinList;

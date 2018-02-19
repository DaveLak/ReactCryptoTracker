import React from 'react';
import CoinCard from '../CoinCard/CoinCard';
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

const CoinList = ({coins, baseImgUrl, extraCoinData}) => (
  <div className="CoinList">
    {coins.map(coin =>
      <CoinCard key={coin.id} name={coin.name} symbol={coin.symbol}
                imgSrc={buildImgSrc(coin.symbol, baseImgUrl, extraCoinData)} />
    )}
  </div>
);

export default CoinList;

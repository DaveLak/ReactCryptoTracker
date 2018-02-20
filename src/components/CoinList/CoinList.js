import React from 'react';
import CoinCard from '../CoinCard/CoinCard';
import './CoinList.css';

const CoinList = ({coins}) => (
  <div className="CoinList">
    {coins.map(coin =>
      <CoinCard key={coin.coinSymbol} name={coin.name} symbol={coin.coinSymbol}
                imgSrc={coin.imgSrc} />
    )}
  </div>
);

export default CoinList;

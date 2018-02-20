import React from 'react';
import CoinCard from '../CoinCard/CoinCard';
import './CoinList.css';

const CoinList = ({coins}) => (
  <div className="CoinList">
    {Object.keys(coins).map(key =>
      <CoinCard key={coins[key].coinSymbol} name={coins[key].name} symbol={coins[key].coinSymbol}
                imgSrc={coins[key].imgSrc} />
    )}
  </div>
);

export default CoinList;

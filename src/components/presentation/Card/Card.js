import React from 'react';
import './Card.css';

const Card = ({imgSrc, name, symbol, price, displayCurrency}) => (
  <div className="Card">
    <img src={imgSrc} alt={`${name} logo`} />
    <h3>{name}</h3>
    <p>{symbol}</p>
    <p>{price} {displayCurrency}</p>
  </div>
);
export default Card;
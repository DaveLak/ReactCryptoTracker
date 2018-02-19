import React from 'react';
import './Card.css';

const Card = props => (
  <div className="Card">
    <img src={props.imgSrc} alt={`${props.name} logo`} />
    <h3>{props.name}</h3>
    <p>{props.symbol}</p>
    <p>{props.price}</p>
  </div>
);
export default Card;
import React from 'react';
import './Card.css';

const Card = props => (
  <div className={"Card"}>
    <h3>{props.name}</h3>
    <p>{props.ticker}</p>
    <p>{props.price}</p>
  </div>
);
export default Card;
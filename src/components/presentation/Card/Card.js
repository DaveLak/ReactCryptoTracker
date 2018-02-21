import React from "react";
import placeholder from "../../../assets/images/placeholder.svg";
import "./Card.css";

const Card = ({ imgSrc, name, symbol, price, displayCurrency }) => (
  <div className="Card">
    <h3>{name}</h3>
    <img src={imgSrc !== "" ? imgSrc : placeholder} alt={`${name} logo`} />
    <p>{symbol}</p>
    <p>
      {price} {displayCurrency}
    </p>
  </div>
);

export default Card;

import React from "react";
import placeholder from "../../../assets/images/placeholder.svg";
import "./Card.css";

const Card = ({ imgSrc, name, symbol, price, displayCurrency }) => (
  <div className="Card">
    <h3>{name}</h3>
    <img src={imgSrc !== "" ? imgSrc : placeholder} alt={"logo"} />
    <p>{symbol}</p>
    <p>{price ? `${price} ${displayCurrency}` : "Price Unavailable"}</p>
  </div>
);

export default Card;

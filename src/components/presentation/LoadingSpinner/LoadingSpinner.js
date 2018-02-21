import React from "react";
import loadingIcon from "./loadingCoin.svg";
import "./LoadingSpinner.css";

const LoadingSpinner = props => (
  <div className={"LoadingSpinner"}>
    <div>
      <img src={loadingIcon} className={"LoadingSpinner-icon"} alt="" />
      <h2>Loading...</h2>
    </div>
  </div>
);

export default LoadingSpinner;

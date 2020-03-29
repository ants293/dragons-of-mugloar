import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.scss";

function ButtonBack({ onButtonPress }) {
  return (
    <button className="back-button" onClick={() => onButtonPress()}>
      <FontAwesomeIcon icon="arrow-left" className="mr-1 back-button__icon" />
      <span className="back-button__label">back</span>
    </button>
  );
}

export default ButtonBack;

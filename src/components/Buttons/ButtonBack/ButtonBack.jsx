import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

import "./style.scss";

ButtonBack.propTypes = {
  onButtonPress: PropTypes.func.isRequired,
  title: PropTypes.string,
};

function ButtonBack({ onButtonPress, title = "Back" }) {
  return (
    <button className="back-button" onClick={() => onButtonPress()}>
      <FontAwesomeIcon icon="arrow-left" className="mr-1 back-button__icon" />
      <span className="back-button__label">{title}</span>
    </button>
  );
}

export default ButtonBack;

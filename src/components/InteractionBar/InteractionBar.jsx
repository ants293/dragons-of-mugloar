import React from "react";
import PropTypes from "prop-types";
import ButtonBack from "../Buttons/ButtonBack/ButtonBack";

import "./styles.scss";

InteractionBar.propTypes = {
  title: PropTypes.string,
  redirect: PropTypes.func.isRequired,
};

function InteractionBar({ title = "", redirect }) {
  return (
    <div className="interaction-bar d-flex justify-content-between align-items-baseline mt-4 mt-lg-4">
      <ButtonBack onButtonPress={() => redirect("/")} />

      <h1 className="interaction-bar__title">{title}</h1>
    </div>
  );
}

export default InteractionBar;

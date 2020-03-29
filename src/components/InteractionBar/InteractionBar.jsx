import React from "react";
import "./styles.scss";

function InteractionBar({ title = "", redirect = () => {} }) {
  return (
    <div className="interaction-bar d-flex justify-content-between align-items-center">
      <button className="back-button" onClick={() => redirect("/")}>
        back
      </button>
      <div className="interaction-bar__title">{title}</div>
    </div>
  );
}

export default InteractionBar;

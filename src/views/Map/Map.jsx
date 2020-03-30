import React from "react";
import Infobar from "../../components/InfoBar/Infobar.container";
import PropTypes from "prop-types";

import "./style.scss";

MapView.propTypes = {
  redirect: PropTypes.func.isRequired,
};

function MapView({ redirect }) {
  return (
    <div className="map relative h-full">
      <Infobar />

      <div className="container relative h-full">
        <div className="illustrations d-flex h-full flex-wrap align-content-end justify-content-between">
          <div
            className="illustration__item illustration__one"
            onClick={() => redirect("/shop")}
          />
          <div
            className="illustration__item illustration__three align-self-end"
            onClick={() => redirect("/taskboard")}
          />
          <div className="illustration__item illustration__two" />
        </div>
      </div>
    </div>
  );
}

export default MapView;

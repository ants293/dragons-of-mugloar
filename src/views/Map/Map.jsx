import React from "react";
import "./style.scss";
import Infobar from "../../components/InfoBar/Infobar.container";

function MapView(props) {
  const { redirect } = props;

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

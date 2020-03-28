import React from "react";
import "./style.scss";

function MapView() {
  return (
    <div className="map h-full">
      <div className="container relative h-full">
        <div className="illustrations d-flex h-full flex-wrap align-content-end justify-content-between">
          <div className="illustration__one" />
          <div className="illustration__three" />
          <div className="illustration__two" />
        </div>
      </div>
    </div>
  );
}

export default MapView;

import React from "react";
import InteractionBar from "./InteractionBar/InteractionBar.container";

function MainViewWrapper({ children = () => {} }) {
  return (
    <div className="container h-full">
      <div className="d-flex align-items-center justify-content-center h-full">
        <div className="row w-full">
          <div className="col-12">
            <InteractionBar title={"Item shop"} />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

export default MainViewWrapper;

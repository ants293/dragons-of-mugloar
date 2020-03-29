import React, { Fragment } from "react";
import InteractionBar from "./InteractionBar/InteractionBar.container";
import Infobar from "./InfoBar/Infobar.container";

function MainViewWrapper({ children = () => {}, title = "" }) {
  return (
    <Fragment>
      <Infobar />
      <div className="container h-full">
        <div className="d-flex align-items-center justify-content-center h-full">
          <div className="row w-full">
            <div className="col-12">
              <InteractionBar title={title} />
            </div>
            {children}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default MainViewWrapper;

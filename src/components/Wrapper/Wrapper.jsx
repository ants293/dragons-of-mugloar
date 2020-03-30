import React, { Fragment } from "react";
import InteractionBar from "../InteractionBar/InteractionBar.container";
import Infobar from "../InfoBar/Infobar.container";
import PropTypes from "prop-types";

MainViewWrapper.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any.isRequired,
};

function MainViewWrapper({ children, title = "" }) {
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

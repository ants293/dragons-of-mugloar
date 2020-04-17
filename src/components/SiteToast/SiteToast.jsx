import React from "react";
import { ToastContainer } from "react-toastify";

function SiteToast() {
  return (
    <ToastContainer
      autoClose={1000}
      position="top-center"
      className="toast-container"
    />
  );
}

export default SiteToast;

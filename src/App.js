import React from "react";
import Routes from "./routes/Routes";
import "./assets/styles/css-modules/bootstrap-grid.min.css";
import "./assets/styles/css-modules/normalize.css";
import "./assets/styles/index.scss";
import { setSiteIcons } from "./shared/SiteIcons";
import { Router } from "react-router";
import { history } from "./store/Store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

setSiteIcons();

function App() {
  return (
    <Router history={history}>
      <ToastContainer
        autoClose={1000}
        position="top-center"
        className="toast-container"
      />
      <Routes />
    </Router>
  );
}

export default App;

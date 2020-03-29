import React from "react";
import Routes from "./routes/Routes";
import "./assets/styles/css-modules/bootstrap-grid.min.css";
import "./assets/styles/css-modules/normalize.css";
import "./assets/styles/index.scss";
import { setSiteIcons } from "./shared/SiteIcons";
import { Router } from "react-router";
import { history } from "./store/Store";

setSiteIcons();

function App() {
  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/Routes";
import "./assets/styles/css-modules/bootstrap-grid.min.css";
import "./assets/styles/css-modules/normalize.css";
import "./assets/styles/index.scss";
import { setSiteIcons } from "./shared/siteIcons";

setSiteIcons();

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;

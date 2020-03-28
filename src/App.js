import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/Routes";
import { Theme } from "./styledComponents/Theme";
import { ThemeProvider } from "styled-components";
import "./styles/index.css";
import { GlobalStyles } from "./styledComponents/Global.styles";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <div className="App">
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
        <GlobalStyles />
      </div>
    </ThemeProvider>
  );
}

export default App;

import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/Routes";
import { Theme } from "./styledComponents/Theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styledComponents/GlobalStyle";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <div className="App">
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
        <GlobalStyle />
      </div>
    </ThemeProvider>
  );
}

export default App;

import React from "react";

import { ThemeProvider } from "@mui/material/styles";

import Header from "./components/UI/Header";
import { appTheme } from "./components/UI/Theme";

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <Header />
      <p>Hello World!</p>
      <p>Hello World!</p>
      <p>Hello World!</p>
      <p>Hello World!</p>
      <p>Hello World!</p>
    </ThemeProvider>
  );
}

export default App;

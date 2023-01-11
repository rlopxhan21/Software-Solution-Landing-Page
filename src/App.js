import React from "react";

import { ThemeProvider } from "@mui/material/styles";

import Header from "./components/UI/Header";
import { appTheme } from "./components/UI/Theme";

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <Header />
      <p>
        {[...new Array(120)]
          .map(
            () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
          )
          .join("\n")}
      </p>
    </ThemeProvider>
  );
}

export default App;

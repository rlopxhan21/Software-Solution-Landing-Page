import { createTheme } from "@mui/material/styles";

const lopGreen = "#0a7029";
const lopYellow = "#fede00";
const lopYGreen = "#c8df52";
// const lopMint = "#dbe8d8";

export const appTheme = createTheme({
  palette: {
    primary: {
      main: lopGreen,
    },
    secondary: {
      main: lopYellow,
    },
  },
  text: {
    primary: lopYGreen,
  },
});

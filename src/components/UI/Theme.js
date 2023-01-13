import { createTheme } from "@mui/material/styles";

const arcBlue = "#0B72B9";
const arcOrange = "#e67700";
const arcGrey = "#868686";

export const appTheme = createTheme({
  palette: {
    common: {
      blue: arcBlue,
      orange: arcOrange,
      white: "#fff",
    },
    primary: {
      main: arcBlue,
    },
    secondary: {
      main: arcOrange,
    },
  },
});

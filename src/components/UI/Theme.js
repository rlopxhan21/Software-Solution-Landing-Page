import { green, red } from "@mui/material/colors";
import { createTheme, rgbToHex } from "@mui/material/styles";

export const appTheme = createTheme({
  palette: {
    primary: green,
    secondary: red,
  },
});

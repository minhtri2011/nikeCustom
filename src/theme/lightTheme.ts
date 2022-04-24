
import { createTheme } from "@mui/material";
import { purple } from "@mui/material/colors";

export const lightTheme= createTheme({
    palette: {
     
      primary: {
        // This is green.A700 as hex.
        main: purple[100],
      },
    },
    typography: {
      button: {
        textTransform: "none"
      }
    }
  });
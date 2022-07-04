import { createTheme } from "@mui/material";
import { purple } from "@mui/material/colors";

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: "#fffff",
    },
    secondary: {
      main: "#fafafb",
    },
    background: {},
    action: {
      active: "#000000",
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 950,
      lg: 1200,
      xl: 1535,
    },
  },
});

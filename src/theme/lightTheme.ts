import { createTheme } from "@mui/material";

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
      sm: 650,
      md: 950,
      lg: 1200,
      xl: 1835,
    },
  },
});

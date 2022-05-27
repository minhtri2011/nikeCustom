import { createTheme } from "@mui/material";
import { purple } from "@mui/material/colors";

export const darkTheme = createTheme({
  palette: {
    mode:'dark',
  //   primary: {
  //     main: "#2d2d2d",
  //     dark:'#000000'
  //   },
    background: {
      default: "#202020",
      paper:'#161616',
    },
    action:{
      active:'#4c4c4c',
    }
  },
  typography: {
    button: {
      textTransform: "none",
    },
  },
});

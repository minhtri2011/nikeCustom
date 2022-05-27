
import { createTheme } from "@mui/material";
import { purple } from "@mui/material/colors";

export const lightTheme= createTheme({
    palette: {     
      primary: {
        main: '#fffff',
      },
      secondary:{
       main:'#fafafb'
      },
      background:{
        // paper:
      },
      action:{
        active:'#000000'
      }
    },
    typography: {
      button: {
        textTransform: "none"
      }
    },
    
  });
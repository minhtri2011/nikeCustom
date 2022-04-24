import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { makeStyles } from "tss-react/mui";

interface Props {}

const useStyle = makeStyles()((theme) => ({
  root: {
      width:'100%',
      backgroundColor:'red'
  },
}));

const NavBar = (props: Props) => {
  const { classes } = useStyle();
  return <Paper elevation={2} square variant="elevation" className={classes.root}>NavBar</Paper>;
};

export default NavBar;

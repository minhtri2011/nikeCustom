import { Paper } from "@mui/material";
import Icon from "component/common/Icon";
import React from "react";
import { makeStyles } from "tss-react/mui";
import NavLinkButton from "./NavLinkButton";

interface Props {}

const useStyle = makeStyles()((theme) => ({
  root: {
    height: "100vh",
    width: "300px",
    color:'white!important',
    backgroundColor: "#111010!important",
  },
}));
const Menu = (props: Props) => {
  const { classes } = useStyle();
  return (
    <Paper elevation={3} square className={classes.root}>
        <Icon/>
      <NavLinkButton name='a'/>
    </Paper>
  );
};

export default Menu;

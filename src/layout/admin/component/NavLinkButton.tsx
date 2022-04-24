import React from "react";
import Typography from "@mui/material/Typography";
import { makeStyles } from "tss-react/mui";
import { NavLink } from "react-router-dom";

interface Props {
  name: string;
}
const useStyle = makeStyles()(() => ({
  root: {
    backgroundColor: "red",
    width: "100%",
  },
  linkCustom: {
    textDecoration: "none",
  },
}));

const NavLinkButton = (props: Props) => {
  const { name } = props;
  const { classes } = useStyle();
  const renderIcon = () => {
    return <p></p>;
  };
  return (
    <div className={classes.root}>
      {renderIcon()}
      <NavLink to="/" className={classes.linkCustom}>
        <Typography variant="h5">{name}</Typography>
      </NavLink>
    </div>
  );
};

export default NavLinkButton;

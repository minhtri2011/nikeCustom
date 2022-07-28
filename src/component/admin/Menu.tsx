import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import { Avatar, Button, Paper, Typography } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { useAppDispatch, useAppSelector } from "app/hooks";
import Icon from "component/common/Icon";
import {
  LoginActions,
  selectEmailLogging,
  selectNameLogging,
} from "pages/Login/module/LoginSlice";
import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "tss-react/mui";
import NavLinkButton from "./NavLinkButton";

interface Props {
  active: Boolean;
  setActive: React.Dispatch<React.SetStateAction<Boolean>>;
}

const useStyle = makeStyles()((theme) => ({
  root: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "300px",
    color: "white!important",
    zIndex: 5,
    overflowY: "auto",
    position: "relative",
    top: 0,
    left: 0,
    scrollbarWidth: "none",
    "::-webkit-scrollbar": {
      display: "none",
    },
    [theme.breakpoints.down("md")]: {
      position: "fixed",
      top: 0,
      left: "-100%",
      transition: "left .2s ease-in-out !important",
      "&.active": {
        left: "0",
      },
    },
  },
  logo: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    padding: "20px",
  },
  info: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: theme.palette.text.primary,
  },
  button: {
    margin: "10px !important",
    display: "flex",
    justifyContent: "center",
  },
  btn: {
    margin: "0 10px !important",
    backgroundColor: "transparent !important",
    height: "40px",
    width: "40px",
    minWidth: "40px !important",
    "& svg": {
      fill: theme.palette.text.primary,
      fontSize: "20px",
    },
  },
}));

const Menu = (props: Props) => {
  const { active, setActive } = props;
  const { classes } = useStyle();
  const emailText = useAppSelector(selectEmailLogging);
  const nameText = useAppSelector(selectNameLogging);
  const dispatch = useAppDispatch();
  const handleLogout=()=> dispatch(LoginActions.logout())

  return (
    <div>
      <Paper
        elevation={0}
        square
        className={`${classes.root} ${active && "active"}`}
      >
        <div>
          <div className={classes.logo}>
            <Link to="/">
              <Icon type="white" />
            </Link>
          </div>
          <div>
            {/* <NavLinkButton setActive={setActive} link="/users" icon="dashboard" name="Dashboard" /> */}
            <NavLinkButton
              setActive={setActive}
              link="/dashboard/users"
              icon="user"
              name="User"
            />
            <NavLinkButton
              setActive={setActive}
              link="/dashboard/products"
              icon="product"
              name="Product"
            />
            <NavLinkButton
              setActive={setActive}
              link="/dashboard/oder"
              icon="cart"
              name="Oder"
            />
          </div>
        </div>
        <div>
          <div className={classes.info}>
            <Avatar sx={{ bgcolor: deepOrange[500] }}>A</Avatar>
            <Typography variant="subtitle1" component="p" fontWeight="bold">
              {nameText}
            </Typography>
            <Typography variant="subtitle2" component="p">
              {emailText}
            </Typography>
          </div>
          <div className={classes.button}>
            <Button className={classes.btn} variant="contained">
              <SettingsIcon />
            </Button>
            <Button className={classes.btn} variant="contained" onClick={handleLogout}>
              <LogoutIcon />
            </Button>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default Menu;

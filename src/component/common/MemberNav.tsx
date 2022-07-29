import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import ContainerCustom from "./ContainerCustom";

type Props = {};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: "90px",
    maxWidth: "100vw",
    padding: "0 18px",
    [theme.breakpoints.down("sm")]:{
      padding:0,
    },
    "& ul": {
      overflowX: "auto",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "&::-webkit-scrollbar": {
        display: "none",
      },
      [theme.breakpoints.down("sm")]:{
        justifyContent: "left",
      }
    },
  },
  item: {
    flexShrink: 0,
    padding: "0 15px",
    listStyle: "none",
    [theme.breakpoints.down("sm")]:{
      '&:first-child':{
        paddingLeft:0,
      }
    },
    "& a": {
      textDecoration: "none",
      color: "#000",
      "&.active": {
        color: "#7e7e7e",
      },
    },
  },
}));
const MemberNav = (props: Props) => {
  const classes = useStyles();
  const links = [
    { name: "Profile", link: "/profile" },
    { name: "Inbox", link: "/inbox" },
    { name: "Orders", link: "/orders" },
    { name: "Favorite", link: "/favorite" },
    { name: "Settings", link: "/settings" },
  ];
  return (
    <div className={classes.root}>
      <ContainerCustom>
        <ul>
          {links.map((link, index) => {
            return (
              <li key={index} className={classes.item}>
                <NavLink to={link.link}>{link.name}</NavLink>
              </li>
            );
          })}
        </ul>
      </ContainerCustom>
    </div>
  );
};

export default MemberNav;

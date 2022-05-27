import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import GroupIcon from "@mui/icons-material/Group";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import Typography from "@mui/material/Typography";
import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "tss-react/mui";
import DashboardIcon from '@mui/icons-material/Dashboard';
interface Props {
  name: string;
  icon: string;
  link: string;
  setActive: React.Dispatch<React.SetStateAction<Boolean>>;
}
const useStyle = makeStyles()((theme) => ({
  root: {
    margin: "10px 30px",
  },
  linkCustom: {
    display: "flex",
    textDecoration: "none",
    width: "100%",
    padding: "10px",
    borderRadius: "15px",
    alignItems: "center",
    color: theme.palette.text.primary,
    transition: "background-color .2s, padding-left .2s",
    "& > * + *": {
      paddingLeft: "10px",
    },
    "&:hover": {
      paddingLeft:'20px !important',
    },
    "&.active":{
      color: theme.palette.common.white,
      backgroundColor: theme.palette.action.active,
      paddingLeft:'20px'
    }
  },
}));

const NavLinkButton = (props: Props) => {
  const { name, icon, link,setActive } = props;
  const { classes } = useStyle();
  const renderIcon = (value: string) => {
    // return <p></p>;
    switch (value) {
      case "user":
        return <GroupIcon />;
      case "cart":
        return <AttachMoneyIcon />;
      case "product":
        return <ShoppingCartCheckoutIcon />;
      case "dashboard":
        return <DashboardIcon />;
      default:
        break;
    }
  };
  return (
    <div className={classes.root} onClick={()=>setActive(false)}>
      <NavLink to={link} className={classes.linkCustom}>
        {renderIcon(icon)}
        <Typography variant="h6">{name}</Typography>
      </NavLink>
    </div>
  );
};

export default NavLinkButton;

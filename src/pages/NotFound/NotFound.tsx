import * as React from "react";
import img from "assest/notfound.jpg";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    minHeight: "500px",
    position: "relative",
  },
  img: {
    aspectRatio: "1000/750",
    maxWidth: "100%",
    maxHeight: "100%",
    display: "block",
  },
  btn:{
    position: "absolute",
    top:'20px',
    left:'20px',
    outline: "none",
    backgroundColor: "transparent",
    border: "none", 
    padding:'10px',
    cursor: "pointer",
    textDecoration: "none",
    '& svg':{
      fill:'orangered'
    }
  }
}));
export interface IAppProps {}

export function NotFound(props: IAppProps) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Link to='/' className={classes.btn}><ArrowBackIcon/></Link>
      <img className={classes.img} src={img} alt="nike" />
    </div>
  );
}

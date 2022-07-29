import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import MemberNav from "component/common/MemberNav";
import React from "react";

type Props = {};

const useStyles = makeStyles((theme:Theme)=>({
    root:{
        margin:'200px 0 500px',
        textAlign:'center',
        fontWeight:'normal',
    }
}))

const Setting = (props: Props) => {
    const classes= useStyles();
  return (
    <>
      <MemberNav />
      <h2 className={classes.root}>Feature is being updated</h2>
    </>
  );
};

export default Setting;

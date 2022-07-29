import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useAppSelector } from "app/hooks";
import BenefitScroll from "component/common/BenefitScroll";
import ContainerCustom from "component/common/ContainerCustom";
import MemberNav from "component/common/MemberNav";
import Title from "component/common/Title";
import { selectUserName } from "pages/Login/module/LoginSlice";
import React from "react";

type Props = {};

const useStyles = makeStyles((theme: Theme) => ({
  infoUser: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  avt: {
    width: "96px",
    height: "96px",
    backgroundColor: "rgb(229, 229, 229);",
    borderRadius: "50px",
  },
  userName: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: "24px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0px",
      marginTop:'10px',
    },
    "& h5": {
      fontSize: "32px",
      lineHeight: "36px",
    },
    "& p": {
      color: "#7e7e7e",
    },
  },
}));

const Profile = (props: Props) => {
  const classes = useStyles();
  const userName = useAppSelector(selectUserName);
  return (
    <>
      <MemberNav />
      <ContainerCustom mgt>
        <div className={classes.infoUser}>
          <div className={classes.avt}></div>
          <div className={classes.userName}>
            <h5>{userName}</h5>
            <p>Nike Member Since May 2022</p>
          </div>
        </div>
      </ContainerCustom>
      <ContainerCustom mgt mgb>
        <Title title="Member Benefits" />
        <BenefitScroll />
      </ContainerCustom>
    </>
  );
};

export default Profile;

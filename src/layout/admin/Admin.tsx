import AdminNav from "component/admin/AdminNav";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router";
import { makeStyles } from "tss-react/mui";
import Menu from "../../component/admin/Menu";

type Props = {};
const useStyles = makeStyles()((theme) => ({
  root: {
    display: "flex",
    position: "fixed",
    inset: 0,
    overflow: "hidden",
  },
  right: {
    backgroundColor: theme.palette.background.paper,
    position: "relative",
    width: "100%",
    overflowY: "auto",
    minHeight: "100vh",
  },
  content: {
    minHeight: "100vh",
    width: "100%",
    position: "absolute",
    top: 0,
    padding: "100px 20px 20px",
    backgroundColor: theme.palette.background.default,
  },
}));
const Admin = (props: Props) => {
  const { classes } = useStyles();
  //active menu
  const [active, setActive] = useState<Boolean>(false);

  return (
    <div className={classes.root}>
      <Menu active={active} setActive={setActive}/>
      <div className={classes.right}>
        <AdminNav setActive={setActive} />
        <div className={classes.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Admin;

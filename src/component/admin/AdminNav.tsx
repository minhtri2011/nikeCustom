import Brightness4Icon from "@mui/icons-material/Brightness4";
import MenuIcon from "@mui/icons-material/Menu";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import {
  Paper,
  ToggleButton
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "app/hooks";
import React from "react";
import {
  selectDarkModeThemeReducer,
  ThemeActions
} from "theme/module/themeSlice";
import { makeStyles } from "tss-react/mui";

interface Props {
  setActive: React.Dispatch<React.SetStateAction<Boolean>>;
}

const useStyles = makeStyles()((theme) => ({
  root: {
    display: "flex",
    position: "sticky",
    top: 0,
    right: 0,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 20px",
    zIndex: 2,
  },
  tool: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& > * + *": {
      marginLeft: "20px !important",
    },
  },
  menuBtn: {
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  menuToggle: {
    visibility: "hidden",
    [theme.breakpoints.down("md")]: {
      visibility: "visible",
    },
  },
}));

const AdminNav = (props: Props) => {
  const { setActive } = props;
  const { classes } = useStyles();
  const dispatch = useAppDispatch();

  //toggle darkmode
  const darkMode = useAppSelector(selectDarkModeThemeReducer);
  const handleChangeTheme = () => {
    dispatch(ThemeActions.toggleTheme());
    localStorage.setItem("darkmode", JSON.stringify(!darkMode));
  };

  return (
    <React.Fragment>
      <Paper elevation={0} square className={classes.root}>
        <div
          className={classes.menuToggle}
          onClick={() => setActive((v) => !v)}
        >
          <MenuIcon />
        </div>
        <div className={classes.tool}>
          <div className={classes.menuBtn}>
            <MessageIcon />
          </div>
          <div className={classes.menuBtn}>
            <NotificationsActiveIcon />
          </div>
          <ToggleButton
            value="check"
            selected={!!darkMode}
            onChange={handleChangeTheme}
          >
            <Brightness4Icon />
          </ToggleButton>
        </div>
      </Paper>
    </React.Fragment>
  );
};

export default AdminNav;

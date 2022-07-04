import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

interface Props {
  active: boolean;
  search: string;
}
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: "blue",
    height: "300px",
    position: "absolute",
    top: "60px",
    left: 0,
    right: 0,
    zIndex: 4,
    transform: "scaleY(0)",
    padding: "46px 32px",
    transformOrigin: "top",
    transition: "transform .2s ease-in-out",
    [theme.breakpoints.down("md")]: {
      height: "calc(100vh - 60px)",
    },
    "&.active": {
      transform: "scaleY(1)",
    },
  },
}));

const SearchBoxResult = (props: Props) => {
  const { active } = props;
  const classes = useStyles();
  return (
    <div className={`${classes.root}${active ? " active" : ""}`}>
      SearchBoxResult
    </div>
  );
};

export default SearchBoxResult;

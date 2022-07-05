import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

interface Props {
  title: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginBottom: "24px",
    [theme.breakpoints.down("md")]: {
      paddingBottom: "13px",
    },
    "& h2": {
      margin:0,
      fontWeight: 500,
      fontSize: "24px",
      lineHeight: "28px",
      [theme.breakpoints.down("md")]: {
        marginBottom: "24px",
      },
    },
  },
}));

const Title = (props: Props) => {
  const { title } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h2>{title}</h2>
    </div>
  );
};

export default Title;

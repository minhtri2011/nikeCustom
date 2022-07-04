import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

interface Props {
  value: string;
  black?: boolean;
}
const useStyles = makeStyles((theme) => ({
  whiteBtn: {
    marginTop: "24px",
    borderRadius: "50px !important",
    border: "1.5px solid transparent",
    outline: "none",
    background: "#fff !important",
    cursor: "pointer",
    transition: "background .2s ease-in-out ",
    "&:hover": {
      background: "#b2b2b2 !important",
    },
    "& span": {
      padding: "6px 20px",
      lineHeight: `1.1 !important`,
      textTransform: "capitalize",
      color: "#111",
      fontWeight: 500,
      fontSize: "16px",
    },
  },
  blackBtn: {
    marginTop: "24px",
    borderRadius: "50px !important",
    border: "1.5px solid transparent",
    outline: "none",
    background: "#111 !important",
    cursor: "pointer",
    transition: "background .2s ease-in-out",
    "&:hover": {
      background: "#757575 !important",
    },
    "& span": {
      padding: "6px 20px",
      lineHeight: `1.1 !important`,
      textTransform: "capitalize",
      color: "#fff",
      fontWeight: 500,
      fontSize: "16px",
    },
  },
}));

const ButtonCustom = (props: Props) => {
  const classes = useStyles();
  const { black, value } = props;
  return black === true ? (
    <Button className={classes.blackBtn}>
      <span>{value}</span>
    </Button>
  ) : (
    <Button className={classes.whiteBtn}>
      <span>{value}</span>
    </Button>
  );
};

export default ButtonCustom;

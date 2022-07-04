import { makeStyles } from "@mui/styles";
import React from "react";
import ButtonCustom from "./common/ButtonCustom";

interface Props {
  title: string;
  content: string;
  banner: string;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: "0 48px",
  },
  container: {
    position: "relative",
    width: "100%",
    "& img": {
      minHeight: "300px",
      width: "100%",
      display: "block",
    },
  },
  content: {
    position: "absolute",
    bottom: "48px",
    left: "48px",
    width: "40%",
    color: "#ffffff",
    "& h4": {
      textTransform: "uppercase",
      fontWeight: 500,
      marginBottom: "8px",
      fontSize: "62px",
      lineHeight: "60px",
    },
    "& p": {
      textTransform: "capitalize",
      margin: "24px 0",
      fontSize: "16px",
      lineHeight: "24px",
    },
  },
}));
const SingleItem = (props: Props) => {
  const { banner, title, content } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <img src={banner} alt="nike" />
        <div className={classes.content}>
          <h4>{title}</h4>
          <p>{content}</p>
          <ButtonCustom value="shop" />
        </div>
      </div>
    </div>
  );
};

export default SingleItem;

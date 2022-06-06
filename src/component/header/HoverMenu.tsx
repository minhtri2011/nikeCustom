import React, { useEffect, useRef, useState } from "react";
import { makeStyles } from "@mui/styles";
import { navbar } from "./Header";
import { Typography } from "@mui/material";

interface Props {
  item: navbar;
  setAnimate: React.Dispatch<React.SetStateAction<number>>;
}

const useStyles = makeStyles((theme) => ({
  navTitle: {},
  navTitleItem: {
    padding: "16px 12px 18px",
    cursor: "pointer",
    borderBottom: "2px solid transparent",
    transition: "border-color .1s,color .1s",
    "&:hover": {
      borderBottom: "2px solid #000",
    },
  },
  navHover: {
    position: "absolute",
    top: "60px",
    left: 0,
    right: 0,
    backgroundColor: "red",
    display: "flex",
    visibility: "hidden",
    opacity: 0,
    transition:
      "transform .1s ease,opacity 0ms linear .1s,visibility 0ms linear .1s",
    transformOrigin: "top center",
    transform: "scaleY(0)",
    "&.active": {
      transform: "scaleY(1)",
      opacity: 1,
      visibility: "visible",
      transition: "transform .25s ease,opacity 0ms,visibility 0ms",
    },
    ".isFocused &": {
      transform: "scaleY(1)",
      transition: "none",
    },
  },
  itemNav: {
    opacity: 0,
    transform: "translateY(-10px)",
    transition: "transform .1s,opacity .1s",
    transitionDelay: "0s",
    ".active &": {
      opacity: 1,
      transform: "translateY(0)",
      transition: "transform .3s ease,opacity .2s linear",
      transitionDelay: ".2s",
    },
  },
}));
const HoverMenu = (props: Props) => {
  const { item, setAnimate } = props;
  const classes = useStyles();
  const [active, setActive] = useState(false);
  return (
    <li
      className={classes.navTitle}
      onMouseLeave={() => {
        setActive(false);        
      }}
    >
      <Typography
        className={classes.navTitleItem}
        onMouseEnter={() => {
          setActive(true);
          setAnimate(v=>++v);
        }}
      >
        {item.title}
      </Typography>
      <div className={`${classes.navHover}${active ? " active" : ""}`}>
        {item.data?.map((data, indexData) => {
          return (
            <div className={classes.itemNav} key={indexData}>
              <Typography>{data.title}</Typography>
              {data.item?.map((contentItem, indexContent) => {
                // console.log(contentItem.name);
                return <p key={indexContent}>{contentItem.name}</p>;
              })}
            </div>
          );
        })}
      </div>
    </li>
  );
};

export default HoverMenu;

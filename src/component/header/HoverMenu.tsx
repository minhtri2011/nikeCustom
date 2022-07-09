import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { navbar } from "./Header";

interface Props {
  item: navbar;
  setAnimate: React.Dispatch<React.SetStateAction<number>>;
  setBackdrop: React.Dispatch<React.SetStateAction<boolean>>
}

const useStyles = makeStyles((theme) => ({
  navTitleItem: {
    padding: "16px 12px 18px",
    color: "black",
    cursor: "pointer",
    borderBottom: "2px solid transparent",
    transition: "border-color .1s,color .1s",
    "&:hover": {
      borderBottom: "2px solid #000",
    },
  },
  navHover: {
    backgroundColor: "white",
    position: "absolute",
    padding: "16px 40px 40px 40px",
    top: "60px",
    left: 0,
    right: 0,
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
      transition: "none",
    },
  },
  navContent: {
    maxWidth: "1344px",
    paddingBottom: "15px",
    width: "100%",
    margin: "0 auto",
    textAlign: "center",
    whiteSpace: "nowrap",
  },
  itemNav: {
    display: "inline-block",
    textAlign: "left",
    padding: "16px 6px 0 6px",
    verticalAlign: "top",
    opacity: 0,
    width: "calc(100% / 6 )",
    transform: "translateY(-10px)",
    transition: "transform .1s,opacity .1s",
    transitionDelay: "0s",
    fontSize: "14px",
    ".active &": {
      opacity: 1,
      transform: "translateY(0)",
      transition: "transform .3s ease,opacity .2s linear",
      transitionDelay: ".2s",
    },
  },
  itemNavContent: {
    wordWrap: "break-word",
    whiteSpace: "normal",
    cursor: "pointer",
    color: "#757575",
    margin: 0,
    marginBottom: "6px",
    "&:hover": {
      color: "black",
    },
  },
  itemNavTitle: {
    color: "black !important",
    fontWeight: "500",
    marginBottom: "16px",
  },
  itemNavTitle2: {
    color: "black !important",
    fontWeight: "500",
    margin: "40px 0 16px !important",
  },
}));
const HoverMenu = (props: Props) => {
  const { item, setAnimate,setBackdrop } = props;
  const classes = useStyles();
  const [active, setActive] = useState(false);
  const handleOver=()=>{
    setActive(true);
    setAnimate((v) => ++v);
    setBackdrop(true)
  }
  
  return item.data ? (
    <li
    onMouseLeave={() => {
      setActive(false);
      setBackdrop(false)
      }}
    >
      <Typography
        className={classes.navTitleItem}
        onMouseEnter={handleOver}
      >
        {item.title}
      </Typography>
      <div className={`${classes.navHover}${active ? " active" : ""}`}>
        <div className={classes.navContent}>
          {item.data?.map((data, indexData) => {
            return (
              <div className={classes.itemNav} key={indexData}>
                <Typography className={classes.itemNavTitle}>
                  {data.title}
                </Typography>
                {data.item?.map((contentItem, indexContent) => {
                  return (
                    <p key={indexContent} className={classes.itemNavContent}>
                      {contentItem.name}
                    </p>
                  );
                })}
                {data.title2 && (
                  <>
                    <Typography className={classes.itemNavTitle2}>
                      {data.title2}
                    </Typography>
                    {data.item2?.map((contentItem, indexContent) => {
                      return (
                        <p
                          key={indexContent}
                          className={classes.itemNavContent}
                        >
                          {contentItem.name}
                        </p>
                      );
                    })}
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </li>
  ) : (
    <li>
      <Typography
        className={classes.navTitleItem}
        onMouseEnter={() => {
          setActive(false);
          setAnimate(0);
        }}
      >
        {item.title}
      </Typography>
    </li>
  );
};

export default HoverMenu;

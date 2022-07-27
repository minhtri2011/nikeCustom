import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Grid,
  Theme
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Facebook from "component/svg/facebook";
import Instagram from "component/svg/instagram";
import Poisition from "component/svg/poisition";
import Twitter from "component/svg/twitter";
import Youtube from "component/svg/youtube";
import React, { useState } from "react";
import { Link } from "react-router-dom";
interface Props {}
interface dataMenu {
  title: string;
  data: string[];
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minHeight: "200px",
    backgroundColor: "#111",
  },
  footer: {
    padding: "40px 40px 0",
    margin: "0 auto",
    maxWidth: "1440px",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 16px 0",
    },
  },
  miniTopMenu: {
    [theme.breakpoints.down("sm")]: {
      "&:not(&:nth-child(1))": {
        display: "none",
      },
    },
  },
  titleItem: {
    color: "#fff",
    textTransform: "uppercase",
    fontSize: "14px",
    marginBottom: "4px",
    fontWeight: 600,
    paddingBottom: "5px",
  },
  listLink: {
    padding: 0,
  },
  link: {
    paddingBottom: "5px",
    paddingTop: "5px",
    color: "#7e7e7e",
    fontSize: "12px",
    textTransform: "capitalize",
    marginBottom: "4px",
    listStyle: "none",
  },
  upper: {
    "& p": {
      textTransform: "uppercase",
      color: "#fff",
      marginBottom: "4px",
      fontWeight: 600,
    },
  },
  listIcons: {
    display: "flex",
    justifyContent: "flex-end",
    flexWrap: "wrap",
    alignItems: "flex-start",
    height: "fit-content",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "flex-start",
    },
    "& svg": {
      fill: "#7e7e7e",
      marginLeft: "16px",
      marginBottom: "7px",
      transition: "fill .2s ease-in-out",
      cursor: "pointer",
      "&:hover": {
        fill: "#fff",
      },
      [theme.breakpoints.down("sm")]: {
        "&:nth-child(1)": {
          marginLeft: 0,
        },
      },
    },
  },
  inc: {
    color: "#7e7e7e",
    fontSize: "10px",
    marginLeft: "16px",
  },
  brandFooter: {},
  location: {
    position: "relative",
    padding: "20px 6px 20px 8px",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      padding: "0",
      display: "block",
      height: "100%",
      "& > span": {
        margin: 0,
        padding: "20px 0 24px 0",
        display: "inline-block",
      },
    },
  },
  linkPosition: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    "& svg": {
      fill: "#fff",
    },
    "& span": {
      color: "#fff",
      fontSize: "10px",
      margin: "0 8px",
    },
  },
  listTools: {
    position: "relative",
    display: "flex",
    listStyle: "none",
    justifyContent: "flex-end",
    padding: "20px 0 20px 0",
    flexWrap: "wrap",
    margin: "0",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      padding: "0px 0 20px 0",
      "& > li": {
        paddingLeft: "0 !important",
      },
    },
    "& > li": {
      color: "#7e7e7e",
      fontSize: "10px",
      padding: "8px",
      cursor: "pointer",
      "&:hover": {
        color: "#fff",
      },
      "& a": {
        transition: "color .2s ease-in-out",
        "&:hover": {
          color: "#fff",
        },
      },
    },
  },
  hoverBtn: {
    position: "static",
    "& > div": {
      display: "none",
    },
    "&:hover": {
      "& > div": {
        display: "block",
      },
    },
  },
  hidePanel: {
    position: "absolute",
    zIndex: "3",
    bottom: "42px",
    right: "0",
    top: "inherit",
    paddingBottom: "10px",
    maxWidth: "100%",
    minWidth: "320px",
    width: "100%",
  },
  panelContainer: {
    border: "1px solid #fff",
    background: "#111",
    textAlign: "left",
    transition: "opacity .2s,visibility 0s linear .2s",
    display: "block",
    "& ul": {
      listStyle: "none",
      display: "flex",
      flexWrap: "wrap",
      padding: "20px 28px",
      "& li": {
        width: "calc(100% / 3)",
        padding: "7px 6px ",
        "& a": {
          textDecoration: "none",
          color: "#7e7e7e",
        },
      },
    },
  },
}));

const Footer = (props: Props) => {
  const classes = useStyles();
  const data = [
    {
      title: "find a store",
      data: ["become a member", "sign up for email", "send us deedback"],
    },
    {
      title: "get help",
      data: [
        "order status",
        "delivery",
        "returns",
        "payment options",
        "contact us",
      ],
    },
    {
      title: "about nike",
      data: ["news", "careers", "investors", "sustainability"],
    },
  ];
  const hidePanel = [
    { title: "Nike Adapt", link: "/" },
    { title: "Nike Air", link: "/" },
    { title: "Nike Air Force 1", link: "/" },
    { title: "Nike Air Max", link: "/" },
    { title: "Nike FlyEase", link: "/" },
    { title: "Nike Flyknit", link: "/" },
    { title: "Nike Flyleather", link: "/" },
    { title: "Nike Free", link: "/" },
    { title: "Nike Joyride", link: "/" },
    { title: "Nike Pegasus", link: "/" },
    { title: "Nike React", link: "/" },
    { title: "Nike Vaporfly", link: "/" },
    { title: "Nike Zoom Fly", link: "/" },
    { title: "Nike ZoomX", link: "/" },
  ];
  const [expanded, setExpanded] = useState<string | false>();
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
  const renderListItem = (value: string[]) => {
    return value.map((item: string, index: number) => {
      return (
        <li className={classes.link} key={index}>
          <p>{item}</p>
        </li>
      );
    });
  };
  return (
    <div className={classes.root}>
      <div className={classes.footer}>
        <Grid container marginBottom={"16px"}>
          <Grid item sm={9} xs={12}>
            <Grid container>
              {data.map((item: dataMenu, index: number) => {
                return (
                  <Grid
                    key={index}
                    item
                    sm={4}
                    md={3}
                    className={`${classes.miniTopMenu} ${
                      index === 0 ? classes.upper : ""
                    }`}
                  >
                    <p className={classes.titleItem}>{item.title}</p>
                    <ul className={classes.listLink}>
                      {renderListItem(item.data)}
                    </ul>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ display: { sm: "none" } }}>
            <Divider sx={{ borderColor: "#323232" }} />
            {data.map((item: dataMenu, index: number) => {
              return (
                <Accordion
                  key={index}
                  expanded={expanded === item.title}
                  onChange={handleChange(item.title)}
                  disableGutters={true}
                  sx={{
                    border: "none",
                    boxShadow: "none",
                    backgroundColor: "#111",
                    "&::before": { backgroundColor: "transparent" },
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreIcon
                        sx={{
                          color: "#fff",
                        }}
                      />
                    }
                    sx={{
                      textTransform: "capitalize",
                      padding: "0",
                      color: "#fff",
                    }}
                  >
                    {item.title}
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul className={classes.listLink}>
                      {renderListItem(item.data)}
                    </ul>
                  </AccordionDetails>
                </Accordion>
              );
            })}
          </Grid>
          <Grid item sm={3} xs={12} className={classes.listIcons}>
            <Twitter />
            <Facebook />
            <Youtube />
            <Instagram />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} sm={6} className={classes.location}>
            <div className={classes.linkPosition}>
              <Poisition />
              <span>Vietnam</span>
            </div>
            <span className={classes.inc}>
              © 2022 Nike, Inc. All Rights Reserved
            </span>
          </Grid>
          <Grid item sm={6} xs={12}>
            <ul className={classes.listTools}>
              <li className={classes.hoverBtn}>
                <p>Guides</p>
                <div className={classes.hidePanel}>
                  <div className={classes.panelContainer}>
                    <ul>
                      {hidePanel.map((item, index) => {
                        return (
                          <li key={index}>
                            <Link to={item.link}>{item.title}</Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <p>Terms of Sale</p>
              </li>
              <li>
                <p>Terms of Use</p>
              </li>
              <li>
                <p>Nike Privacy Policy</p>
              </li>
            </ul>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;

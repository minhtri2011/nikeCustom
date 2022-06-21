import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React, { useState } from "react";

type Props = {};

const useStyles = makeStyles((theme) => ({
  brandHeader: {
    position: "relative",
    background: "#f5f5f5",
    height: "36px",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    padding: "0 36px 0 38px",
  },
  listMenu: {
    height: "100%",
    padding: 0,
    margin: 0,
    display: "flex",
    alignItems:'center',
    "& > li": {
      alignItems: "center",
      listStyle: "none",
      position: "relative",
      display: "flex",
      height: "100%",
    },
  },
  logo: {
    height: "100%",
    width: "fit-content",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: "12px",
  },
  submenu: {
    zIndex:2,
    position: "absolute",
    minWidth: "240px",
    padding: "24px 24px 24px 16px",
    top: "100%",
    right: 0,
    borderRadius: "0 0 8px 8px",
    backgroundColor: "#fff",
    opacity: 0,
    visibility: "hidden",
    transform: "translateY(-20px)",
    transition: "opacity .2s,visibility 0s linear .2s,transform .25s ease",
    "&.active": {
      opacity: 1,
      visibility: "visible",
      transform: "translateY(0)",
      transition: "opacity .2s,visibility 0s,transform .25s ease",
    },
  },
  titleMenu: {
    position: "relative",
    display:'flex',
    alightItem:'center',
  },
  listItemSubMenu: {
    listStyle: "none",
    padding: 0,
  },
  titleHover: {
    padding: "4px 8px",
    cursor: "pointer",
    color: "black",
    "&:hover": {
      color: "#757575",
    },
  },
  itemHover: {
    color: "#757575",
    fontSize: "14px !important",
    padding: "4px 8px",
    cursor: "pointer",
    "&:hover": {
      color: "black",
    },
  },
  titleSubMenu: {
    cursor: "pointer",
    padding: "4px 8px",
    marginBottom: "12px !important",
  },
  bar:{
    padding:'4px',
    fontSize:'12px !important',
  }
}));

const dataList = [
  {
    title: "Help",
    data: {
      title: "Help",
      content: [
        "Order Status",
        "Dispatch and Delivery",
        "Returns",
        "Contact Us",
        "Privacy Policy",
        "Terms of Sale",
        "Terms of Use",
        "Send Us Feedback",
      ],
    },
  },
  {
    title: "Join Us",
  },
  {
    title: "Sign in",
  },
];

const BrandHeader = (props: Props) => {
  const classes = useStyles();
  const [active, setActive] = useState<boolean>(false);

  return (
    <div className={classes.brandHeader}>
      <div className={classes.logo}>
        <svg height="24px" width="24px" fill="#111" viewBox="0 0 26 32">
          <path d="M14.4 5.52v-.08q0-.56.36-1t.92-.44 1 .36.48.96-.36 1-.96.4l-.24.08.08.12-.08.44-.16 1.28q.08.08.08.16l-.16.8q-.08.16-.16.24l-.08.32q-.16.64-.28 1.04t-.2.64V12q-.08.4-.12.64t-.28.8q-.16.32 0 1.04l.08.08q0 .24.2.56t.2.56q.08 1.6-.24 2.72l.16.48q.96.48.56 1.04l.4.16q.96.48 1.36.84t.8.76q.32.08.48.24l.24.08q1.68 1.12 3.36 2.72l.32.24v.08l-.08.16.24.16h.08q.24.16.32.16h.08q.08 0 .16-.08l.16-.08q.16-.16.32-.24h.32q.08 0 0 .08l-.32.16-.4.48h.56l.56.08q.24-.08.4-.16l.4-.24q.24-.08.48.16h.08q.08.08-.08.24l-.96.88q-.4.32-.72.4l-1.04.72q-.08.08-.16 0l-.24-.32-.16-.32-.2-.28-.24-.32-.2-.24-.16-.2-.32-.24q-.16 0-.32-.08l-1.04-.8q-.24 0-.56-.24-1.2-1.04-1.6-1.28l-.48-.32-.96-.16q-.48-.08-1.28-.48l-.64-.32q-.64-.32-.88-.32l-.32-.16q-.32-.08-.48-.16l-.16-.16q-.16 0-.32.08l-1.6.8-2 .88q-.8.64-1.52 1.04l-.88.4-1.36.96q-.16.16-.32 0l-.16.16q-.24.08-.32.08l-.32.16v.16h-.16l-.16.24q-.16.32-.32.36t-.2.12-.08.12l-.16.16-.24.16-.36-.04-.48.08-.32.08q-.4.08-.64-.12t-.4-.6q-.16-.24.16-.4l.08-.08q.08-.08.24-.08h.48L1.6 26l.32-.08q0-.16.08-.24.08-.08.24-.08v-.08q-.08-.16-.08-.32-.08-.16-.04-.24t.08-.08h.04l.08.24q.08.4.24.24l.08-.16q.08-.16.24-.16l.16.16.16-.16-.08-.08q0-.08.08-.08l.32-.32q.4-.48.96-.88 1.12-.88 2.4-1.36.4-.4.88-.4.32-.56.96-1.2.56-.4.8-.56.16-.32.4-.32H10l.16-.16q.16-.08.24-.16v-.4q0-.4.08-.64t.4-.24l.32-.32q-.16-.32-.16-.72h-.08q-.16-.24-.16-.48-.24-.4-.32-.64h-.24q-.08.24-.4.32l-.08.16q-.32.56-.56.84t-.88.68q-.4.4-.56.88-.08.24 0 .48l-.08.16h.08q0 .16.08.16h.08q.16.08.16.2t-.24.08-.36-.16-.2-.12l-.24.24q-.16.24-.32.2t-.08-.12l.08-.08q.08-.16 0-.16l-.64.16q-.08.08-.2 0t.04-.16l.4-.16q0-.08-.08-.08-.32.16-.64.08l-.4-.08-.08-.08q0-.08.08-.08.32.08.8-.08l.56-.24.64-.72.08-.16q.32-.64.68-1.16t.76-.84l.08-.32q.16-.32.32-.56t.4-.64l.24-.32q.32-.48.72-.48l.24-.24q.08-.08.08-.24l.16-.16-.08-.08q-.48-.4-.48-.72-.08-.56.36-.96t.88-.36.68.28l.16.16q.08 0 .08.08l.32.16v.24q.16.16.16.24.16-.24.48-.56l.4-1.28q0-.32.16-.64l.16-.24v-.16l.24-.96h.16l.24-.96q.08-.24 0-.56l-.32-.8z"></path>
        </svg>
      </div>
      <ul className={classes.listMenu}>
        {dataList.map((item, index) => {
          return (
            <li
              key={index}
              className={classes.titleMenu}
              onMouseLeave={() => setActive(false)}
            >
              {index > 0 && (
                <Typography className={classes.bar}>
                  |
                </Typography>
              )}
              {item.data ? (
                <>
                  <Typography
                    variant="caption"
                    onMouseEnter={() => setActive(true)}
                    className={classes.titleHover}
                  >
                    {item.title}
                  </Typography>
                  <div
                    className={`${classes.submenu} ${active ? "active" : ""}`}
                  >
                    <Typography className={classes.titleSubMenu}>
                      {item.data.title}
                    </Typography>
                    <ul className={classes.listItemSubMenu}>
                      {item.data.content.map((contentItem, indexContent) => {
                        return (
                          <Typography
                            key={indexContent}
                            className={classes.itemHover}
                          >
                            {contentItem}
                          </Typography>
                        );
                      })}
                    </ul>
                  </div>
                </>
              ) : (
                <Typography className={classes.titleHover} variant="caption">
                  {item.title}
                </Typography>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BrandHeader;

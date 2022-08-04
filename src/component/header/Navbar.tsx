import CloseIcon from "@mui/icons-material/Close";
import { Button, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import useCheckScrollToTopElement from "hooks/useCheckScrollToTopElement";
import { useOnClickOutside } from "hooks/useOnClickOutSide";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { navbar } from "./Header";
import HoverMenu from "./HoverMenu";
import MobileMenu from "./MobileMenu";
import SearchBoxResult from "./SearchBoxResult";
import { useScrollDirection } from "react-use-scroll-direction";
import useCheckMaxBreakpoints from "hooks/useCheckMaxBreakpoints";
import { useAppSelector } from "app/hooks";
import { selectCartLength } from "pages/Cart/module/cartSlice";
interface Props {
  data: navbar[];
  animate: number;
  setBackdrop: React.Dispatch<React.SetStateAction<boolean>>;
  setAnimate: React.Dispatch<React.SetStateAction<number>>;
  // window?: () => Window;
}

const useStyles = makeStyles((theme: Theme) => ({
  navContainer: {
    height: "60px",
  },
  navbar: {
    background: "#fff",
    position: "relative",
    zIndex: 5,
    height: "60px",
    width: "100%",
    transition: "transform .15s ease",
    padding: "0 38px 0 36px",
    display: "flex",
    [theme.breakpoints.down("md")]: {
      justifyContent: "space-between",
      padding: "0 18px 0 18px",
    },
    "&.active": {
      position: "fixed",
      top: "36px",
      transition: "transform .25s ease .25s",
      transform: "translateY(-36px)",
      zIndex: 6,
      [theme.breakpoints.down("md")]: {
        top: 0,
        transform: "none",
      },
      "&.fixed": {
        transform: "translateY(0px)",
      },
    },
    "&.fixed": {
      position: "fixed",
      left: 0,
      top: 0,
    },
    "&.isHidden": {
      transform: "translateY(-60px)",
    },
  },
  icon: {
    padding: "0 12px",
    height: "100%",
    width: "fit-content",
    cursor: "pointer",
    zIndex: 2,
    [theme.breakpoints.down("md")]: {
      ".active &": {
        display: "none",
      },
    },
  },
  navHover: {
    position: "absolute",
    inset: 0,
    display: "flex",
    justifyContent: "center",
  },
  navTitleList: {
    listStyle: "none",
    display: "flex",
    justifyContent: "center",
    padding: 0,
    margin: 0,
    zIndex: 2,
    width: "fit-content",
    "& ": {
      listStyle: "none",
      display: "flex",
    },
    "& li": {
      listStyle: "none",
      display: "flex",
      [theme.breakpoints.down(1100)]: {
        "&:nth-child(6)": {
          display: "none",
        },
      },
      [theme.breakpoints.down(1000)]: {
        "&:nth-child(5)": {
          display: "none",
        },
      },
      [theme.breakpoints.down(980)]: {
        "&:nth-child(4)": {
          display: "none",
        },
      },
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
    },
    "& , & li": {
      margin: 0,
    },
  },
  tools: {
    display: "flex",
    alignItems: "center",
    "& button": {
      minWidth: 0,
      marginLeft: "12px",
    },
    "&.active button": {
      display: "none",
      "&:nth-child(3)": {
        display: "flex",
        animation: "$buttonEffect 300ms forwards .6s",
      },
      [theme.breakpoints.down("md")]: {
        "&:nth-child(4)": {
          display: "none !important",
        },
      },
    },
  },
  "@keyframes buttonEffect": {
    "0%": {
      transform: "scale(.5)",
    },
    "50%": {
      transform: "scale(1.1)",
    },
    "100%": {
      transform: "scale(1)",
    },
  },
  btnTool: {
    height: "fit-content",
    minWidth: 0,
    padding: "6px !important",
    borderRadius: "50% !important",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
      backgroundColor: "#e5e5e5 !important",
    },
    [theme.breakpoints.down("md")]: {
      "&:nth-child(1)": {
        display: "none",
      },
      "&:nth-child(2)": {
        marginRight: "56px",
      },
      "&:nth-child(3)": {
        position: "absolute",
        right: "24px",
      },
      "&:nth-child(4)": {
        display: "flex !important",
      },
    },
    "&:nth-child(3)": {
      opacity: "1",
      display: "none",
      flex: "0 0 auto",
      zIndex: 3,
      alignItems: "center",
      borderRadius: "100px",
      background: "#f5f5f5",
      transform: "scale(0)",
    },
    "&:nth-child(4)": {
      display: "none",
    },
  },
  searchBar: {
    height: "100%",
    width: "100%",
    display: "flex",
    position: "relative",
    alignItems: "center",
    transition: "z-index .5s .5s",
    "&.active": {
      zIndex: 3,
    },
    [theme.breakpoints.down("md")]: {
      position: "absolute",
      top: 0,
      left: 0,
    },
  },
  inputPosition: {
    position: "absolute",
    right: "0",
    width: "180px",
    transform: "translateX(0)",
    transition: "width .25s ease,transform .25s ease,right .25s ease",
    ".active &": {
      right: "50%",
      width: "656px",
      transform: "translateX(50%)",

      [theme.breakpoints.down("md")]: {
        padding: "0 74px 0 24px",
        width: "100%",
      },
    },
    [theme.breakpoints.down("md")]: {
      width: "50px",
      right: "50px",
      transition: "width .3s ease,transform .3s ease,right .25s ease",
    },
  },
  inputBox: {
    position: "relative",
    width: "100%",
    "& button": {
      position: "absolute",
      minWidth: 0,
      top: "2px",
      left: "2px",
      borderRadius: "100px",
      padding: "6px 8px",
      "&:hover": {
        backgroundColor: "#e5e5e5 !important",
      },
    },
    "& input": {
      width: "100%",
      borderRadius: "100px",
      outline: "none",
      border: "none",
      padding: "8px 48px",
      height: "40px",
      backgroundColor: "#f5f5f5",
      transition: "background-color .15s,color .35s .5s",
      "&::placeholder": {
        fontSize: "16px",
        color: "#CCC",
      },
      "&:hover": {
        "&::placeholder": {
          color: "#757575",
        },
      },
    },
    [theme.breakpoints.down("md")]: {
      "& input": {
        width: "0%",
        padding: 0,
      },
      ".active & input": {
        width: "100%",
        padding: "8px 48px",
      },
    },
  },
}));
const Navbar = (props: Props) => {
  const classes = useStyles();
  const { data, animate, setAnimate, setBackdrop } = props;
  const [activeSearchBar, setActiveSearchBar] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [search, setSearch] = useState("");

  const cartLength = useAppSelector(selectCartLength);
  const searchBar = useRef(null);
  const nav = useRef(null);

  const [direction, setDirection] = useState<string>("");
  const { scrollDirection } = useScrollDirection();

  useEffect(() => {
    if (
      (scrollDirection !== null && scrollDirection === "UP") ||
      scrollDirection === "DOWN"
    ) {
      setDirection(scrollDirection);
    }
    return () => setDirection((scrollDirection as string) || "UP");
  }, [scrollDirection]);

  const handleClickSearch = () => {
    setBackdrop(true);
    setActiveSearchBar(true);
  };
  const handleCancleSearchBar = () => {
    setBackdrop(false);
    setActiveSearchBar(false);
    setSearch("");
  };
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  // check click outside searchbar panel
  useOnClickOutside(searchBar, handleCancleSearchBar);

  const checkScroll = useCheckScrollToTopElement(nav);
  return (
    <div ref={nav} className={classes.navContainer}>
      <div
        className={`${classes.navbar}${activeSearchBar ? " active" : ""}${
          checkScroll ? " fixed" : ""
        }${checkScroll ? (direction === "DOWN" ? " isHidden" : "") : ""}`}
        ref={searchBar}
      >
        <div className={classes.icon}>
          <Link to="/">
            <svg
              className="pre-logo-svg"
              height="60px"
              width="60px"
              fill="#111"
              viewBox="0 0 69 32"
            >
              <path d="M68.56 4L18.4 25.36Q12.16 28 7.92 28q-4.8 0-6.96-3.36-1.36-2.16-.8-5.48t2.96-7.08q2-3.04 6.56-8-1.6 2.56-2.24 5.28-1.2 5.12 2.16 7.52Q11.2 18 14 18q2.24 0 5.04-.72z"></path>
            </svg>
          </Link>
        </div>
        <div className={classes.navHover}>
          <ul
            onMouseLeave={() => setAnimate(0)}
            className={`${classes.navTitleList} ${
              animate > 1 ? "isFocused" : ""
            }`}
          >
            {data.map((item, indexnav) => {
              return (
                <HoverMenu
                  setBackdrop={setBackdrop}
                  setAnimate={setAnimate}
                  item={item}
                  key={indexnav}
                />
              );
            })}
          </ul>
        </div>
        <div
          className={`${classes.searchBar}${activeSearchBar ? " active" : ""}`}
        >
          <div className={classes.inputPosition}>
            <div className={classes.inputBox} onClick={handleClickSearch}>
              <Button>
                <svg
                  className="pre-search-input-icon"
                  fill="#111"
                  height="24px"
                  width="24px"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.39zM11 18a7 7 0 1 1 7-7 7 7 0 0 1-7 7z"></path>
                </svg>
              </Button>
              <input
                type="text"
                placeholder="Search"
                onChange={handleChangeInput}
                value={search}
              />
            </div>
          </div>
        </div>
        <div className={`${classes.tools}${activeSearchBar ? " active" : ""}`}>
          <Link to="/favorite">
          <Button className={classes.btnTool}>
            <svg width="24px" height="24px" fill="#111" viewBox="0 0 24 24">
              <path d="M21.11 4a6.6 6.6 0 0 0-4.79-1.92A6.27 6.27 0 0 0 12 3.84 6.57 6.57 0 0 0 2.89 4c-2.8 2.68-2.45 7.3.88 10.76l6.84 6.63A2 2 0 0 0 12 22a2 2 0 0 0 1.37-.54l.2-.19.61-.57c.6-.57 1.42-1.37 2.49-2.41l2.44-2.39 1.09-1.07c3.38-3.55 3.8-8.1.91-10.83zm-2.35 9.4l-.25.24-.8.79-2.44 2.39c-1 1-1.84 1.79-2.44 2.36L12 20l-6.83-6.68c-2.56-2.66-2.86-6-.88-7.92a4.52 4.52 0 0 1 6.4 0l.09.08a2.12 2.12 0 0 1 .32.3l.9.94.9-.94.28-.27.11-.09a4.52 4.52 0 0 1 6.43 0c1.97 1.9 1.67 5.25-.96 7.98z"></path>
            </svg>
          </Button>
          </Link>
          <Link to="/cart">
            <Button className={classes.btnTool} sx={{ position: "relative" }}>
              <svg width="24px" height="24px" fill="#111" viewBox="0 0 24 24">
                <path d="M16 7a1 1 0 0 1-1-1V3H9v3a1 1 0 0 1-2 0V3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3a1 1 0 0 1-1 1z"></path>
                <path d="M20 5H4a2 2 0 0 0-2 2v13a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a2 2 0 0 0-2-2zm0 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7h16z"></path>
              </svg>
              {cartLength > 0 && (
                <p
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-40%)",
                    fontSize: "12px",
                  }}
                >
                  {cartLength}
                </p>
              )}
            </Button>
          </Link>
          <Button className={classes.btnTool} onClick={handleCancleSearchBar}>
            <CloseIcon />
          </Button>
          <Button
            className={classes.btnTool}
            onClick={() => setMobileMenu(true)}
          >
            <svg width="24px" height="24px" fill="#111" viewBox="0 0 24 24">
              <path d="M21 13H3c-.6 0-1-.4-1-1s.4-1 1-1h18c.6 0 1 .4 1 1s-.4 1-1 1zm0-8H3c-.6 0-1-.4-1-1s.4-1 1-1h18c.6 0 1 .4 1 1s-.4 1-1 1zm0 16H3c-.6 0-1-.4-1-1s.4-1 1-1h18c.6 0 1 .4 1 1s-.4 1-1 1z" />
            </svg>
          </Button>
        </div>
        <MobileMenu active={mobileMenu} toggle={setMobileMenu} />
        <SearchBoxResult active={activeSearchBar} search={search} />
      </div>
    </div>
  );
};

export default Navbar;

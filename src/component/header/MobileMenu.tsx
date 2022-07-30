import { HelpOutline } from "@mui/icons-material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CloseIcon from "@mui/icons-material/Close";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import { Button, Drawer, IconButton, Theme } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { makeStyles } from "@mui/styles";
import {  useAppDispatch, useAppSelector } from "app/hooks";
import {
  LoginActions,
  selectIsLoggedIn,
  selectUserName,
} from "pages/Login/module/LoginSlice";
import React, { useState } from "react";
import { Link } from "react-router-dom";

interface Props {
  active: boolean;
  toggle: React.Dispatch<React.SetStateAction<boolean>>;
}

interface menuMobile {
  title: string;
  data?: secondMenuMobile[];
}
interface secondMenuMobile {
  title: string;
  data?: dataSecondMenuMobile[];
}
interface dataSecondMenuMobile {
  linkTitle: string;
  link: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "320px",
    height: "100%",
    position: "relative",
    overflowX: "hidden",
  },
  container: {
    position: "absolute",
    top: 0,
    width: "960px",
    display: "flex",
    transition: "left .3s ease-in-out",
  },
  panel: {
    paddingBottom: "150px",
    width: "320px",
    position: "relative",
    padding: "40px 21px",
    overflowY: "auto",
    height: "100vh",
    "::-webkit-scrollbar": {
      width: "10px",
    },
    "&::-webkit-scrollbar": {
      width: "5px",
    },
    "&::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0,0,0,.3)",
    },
  },
  titleMenu: {
    textTransform: "capitalize",
    paddingLeft: "16px",
    fontSize: "24px",
    margin: "28px 0 16px ",
  },
  closeButtonPosition: {
    position: "absolute",
    top: "8px",
    right: "24px",
    zIndex: 3,
  },
  closeIcons: {
    minWidth: "0 !important",
    borderRadius: "50% !important",
    padding: "6px !important",
    "&:hover": {
      backgroundColor: "#e5e5e5",
    },
  },
  itemBtn: {
    padding: "0 48px 0 16px !important",
    "&:hover": {
      backgroundColor: "transparent !important",
    },
    "& span": {
      fontSize: "24px",
    },
    "& ~ div": {
      right: "0 !important",
    },
  },
  iconJordan: {
    paddingLeft: "8px",
    display: "flex",
    alignItems: "center",
    marginTop: "16px",
    "& p": {
      paddingLeft: "12px",
      margin: 0,
    },
  },
  content: {
    marginTop: "106px",
    fontSize: "20px",
    color: "#757575",
  },
  listBtn: {
    display: "flex",
  },
  btnCustom: {
    textDecoration: "none",
    "&:nth-child(1)": {
      "& button": {
        borderRadius: "50px !important",
        backgroundColor: "black !important",
        color: "#fff",
        border: "1px solid #000",
        "&:hover": {
          border: "1px solid #757575",
          backgroundColor: "#757575 !important",
        },
      },
    },
    "&:nth-child(2)": {
      "& button": {
        borderRadius: "50px !important",
        border: "1px solid #fff",
        marginLeft: "10px",
        "&:hover": {
          border: "1px solid #000",
        },
      },
    },
  },
  listToolBox: {
    marginTop: "50px",
  },
  itemNextPanelBtn: {
    padding: "0px 16px !important",
    "& div:nth-child(2)": {
      minWidth: 0,
    },
    "&:hover": {
      backgroundColor: "transparent !important",
    },
    "& span": {
      color: "#757575",
      textTransform: "capitalize",
    },
    "& svg": {
      color: "#757575",
    },
  },
  customLink: {
    textDecoration: "none",
  },
}));

const data = [
  {
    title: "Men",
    data: [
      {
        title: "new & featured",
        data: [
          { linkTitle: "new releases", link: "/" },
          { linkTitle: "SNKRS launch calendar", link: "/" },
          { linkTitle: "member access", link: "/" },
          { linkTitle: "air force 1", link: "/" },
          { linkTitle: "summer essentials", link: "/" },
          { linkTitle: "basic essentials", link: "/" },
          { linkTitle: "football club kits", link: "/" },
          { linkTitle: "sustainable materials", link: "/" },
          { linkTitle: "top picks under 2,300,000đ", link: "/" },
          { linkTitle: "last sizes available", link: "/" },
          { linkTitle: "sale", link: "/" },
        ],
      },
      {
        title: "shoes",
        data: [
          { linkTitle: "newest sneakers", link: "/" },
          { linkTitle: "all shoes", link: "/" },
          { linkTitle: "lifestyle", link: "/" },
          { linkTitle: "running", link: "/" },
          { linkTitle: "basketball", link: "/" },
          { linkTitle: "jordan", link: "/" },
          { linkTitle: "football", link: "/" },
          { linkTitle: "gym and training", link: "/" },
          { linkTitle: "skateboarding", link: "/" },
          { linkTitle: "tennis", link: "/" },
          { linkTitle: "sandals and slides", link: "/" },
          { linkTitle: "customise with nike by you", link: "/" },
          { linkTitle: "all sale shoes", link: "/" },
        ],
      },
      {
        title: "clothing",
        data: [
          { linkTitle: "all clothing", link: "/" },
          { linkTitle: "tops and t-shirts", link: "/" },
          { linkTitle: "jerseys and kits", link: "/" },
          { linkTitle: "hoodies and sweatshirts", link: "/" },
          { linkTitle: "jackets and gilets", link: "/" },
          { linkTitle: "pants and leggings", link: "/" },
          { linkTitle: "tracksuits", link: "/" },
          { linkTitle: "compression and base layer", link: "/" },
          { linkTitle: "shorts", link: "/" },
          { linkTitle: "caps", link: "/" },
          { linkTitle: "socks", link: "/" },
          { linkTitle: "bags and backpacks", link: "/" },
          { linkTitle: "accessories and equipment", link: "/" },
          { linkTitle: "all sale clothing", link: "/" },
        ],
      },
      {
        title: "shop by sport",
        data: [
          { linkTitle: "running", link: "/" },
          { linkTitle: "football", link: "/" },
          { linkTitle: "basketball", link: "/" },
          { linkTitle: "gym and training", link: "/" },
          { linkTitle: "yoga", link: "/" },
          { linkTitle: "skateboarding", link: "/" },
          { linkTitle: "tennis", link: "/" },
          { linkTitle: "golf", link: "/" },
        ],
      },
      {
        title: "shop by brand",
        data: [
          { linkTitle: "nike sportswear", link: "/" },
          { linkTitle: "NikeLab", link: "/" },
          { linkTitle: "Nike By You", link: "/" },
          { linkTitle: "Jordan", link: "/" },
          { linkTitle: "ACG", link: "/" },
          { linkTitle: "NBA", link: "/" },
          { linkTitle: "nike SB", link: "/" },
        ],
      },
      {
        title: "icons",
        data: [
          { linkTitle: "air force 1", link: "/" },
          { linkTitle: "pegasus", link: "/" },
          { linkTitle: "blazer", link: "/" },
          { linkTitle: "air jordan 1", link: "/" },
          { linkTitle: "air max", link: "/" },
        ],
      },
    ],
  },
  {
    title: "Women",
    data: [
      {
        title: "new & featured",
        data: [
          { linkTitle: "new releases", link: "/" },
          { linkTitle: "SNKRS launch calendar", link: "/" },
          { linkTitle: "member access", link: "/" },
          { linkTitle: "air force 1", link: "/" },
          { linkTitle: "summer essentials", link: "/" },
          { linkTitle: "performance essentials", link: "/" },
          { linkTitle: "bra and legging dous", link: "/" },
          { linkTitle: "sustainabel materials", link: "/" },
          { linkTitle: "top picks under 2,300,000đ", link: "/" },
          { linkTitle: "last sizes availabel", link: "/" },
          { linkTitle: "sale", link: "/" },
        ],
      },
      {
        title: "shoes",
        data: [
          { linkTitle: "all shoes", link: "/" },
          { linkTitle: "lifestyle", link: "/" },
          { linkTitle: "running", link: "/" },
          { linkTitle: "gym and training", link: "/" },
          { linkTitle: "jordan", link: "/" },
          { linkTitle: "football", link: "/" },
          { linkTitle: "basketball", link: "/" },
          { linkTitle: "skateboarding", link: "/" },
          { linkTitle: "tennis", link: "/" },
          { linkTitle: "sandals and slides", link: "/" },
          { linkTitle: "customise with nike by you", link: "/" },
          { linkTitle: "all sale shoes", link: "/" },
        ],
      },
      {
        title: "clothing",
        data: [
          { linkTitle: "all clothing", link: "/" },
          { linkTitle: "performance essentials", link: "/" },
          { linkTitle: "sports bras", link: "/" },
          { linkTitle: "tops and T-shirts", link: "/" },
          { linkTitle: "hoodies and sweatshirts", link: "/" },
          { linkTitle: "jackets and gilets", link: "/" },
          { linkTitle: "pants and leggings", link: "/" },
          { linkTitle: "tracksuits", link: "/" },
          { linkTitle: "compression and base layer", link: "/" },
          { linkTitle: "short", link: "/" },
          { linkTitle: "skirts and dresses", link: "/" },
          { linkTitle: "jerseys and kits", link: "/" },
          { linkTitle: "modest wear", link: "/" },
          { linkTitle: "plus size", link: "/" },
          { linkTitle: "caps", link: "/" },
          { linkTitle: "socks", link: "/" },
          { linkTitle: "bags and backpacks", link: "/" },
          { linkTitle: "accessories and equipment", link: "/" },
          { linkTitle: "all sale clothing", link: "/" },
        ],
      },
      {
        title: "shop by sport",
        data: [
          { linkTitle: "running", link: "/" },
          { linkTitle: "gym and training", link: "/" },
          { linkTitle: "yoga", link: "/" },
          { linkTitle: "football", link: "/" },
          { linkTitle: "basketball", link: "/" },
          { linkTitle: "skateboarding", link: "/" },
          { linkTitle: "tennis", link: "/" },
          { linkTitle: "golf", link: "/" },
        ],
      },
      {
        title: "shop by brand",
        data: [
          { linkTitle: "nike sportswear", link: "/" },
          { linkTitle: "nikeLab", link: "/" },
          { linkTitle: "nike by you", link: "/" },
          { linkTitle: "jordan", link: "/" },
          { linkTitle: "ACG", link: "/" },
          { linkTitle: "NBA", link: "/" },
          { linkTitle: "nike SB", link: "/" },
        ],
      },
      {
        title: "icons",
        data: [
          { linkTitle: "air force 1", link: "/" },
          { linkTitle: "pegasus", link: "/" },
          { linkTitle: "blazer", link: "/" },
          { linkTitle: "air jordan 1", link: "/" },
          { linkTitle: "air max", link: "/" },
        ],
      },
    ],
  },
  {
    title: "Kids",
    data: [
      {
        title: "new & featured",
        data: [
          { linkTitle: "new releases", link: "/" },
          { linkTitle: "member access", link: "/" },
          { linkTitle: "air force 1", link: "/" },
          { linkTitle: "summer essentials", link: "/" },
          { linkTitle: "bags and backpacks", link: "/" },
          { linkTitle: "jordan", link: "/" },
          { linkTitle: "last sizes available", link: "/" },
          { linkTitle: "sale", link: "/" },
        ],
      },
      {
        title: "boys` shoes",
        data: [
          { linkTitle: "older kids (3-6.5)", link: "/" },
          { linkTitle: "younger kids (10-2.5)", link: "/" },
          { linkTitle: "baby and toddler (1.5-9.5)", link: "/" },
          { linkTitle: "lifestyle", link: "/" },
          { linkTitle: "running", link: "/" },
          { linkTitle: "basketball", link: "/" },
          { linkTitle: "jordan", link: "/" },
          { linkTitle: "football", link: "/" },
          { linkTitle: "sandals and slides", link: "/" },
          { linkTitle: "all shoes", link: "/" },
        ],
      },
      {
        title: "boy`s clothing",
        data: [
          { linkTitle: "tops and t-shirts", link: "/" },
          { linkTitle: "hoodies and sweatshirts", link: "/" },
          { linkTitle: "pants and leggings", link: "/" },
          { linkTitle: "shorts", link: "/" },
          { linkTitle: "all boys` clothing", link: "/" },
        ],
      },
      {
        title: "girls` shoes",
        data: [
          { linkTitle: "older kids (3-6.5)", link: "/" },
          { linkTitle: "younger kids (10-2.5)", link: "/" },
          { linkTitle: "baby and toddler (1.5-9.5)", link: "/" },
          { linkTitle: "lifestyle", link: "/" },
          { linkTitle: "running", link: "/" },
          { linkTitle: "basketball", link: "/" },
          { linkTitle: "football", link: "/" },
          { linkTitle: "sandals and slides", link: "/" },
          { linkTitle: "all shoes", link: "/" },
        ],
      },
      {
        title: "girls`s clothing",
        data: [
          { linkTitle: "tops and t-shirts", link: "/" },
          { linkTitle: "sports bras", link: "/" },
          { linkTitle: "hoodies and sweatshirts", link: "/" },
          { linkTitle: "pants and leggings", link: "/" },
          { linkTitle: "shorts", link: "/" },
          { linkTitle: "all girls` clothing", link: "/" },
        ],
      },
      {
        title: "accessories and equipment",
        data: [
          { linkTitle: "Balls", link: "/" },
          { linkTitle: "bags and backpacks", link: "/" },
          { linkTitle: "socks", link: "/" },
          { linkTitle: "hats and headwear", link: "/" },
        ],
      },
      {
        title: "shop by sport",
        data: [
          { linkTitle: "running", link: "/" },
          { linkTitle: "football", link: "/" },
          { linkTitle: "basketball", link: "/" },
          { linkTitle: "gym and training", link: "/" },
          { linkTitle: "tennis", link: "/" },
        ],
      },
    ],
  },
  {
    title: "Customise",
    data: [
      {
        title: "Featured",
        data: [{ linkTitle: "nike by you new releases", link: "/" }],
      },
      {
        title: "nike by you",
        data: [
          { linkTitle: "men", link: "/" },
          { linkTitle: "women", link: "/" },
        ],
      },
      {
        title: "by sport",
        data: [
          { linkTitle: "lifestyle", link: "/" },
          { linkTitle: "running", link: "/" },
          { linkTitle: "basketball", link: "/" },
          { linkTitle: "football", link: "/" },
        ],
      },
      {
        title: "icons",
        data: [
          { linkTitle: "air max", link: "/" },
          { linkTitle: "air force 1", link: "/" },
          { linkTitle: "free", link: "/" },
          { linkTitle: "flyknit", link: "/" },
        ],
      },
    ],
  },
  {
    title: "Sale",
    data: [
      {
        title: "featured",
        data: [{ linkTitle: "shop all sale", link: "/" }],
      },
      {
        title: "men`s sale",
        data: [
          { linkTitle: "shoes", link: "/" },
          { linkTitle: "clothing", link: "/" },
          { linkTitle: "accessories and equipment", link: "/" },
        ],
      },
      {
        title: "women`s sale",
        data: [
          { linkTitle: "shoes", link: "/" },
          { linkTitle: "clothing", link: "/" },
          { linkTitle: "accessories and eqquipment", link: "/" },
        ],
      },
      {
        title: "kids` sale",
        data: [
          { linkTitle: "shoes", link: "/" },
          { linkTitle: "clothing", link: "/" },
          { linkTitle: "accessories and eqquipment", link: "/" },
        ],
      },
    ],
  },
  { title: "SNKTS" },
];
const MobileMenu = (props: Props) => {
  const { active, toggle } = props;
  const classes = useStyles();
  const [panel, setPanel] = useState(0);
  const [secondMenu, setSecondMenu] = useState<secondMenuMobile[]>();
  const [title, setTitle] = useState<string>();
  const [secondTitle, setSecondTitle] = useState<string>();
  const [thirdMenu, setThirdMenu] = useState<dataSecondMenuMobile[]>();
  const dispatch=useAppDispatch()

  const handleClickItem = (v: menuMobile) => {
    setTitle(v.title);
    setSecondMenu(v.data);
    setPanel(panel + 1);
  };
  const handleClickItemSecond = (v: secondMenuMobile) => {
    setThirdMenu(v.data);
    setSecondTitle(v.title);
    setPanel(panel + 1);
  };
  const onCloseMenu = () => {
    toggle(false);
    setPanel(0);
  };
  const isLogin = useAppSelector(selectIsLoggedIn);
  const userName = useAppSelector(selectUserName);
  const handleLogout = () => {
    dispatch(LoginActions.logout());
  };
  return (
    <Drawer anchor={"right"} open={active} onClose={onCloseMenu}>
      <div className={classes.root}>
        <div
          className={classes.container}
          style={{
            left: `calc(0% - calc(${panel} * 100%))`,
          }}
        >
          <div className={classes.panel}>
            <div className={classes.closeButtonPosition}>
              <Button
                className={classes.closeIcons}
                onClick={() => toggle(false)}
              >
                <CloseIcon />
              </Button>
            </div>

            <List>
              {isLogin && <ListItem
                disablePadding
                secondaryAction={
                  <IconButton>
                    <ChevronRightIcon />
                  </IconButton>
                }
                sx={{
                  display: "flex !important",
                  alignItems: "center",
                  marginBottom: "20px",
                }}
              >
                <ListItemButton className={classes.itemBtn}>
                  <Link
                    style={{
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                    }}
                    to="/profile"
                  >
                    <AccountCircleIcon />
                    <ListItemText
                      sx={{
                        paddingLeft: "5px",
                        "& span": { fontSize: "17px" },
                      }}
                      primary={`Hi, ${userName}`}
                    />
                  </Link>
                </ListItemButton>
              </ListItem>}
              {data.map((item, index: number) => {
                return (
                  <ListItem
                    key={index}
                    disablePadding
                    onClick={() => handleClickItem(item)}
                    secondaryAction={
                      <IconButton>
                        {item.data && <ChevronRightIcon />}
                      </IconButton>
                    }
                  >
                    <ListItemButton className={classes.itemBtn}>
                      <ListItemText primary={item.title} />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
            <div className={classes.iconJordan}>
              <svg height="30px" width="30px" fill="#111" viewBox="0 0 26 32">
                <path d="M14.4 5.52v-.08q0-.56.36-1t.92-.44 1 .36.48.96-.36 1-.96.4l-.24.08.08.12-.08.44-.16 1.28q.08.08.08.16l-.16.8q-.08.16-.16.24l-.08.32q-.16.64-.28 1.04t-.2.64V12q-.08.4-.12.64t-.28.8q-.16.32 0 1.04l.08.08q0 .24.2.56t.2.56q.08 1.6-.24 2.72l.16.48q.96.48.56 1.04l.4.16q.96.48 1.36.84t.8.76q.32.08.48.24l.24.08q1.68 1.12 3.36 2.72l.32.24v.08l-.08.16.24.16h.08q.24.16.32.16h.08q.08 0 .16-.08l.16-.08q.16-.16.32-.24h.32q.08 0 0 .08l-.32.16-.4.48h.56l.56.08q.24-.08.4-.16l.4-.24q.24-.08.48.16h.08q.08.08-.08.24l-.96.88q-.4.32-.72.4l-1.04.72q-.08.08-.16 0l-.24-.32-.16-.32-.2-.28-.24-.32-.2-.24-.16-.2-.32-.24q-.16 0-.32-.08l-1.04-.8q-.24 0-.56-.24-1.2-1.04-1.6-1.28l-.48-.32-.96-.16q-.48-.08-1.28-.48l-.64-.32q-.64-.32-.88-.32l-.32-.16q-.32-.08-.48-.16l-.16-.16q-.16 0-.32.08l-1.6.8-2 .88q-.8.64-1.52 1.04l-.88.4-1.36.96q-.16.16-.32 0l-.16.16q-.24.08-.32.08l-.32.16v.16h-.16l-.16.24q-.16.32-.32.36t-.2.12-.08.12l-.16.16-.24.16-.36-.04-.48.08-.32.08q-.4.08-.64-.12t-.4-.6q-.16-.24.16-.4l.08-.08q.08-.08.24-.08h.48L1.6 26l.32-.08q0-.16.08-.24.08-.08.24-.08v-.08q-.08-.16-.08-.32-.08-.16-.04-.24t.08-.08h.04l.08.24q.08.4.24.24l.08-.16q.08-.16.24-.16l.16.16.16-.16-.08-.08q0-.08.08-.08l.32-.32q.4-.48.96-.88 1.12-.88 2.4-1.36.4-.4.88-.4.32-.56.96-1.2.56-.4.8-.56.16-.32.4-.32H10l.16-.16q.16-.08.24-.16v-.4q0-.4.08-.64t.4-.24l.32-.32q-.16-.32-.16-.72h-.08q-.16-.24-.16-.48-.24-.4-.32-.64h-.24q-.08.24-.4.32l-.08.16q-.32.56-.56.84t-.88.68q-.4.4-.56.88-.08.24 0 .48l-.08.16h.08q0 .16.08.16h.08q.16.08.16.2t-.24.08-.36-.16-.2-.12l-.24.24q-.16.24-.32.2t-.08-.12l.08-.08q.08-.16 0-.16l-.64.16q-.08.08-.2 0t.04-.16l.4-.16q0-.08-.08-.08-.32.16-.64.08l-.4-.08-.08-.08q0-.08.08-.08.32.08.8-.08l.56-.24.64-.72.08-.16q.32-.64.68-1.16t.76-.84l.08-.32q.16-.32.32-.56t.4-.64l.24-.32q.32-.48.72-.48l.24-.24q.08-.08.08-.24l.16-.16-.08-.08q-.48-.4-.48-.72-.08-.56.36-.96t.88-.36.68.28l.16.16q.08 0 .08.08l.32.16v.24q.16.16.16.24.16-.24.48-.56l.4-1.28q0-.32.16-.64l.16-.24v-.16l.24-.96h.16l.24-.96q.08-.24 0-.56l-.32-.8z"></path>
              </svg>
              <p>Jordan</p>
            </div>
            <p className={classes.content}>
              Become a Nike Member for the best products, inspiration and
              stories in sport. Learn more
            </p>
            {!isLogin && (
              <div className={classes.listBtn}>
                <Link to="/signup" className={classes.btnCustom}>
                  <Button variant="contained">Join Us</Button>
                </Link>
                <Link to="/login" className={classes.btnCustom}>
                  <Button variant="contained">Sign In</Button>
                </Link>
              </div>
            )}
            {isLogin && (
              <div className={classes.listBtn}>
                <Button onClick={handleLogout} variant="contained" className={classes.btnCustom} sx={{backgroundColor:'#000',color:'#fff',marginTop:'10px'}}>
                  Logout
                </Button>
              </div>
            )}
            <div className={classes.listToolBox}>
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <WorkOutlineIcon />
                    </ListItemIcon>
                    <ListItemText primary="Bag" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <CheckBoxOutlineBlankIcon />
                    </ListItemIcon>
                    <ListItemText primary="Oders" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <HelpOutline />
                    </ListItemIcon>
                    <ListItemText primary="Help" />
                  </ListItemButton>
                </ListItem>
              </List>
            </div>
          </div>
          {/* second panel */}
          {secondMenu && (
            <div className={classes.panel}>
              <Button
                sx={{
                  padding: "0 16px",
                  minWidth: 0,
                }}
                disableRipple={true}
                variant="outlined"
                startIcon={<ChevronLeftIcon />}
                onClick={() => setPanel(0)}
              >
                All
              </Button>

              <p className={classes.titleMenu}>{title}</p>
              <List>
                {secondMenu?.map((item: secondMenuMobile, index: number) => {
                  console.log(item);
                  return (
                    <ListItem key={index} disablePadding>
                      <ListItemButton
                        onClick={() => handleClickItemSecond(item)}
                        className={classes.itemNextPanelBtn}
                      >
                        <ListItemText primary={item.title} />
                        <ListItemIcon>
                          {item.data && <ChevronRightIcon />}
                        </ListItemIcon>
                      </ListItemButton>
                    </ListItem>
                  );
                })}
              </List>
            </div>
          )}
          {/* third panel */}
          {thirdMenu && (
            <div className={classes.panel}>
              <Button
                sx={{
                  padding: "0 16px",
                  minWidth: 0,
                }}
                disableRipple={true}
                variant="outlined"
                startIcon={<ChevronLeftIcon />}
                onClick={() => setPanel(panel - 1)}
              >
                {title}
              </Button>
              <p className={classes.titleMenu}> {secondTitle}</p>
              <List>
                {thirdMenu?.map((item: any, index: number) => {
                  return (
                    <ListItem key={index} disablePadding>
                      <Link to="/products" className={classes.customLink}>
                        <ListItemButton
                          onClick={onCloseMenu}
                          className={classes.itemNextPanelBtn}
                        >
                          <ListItemText primary={item.linkTitle} />
                        </ListItemButton>
                      </Link>
                    </ListItem>
                  );
                })}
              </List>
            </div>
          )}
        </div>
      </div>
    </Drawer>
  );
};

export default MobileMenu;

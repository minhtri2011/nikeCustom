import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

import ButtonCustom from "component/common/ButtonCustom";
import Title from "component/common/Title";

interface Props {
  img1: string;
  button1: string;
  link1: string;
  img2: string;
  button2: string;
  link2: string;
  img3: string;
  button3: string;
  link3: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: "0px 48px 0",
    [theme.breakpoints.down("md")]: {
      margin: "0px 0 0 24px",
    },
  },
  listItems: {
    transition: "all .2s linear",
    display: "flex",
    gap: "12px",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      overflowX: "auto",
      scrollSnapType: "x mandatory",
      paddingBottom: "30px",
      "&:hover": {
        color: "rgb(0, 0, 0, 0)",
      },
    },
    color: "rgba(0,0, 0, 0)",
    "&::-webkit-scrollbar": {
      height: "8px",
      appearance: "none",
    },
    "&::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0)",
    },
    "&::-webkit-scrollbar-thumb": {
      borderRadius: "50px",
      backgroundColor: "inherit",
      boxShadow: "inset 0 0 0 20px",
    },
    "&:hover": {
      color: "rgb(0, 0, 0, .6)",
    },
    "& > div": {
      position: "relative",
      scrollSnapAlign: "start",
      width: "100%",
      [theme.breakpoints.down("md")]: {
        flexShrink: 0,
        width: "80vw",
      },
      "& img": {
        display: "block",
        width: "100%",
        height: "100%",
        objectFit:'cover',
      },
    },
  },
  btnPosition: {
    position: "absolute",
    bottom: "48px",
    left: "48px",
    [theme.breakpoints.down("md")]: {
      bottom: "24px",
      left: "24px",
    },
  },
}));

const TripleImg = (props: Props) => {
    const {
       img1,button1,link1, 
       img2,button2,link2, 
       img3,button3,link3 
    }=props
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.listItems}>
        <div>
          <img src={img1} alt="nike" />
          <div className={classes.btnPosition}>
            <ButtonCustom link={link1} value={button1} />
          </div>
        </div>
        <div>
          <img src={img2} alt="nike" />
          <div className={classes.btnPosition}>
            <ButtonCustom link={link2} value={button2} />
          </div>
        </div>
        <div>
          <img src={img3} alt="nike" />
          <div className={classes.btnPosition}>
            <ButtonCustom link={link3} value={button3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripleImg;

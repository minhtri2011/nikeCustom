import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import img from "assest/moreNike1.jpg";
import img2 from "assest/moreNike2.jpg";
import img3 from "assest/moreNike3.jpg";
import ButtonCustom from "component/common/ButtonCustom";
import Title from "component/common/Title";

interface Props {}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: "84px 48px 0",
    [theme.breakpoints.down("md")]: {
      margin: "84px 0 0 24px",
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
      height: "100%",
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

const MoreNike = (props: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Title title="More Nike" />
      <div className={classes.listItems}>
        <div>
          <img src={img} alt="nike" />
          <div className={classes.btnPosition}>
            <ButtonCustom link="/products" value="Men`s" />
          </div>
        </div>
        <div>
          <img src={img2} alt="nike" />
          <div className={classes.btnPosition}>
            <ButtonCustom link="/products" value="Women`s" />
          </div>
        </div>
        <div>
          <img src={img3} alt="nike" />
          <div className={classes.btnPosition}>
            <ButtonCustom link="/products" value="Kid`s" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreNike;

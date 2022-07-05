import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import img1 from "assest/featured1.jpg";
import img2 from "assest/featured2.jpg";
import ButtonCustom from "component/common/ButtonCustom";
import ContainerCustom from "component/common/ContainerCustom";
import Title from "component/common/Title";

interface Props {}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    height: "700px",
    gap: "12px",
    [theme.breakpoints.down("md")]: {
      height: "500px",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      height: "auto",
    },
    "& > div": {
      position: "relative",
      "&:nth-child(2)": {
        "& h4": {
          color: "white",
        },
      },
      "& img": {
        objectPosition: "50% 50%",
        objectFit: "cover",
        width: "100%",
        height: "100%",
      },
    },
  },
  content: {
    position: "absolute",
    bottom: "48px",
    left: "48px",
    [theme.breakpoints.down("md")]: {
      bottom: "24px",
      left: "24px",
    },
    "& h4": {
      fontWeight: 500,
      marginBottom: "8px",
      fontSize: "20px",
      width: "calc(100% - 48px)",
    },
  },
  positionBtn: {
    marginTop: "24px",
  },
}));

const Featured = (props: Props) => {
  const classes = useStyles();
  return (
    <ContainerCustom mgt={true}>
      <Title title="Featured" />
      <div className={classes.root}>
        <div>
          <img src={img1} alt="nike" />
          <div className={classes.content}>
            <h4>Newest Styles of the Season</h4>
            <div className={classes.positionBtn}>
              <ButtonCustom value="Shop" black={true} />
            </div>
          </div>
        </div>
        <div>
          <img src={img2} alt="nike" />
          <div className={classes.content}>
            <h4>Perfect for Picnics and Garden Parties</h4>
            <div className={classes.positionBtn}>
              <ButtonCustom value="Shop" />
            </div>
          </div>
        </div>
      </div>
    </ContainerCustom>
  );
};

export default Featured;

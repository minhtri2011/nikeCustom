import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

import ButtonCustom from "component/common/ButtonCustom";
import ContainerCustom from "component/common/ContainerCustom";
import Title from "component/common/Title";

interface Props {
  title: string;
  img1: string;
  img2: string;
  content1: string;
  content2: string;
  button1: string;
  link1: string;
  button2: string;
  link2: string;
}

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
      width:'100%',
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

const DoubleImgWithTitle = (props: Props) => {
  const {
    img1,
    img2,
    title,
    content1,
    content2,
    button1,
    button2,
    link1,
    link2,
  }=props;
  const classes = useStyles();
  return (
    <ContainerCustom mgt={true}>
      <Title title={title} />
      <div className={classes.root}>
        <div>
          <img src={img1} alt="nike" />
          <div className={classes.content}>
            <h4>{content1}</h4>
            <div className={classes.positionBtn}>
              <ButtonCustom link={link1} value={button1} black={true} />
            </div>
          </div>
        </div>
        <div>
          <img src={img2} alt="nike" />
          <div className={classes.content}>
            <h4>{content2}</h4>
            <div className={classes.positionBtn}>
              <ButtonCustom link={link2} value={button2} />
            </div>
          </div>
        </div>
      </div>
    </ContainerCustom>
  );
};

export default DoubleImgWithTitle;

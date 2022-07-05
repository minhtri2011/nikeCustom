import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import banner from "assest/homeBanner.jpg";
import Caption from "component/common/Caption";
import ContainerCustom from "component/common/ContainerCustom";
interface Props {}

const useStyles = makeStyles((theme: Theme) => ({
  img: {
    display: "block",
    cursor: "pointer",
    width:'100%',
    height:'100%',
  },
}));
const Banner = (props: Props) => {
  const classes = useStyles();
  return (
    <ContainerCustom>
      <img src={banner} alt="nike" className={classes.img} />
      <Caption
        title={`LOOKS GOOD. RUNS GOOD. \nFEELS GOOD.`}
        content="A smooth ride with an endless amount of comfort, the Nike React Infinity Run Flyknit 3 is the first step towards your best run yet."
        button="shop"
      />
    </ContainerCustom>
  );
};

export default Banner;

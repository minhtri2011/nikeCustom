import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import trending from "assest/hometrending.jpg";
import trendingMini from "assest/hometrendingMini.jpg";
import Caption from "component/common/Caption";
import ContainerCustom from "component/common/ContainerCustom";
import Title from "component/common/Title";
import useCheckBreakpoints from "hooks/useCheckBreakpoints";

interface Props {}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "block",
    width: "100%",
    height: "100%",
  },
}));

const Trending = (props: Props) => {
  const classes = useStyles();
  const breakpoints = useCheckBreakpoints();
  return (
    <ContainerCustom mgt={true}>
      <Title title="Trending" />
      <img
        className={classes.root}
        src={breakpoints === "sm" ? trendingMini : trending}
        alt="nike"
      />
      <Caption
        miniTitle="Summer Essentials"
        title="NEVER DONE SUMMERING"
        content="Play. Let loose. Repeat. This season, turn it up in styles made for living life to the max."
        button="Shop"
      />
    </ContainerCustom>
  );
};

export default Trending;

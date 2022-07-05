import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

type Props = {
  children?: JSX.Element | JSX.Element[];
  mgt?: boolean;
};
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: "0 48px",
    [theme.breakpoints.down("md")]: {
      margin: "0 24px",
    },
    "&.spacing": {
      marginTop: "84px",
    },
  },
}));

const ContainerCustom = (props: Props) => {
  const { mgt } = props;
  const classes = useStyles();
  return (
    <div className={`${classes.root}${mgt ? " spacing" : ""}`}>
      {props.children}
    </div>
  );
};

export default ContainerCustom;

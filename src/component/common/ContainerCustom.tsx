import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

type Props = {
  children?: JSX.Element | JSX.Element[];
  mgb?: boolean;
  mgt?: boolean;
};
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: "0 48px",
    [theme.breakpoints.down("md")]: {
      margin: "0 24px",
    },
    "&.mgb": {
      marginBottom: "84px",
    },
    "&.mgt": {
      marginTop: "84px",
    },
  },
}));

const ContainerCustom = (props: Props) => {
  const { mgt,mgb } = props;
  const classes = useStyles();
  return (
    <div className={`${classes.root}${mgt ? " mgt" : ""}${mgb ? " mgb" : ""}`}>
      {props.children}
    </div>
  );
};

export default ContainerCustom;

import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ContainerCustom from "component/common/ContainerCustom";
import Filter from "component/svg/filter";
import useCheckMaxBreakpoints from "hooks/useCheckMaxBreakpoints";
import SortButton from "./SortButton";

interface Props {
  setOpen: () => void;
  open: boolean;
  productsLength: number;
}
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      justifyContent: "left",
    },
    "& h1": {
      color: "#111",
      fontSize: "24px",
      fontWeight: "normal",
      [theme.breakpoints.down("md")]: {
        fontSize: "20px",
      },
    },
  },
  toolBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  hideButton: {
    cursor: "pointer",
    outline: "none",
    border: "none",
    backgroundColor: "transparent",
    display: "flex",
    alignItems: "center",
    fontSize: "16px",
    paddingRight: "25px",
    color: "#111",
    "& span": {
      paddingRight: "10px",
    },
  },
}));

const FilterBar = (props: Props) => {
  const classes = useStyles();
  const { setOpen, open, productsLength } = props;
  const breakpoints = useCheckMaxBreakpoints(950);
  return (
    <ContainerCustom mgt={true}>
      <div className={classes.root}>
        <h1>
          All Products
          {breakpoints && <span>({productsLength})</span>}
        </h1>

        {breakpoints && (
          <div className={classes.toolBox}>
            <button className={classes.hideButton} onClick={setOpen}>
              <span>{open ? "Hide" : "Show"} filters</span>
              <Filter />
            </button>
            <SortButton />
          </div>
        )}
      </div>
    </ContainerCustom>
  );
};

export default FilterBar;

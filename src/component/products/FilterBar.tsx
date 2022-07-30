import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ContainerCustom from "component/common/ContainerCustom";
import Filter from "component/svg/filter";
import useCheckMaxBreakpoints from "hooks/useCheckMaxBreakpoints";
import useCheckScrollToTopElement from "hooks/useCheckScrollToTopElement";
import { useEffect, useRef, useState } from "react";
import { useScrollDirection } from "react-use-scroll-direction";
import SortButton from "./SortButton";

interface Props {
  setOpen: () => void;
  open: boolean;
  productsLength: number;
  sort: string;
  setSort: React.Dispatch<React.SetStateAction<string>>;
}
const useStyles = makeStyles((theme: Theme) => ({
  filterContainer: {
    height: "40px",
  },
  root: {
    zIndex: 3,
    display: "flex",
    backgroundColor: "#fff",
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
      transition: "transform .15s",      
      transformOrigin: "left",
      [theme.breakpoints.down("md")]: {
        fontSize: "20px",
      },
    },
    "&.fixed": {
      position: "fixed",
      top: 0,
      left: 0,
      padding: "0 48px",
      transition:'transform .15s ease',
      [theme.breakpoints.down("md")]:{
        padding:'0 24px',
      },
      "& h1": {
        transform: "scale(.75)",
      },
      "&.show": {
        transform: "translateY(60px)",
      },
    },
  },
  toolBox: {
    zIndex:3,
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
  const { sort, setSort } = props;
  const classes = useStyles();
  const { setOpen, open, productsLength } = props;
  const breakpoints = useCheckMaxBreakpoints(950);
  const filterBar = useRef(null);
  const checkScroll = useCheckScrollToTopElement(filterBar);
  const [direction, setDirection] = useState<string>("");
  const { scrollDirection } = useScrollDirection();
  useEffect(() => {
    if (
      (scrollDirection !== null && scrollDirection === "UP") ||
      scrollDirection === "DOWN"
    ) {
      setDirection(scrollDirection);
    }
  }, [scrollDirection]);
  return (
    <ContainerCustom mgt={true}>
      <div ref={filterBar} className={classes.filterContainer}>
        <div
          className={`${classes.root}${checkScroll ? " fixed" : ""}${
            checkScroll ? (direction === "UP" ? " show" : "") : ""
          }`}
        >
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
              <SortButton sort={sort} setSort={setSort} />
            </div>
          )}
        </div>
      </div>
    </ContainerCustom>
  );
};

export default FilterBar;

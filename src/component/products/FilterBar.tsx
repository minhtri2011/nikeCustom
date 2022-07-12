import { Product } from "models/products";
import React, { useEffect, useState } from "react";
import { Skeleton, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ContainerCustom from "component/common/ContainerCustom";
import Filter from "component/svg/filter";
import SortButton from "./SortButton";

interface Props {
  products: Product[];
  setOpen: () => void;
  open: boolean;
}
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    "& h1": {
      color: "#111",
      fontSize: "24px",
      fontWeight: "normal",
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
  const { products, setOpen, open } = props;

  // const handleChangeFilterPanel = () => {
  //   console.log(activeSearch);
  // }
  // useEffect(() => {
  //   console.log(activeSearch);
  // }, [activeSearch]);

  return (
    <ContainerCustom mgt={true}>
      <div className={classes.root}>
        {products.length ? (
          <h1>
            All Products <span>({products.length})</span>
          </h1>
        ) : (
          <Skeleton>
            <h1>
            All Products <span>(000)</span>
            </h1>
          </Skeleton>
        )}
        <div className={classes.toolBox}>
          <button className={classes.hideButton} onClick={setOpen}>
            <span>{open ? "Hide" : "Show"} filters</span>
            <Filter />
          </button>
          <SortButton />
        </div>
      </div>
    </ContainerCustom>
  );
};

export default FilterBar;

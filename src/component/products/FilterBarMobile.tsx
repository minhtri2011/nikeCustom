import { Divider, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ContainerCustom from "component/common/ContainerCustom";
import { filter } from "pages/Products/Products";
import React from "react";

interface Props {
  productsLength: number;
  setFiltter: React.Dispatch<
    React.SetStateAction<{
      typeProduct: string[];
      gender: string[];
      listColor: string[];
    }>
  >;
  filter: filter;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  scrollTool: {
    display: "flex",
    overflowY: "auto",
    marginTop: "20px",
    "& p": {
      flexShrink: 0,
      padding: "0 16px 18px",
      "&:first-child": {
        paddingLeft: 0,
      },
      "&:last-child": {
        paddingRight: 0,
      },
    },
  },
}));

const FilterBarMobile = (props: Props) => {
  const classes = useStyles();
  const { productsLength ,filter,setFiltter} = props;
  const menu = [
    "Shoes",
    "Sports Bras",
    "Tops & T-Shirts",
    "Hoodies & SweathiAts",
    "Jackets & Gilets",
    "Trousers & Tights",
    "Shorts",
    "Compression & Baseslayer",
    "Tracksuits",
    "Jumpsuits & Rompers",
    "Skirts & Dresses",
    "Socks",
    "Accessories & Equipment",
  ];
  const handleFilterTypeProduct = (key: string, value: string) => {
    setFiltter({ ...filter, [key]: [value] });
  };
  return (
    <ContainerCustom>
      <div className={classes.scrollTool}>
        {menu.map((item, index) => {
          return <p key={index} onClick={() => handleFilterTypeProduct("typeProduct", item)}>{item}</p>;
        })}
      </div>
      <Divider />
    </ContainerCustom>
  );
};

export default FilterBarMobile;

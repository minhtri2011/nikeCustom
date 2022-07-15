import { useAppSelector } from "app/hooks";
import Result from "component/products/Result";
import FilterBar from "component/products/FilterBar";
import { selectDataProductReducer } from "pages/Dashboard/Product/module/ProductSlice";
import React, { useEffect, useState } from "react";
import FilterBarMobile from "component/products/FilterBarMobile";

interface Props {}

export interface filter {
  typeProduct: string[];
  gender: string[];
  listColor: string[];
}
const Products = (props: Props) => {
  const products = useAppSelector(selectDataProductReducer);
  const [open, setOpen] = React.useState(true);
  const handleToggleOpen = () => {
    setOpen(!open);
  };

  const getProducts = useAppSelector(selectDataProductReducer).map(
    (product: any) => {
      return {
        ...product,
        listColor: product.imgDetails.reduce((acc: any, pro: any) => {
          return pro.color.replace(/[/]/g, " ");
        }, ""),
      };
    }
  );
  const [filter, setFiltter] = useState<filter>({
    typeProduct: [],
    gender: [],
    listColor: [],
  });

  const getValue = (value: string) =>
    typeof value === "string" ? value.toUpperCase() : value;
  const filterPlainArray = (array: any, filters: any) => {
    const filterKeys = Object.keys(filters);
    return array.filter((item: any) => {
      return filterKeys.every((key) => {
        if (!filters[key].length) return true;
        return filters[key].find((filter: any) => {
          return getValue(item[key]).includes(getValue(filter));
        });
      });
    });
  };
  const listProduct = filterPlainArray(getProducts, filter);
  const productsLength = listProduct.length;
  return (
    <>
      <FilterBar
        productsLength={productsLength}
        open={open}
        setOpen={handleToggleOpen}
      />
      <FilterBarMobile
        filter={filter}
        setFiltter={setFiltter}
        productsLength={productsLength}
      />
      <Result
        filter={filter}
        listProduct={listProduct}
        setFiltter={setFiltter}
        open={open}
        setOpen={setOpen}
      />
    </>
  );
};

export default Products;

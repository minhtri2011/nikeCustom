import { useAppSelector } from "app/hooks";
import FilterBar from "component/products/FilterBar";
import Result from "component/products/Result";
import { Product } from "models/products";
import { selectDataProductReducer } from "pages/Dashboard/Product/module/ProductSlice";
import { useState } from "react";

interface Props {}

export interface filter {
  typeProduct: string[];
  gender: string[];
  listColor: string[];
}
const Products = (props: Props) => {
  const [open, setOpen] = useState(true);
  const [sort, setSort] = useState("");
  const [filter, setFiltter] = useState<filter>({
    typeProduct: [],
    gender: [],
    listColor: [],
  });
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

  //check search products
  const getValue = (value: string) =>
    typeof value === "string" ? value.toUpperCase() : value;

  const filterPlainArray = (array: any, filters: any) => {
    const filterKeys = Object.keys(filters);
    // console.log(filters);

    return array.filter((item: any) => {
      return filterKeys.every((key) => {
        if (!filters[key].length) return true;
        if (key !== "gender") {
          return filters[key].find((filter: any) => {
            return getValue(item[key]).includes(getValue(filter));
          });
        } else {
          return filters[key].find((filter: any) => {
            return getValue(item[key]) === getValue(filter);
          });
        }
      });
    });
  };

  const handleSort = () => {
    switch (sort) {
      case "Price: High-Low":
        return filterPlainArray(getProducts, filter).sort(
          (a: Product, b: Product) => b.price - a.price
        );
      case "Price: Low-High":
        return filterPlainArray(getProducts, filter).sort(
          (a: Product, b: Product) => a.price - b.price
        );
      default:
        return filterPlainArray(getProducts, filter);
    }
  };
  const listProduct = handleSort();
  const productsLength = listProduct.length;

  return (
    <>
      <FilterBar
        productsLength={productsLength}
        open={open}
        setOpen={handleToggleOpen}
        sort={sort}
        setSort={setSort}
      />
      <Result
        filter={filter}
        listProduct={listProduct}
        setFiltter={setFiltter}
        open={open}
        setOpen={setOpen}
        productsLength={productsLength}
      />
    </>
  );
};

export default Products;

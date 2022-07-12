import { useAppSelector } from "app/hooks";
import Result from "component/products/Result";
import FilterBar from "component/products/FilterBar";
import { selectDataProductReducer } from "pages/Dashboard/Product/module/ProductSlice";
import React from "react";

interface Props {}

const Products = (props: Props) => {
  const products = useAppSelector(selectDataProductReducer);
  const [open, setOpen] = React.useState(true);
  const handleToggleOpen=()=>{
    setOpen(!open);
  }
  return (
    <>
      <FilterBar open={open} products={products} setOpen={handleToggleOpen}/>
      <Result open={open} setOpen={setOpen}/>
    </>
  );
};

export default Products;

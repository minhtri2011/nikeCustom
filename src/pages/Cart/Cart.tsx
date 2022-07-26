import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useAppSelector } from "app/hooks";
import CartBody from "component/cart/CartBody";
import { cartCreate } from "models/cart";
import React, { useEffect } from "react";
import { selectDataCart } from "./module/cartSlice";

interface Props {}

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
}));
const Cart = (props: Props) => {
  const classes = useStyles();
  const cart = useAppSelector(selectDataCart);
  return (
    <>
      <CartBody />
    </>
  );
};

export default Cart;

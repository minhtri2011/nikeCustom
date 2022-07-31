import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Divider, Grid, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import oderApi from "api/oderApi";
import { useAppDispatch, useAppSelector } from "app/hooks";
import Paypal from "component/paypal/Paypal";
import { cartCreate } from "models/cart";
import {
  CartActions,
  selectDataCart,
  selectTotalCart,
} from "pages/Cart/module/cartSlice";
import { selectIsLoggedIn } from "pages/Login/module/LoginSlice";
import React, { ChangeEvent } from "react";
import Swal from "sweetalert2";
import { getToken } from "ultis/getToken";

type Props = {};
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: "0 20px",
    display: "flex",
    maxWidth: "1100px",
    margin: "40px auto 0",
  },
  topTitle: {
    fontSize: "22px",
    fontWeight: "normal",
  },
  cardProduct: {
    paddingTop: "30px",
    display: "flex",
    "& img": {
      width: "150px",
      aspectRatio: "1/1",
      marginRight: "30px",
      marginBottom: "30px",
      [theme.breakpoints.down("md")]: {
        marginRight: "10px",
        width: "100px",
        height: "100px",
      },
    },
    "& > div": {
      "& p:nth-child(2)": {
        color: "#7e7e7e",
        textTransform: "capitalize",
      },
      "& p:nth-child(3)": {
        color: "#7e7e7e",
        textTransform: "capitalize",
      },
    },
  },
  label: {
    color: "#7e7e7e",
  },
  select: {
    boxShadow: "none",
    border: "none",
    outline: "none",
    cursor: "pointer",
    paddingLeft: "5px",
    color: "#7e7e7e",
    fontSize: "16px",
  },
  icon: {
    cursor: "pointer",
    paddingLeft: "10px",
    "& svg": {
      fill: "black",
    },
    "&:hover svg": {
      fill: "#7e7e7e",
    },
  },
  flex: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
  },
  listTools: {
    display: "flex",
    marginTop: "30px",
  },
  titleSummary: {
    fontWeight: "normal",
    fontSize: "22px",
    paddingBottom: "20px",
  },
  flextotal: {
    display: "flex",
    justifyContent: "space-between",
    paddingBottom: "12px",
  },
  paypal: {
    display: "flex",
    justifyContent: "center",
    "& >div": {
      width: "100%",
    },
  },
}));

const CartBody = (props: Props) => {
  const classes = useStyles();
  const cart = useAppSelector(selectDataCart);
  const total = useAppSelector(selectTotalCart);
  const dispatch = useAppDispatch();
  const listQuantity = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const token = getToken();
  const handleDelete = (product: cartCreate) => {
    dispatch(CartActions.deleteProduct(product));
  };
  const isLogin = useAppSelector(selectIsLoggedIn);
  const handleChange = (
    e: ChangeEvent<HTMLSelectElement>,
    value: cartCreate
  ) => {
    const action = {
      size: e.target.value,
      id: value.id,
    };
    dispatch(CartActions.changeSize(action));
  };
  const handleChangeQuantity = (
    e: ChangeEvent<HTMLSelectElement>,
    value: cartCreate
  ) => {
    const action = {
      quantity: +e.target.value,
      id: value.id,
    };
    dispatch(CartActions.changeQuantity(action));
  };
  const buyProduct = async () => {
    const products = cart.map((item: cartCreate) => {
      return {
        quantity: item.quantity,
        name: item.name,
        price: item.price,
        size: item.size,
        img: item.img,
        color: item.color,
      };
    });
    const data = { products: products };
    try {
      const response = await oderApi.create(data, token);
      dispatch(CartActions.paymentSuccess());
      Swal.fire({
        title: "Success!",
        text: "product payment successful",
        icon: "success",
        showConfirmButton: false,
        timer: 2000,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const cardProduct = (value: cartCreate) => {
    // const token = getToken();
    return (
      <div className={classes.cardProduct}>
        <img src={value.img} alt="nike" />
        <div className={classes.flex}>
          <div>
            <p>{value.name}</p>
            <p>
              {value.gender} {value.typeProduct}
            </p>
            <p>{value.color}</p>
            <label className={classes.label}>Size</label>
            <select
              className={classes.select}
              value={value.size}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                handleChange(e, value)
              }
            >
              {value.sizes.map((size: any, index: number) => {
                return (
                  <option key={index} value={size.size}>
                    {size.size}
                  </option>
                );
              })}
            </select>
            <label className={classes.label}>Quantity</label>
            <select
              className={classes.select}
              value={value.quantity}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                handleChangeQuantity(e, value)
              }
            >
              {listQuantity.map((item: number) => {
                return (
                  <option key={item} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
            <div className={classes.listTools}>
              {/* <button onClick={() => handleDelete(value)}>delete</button> */}
              <div className={classes.icon}>
                <FavoriteBorderIcon />
              </div>
              <div className={classes.icon} onClick={() => handleDelete(value)}>
                <DeleteForeverIcon />
              </div>
            </div>
          </div>
          <p>{(value.quantity * value.price).toLocaleString()}₫</p>
        </div>
      </div>
    );
  };
  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item lg={8} xs={12}>
          <h4 className={classes.topTitle}>Bag</h4>
          {cart.length === 0 && <h5>There are no items in your bag.</h5>}
          {cart?.map((product: cartCreate, index: number) => {
            return (
              <div key={product.id}>
                {cardProduct(product)}
                <Divider />
              </div>
            );
          })}
        </Grid>
        <Grid item lg={4} xs={12}>
          <h4 className={classes.titleSummary}>Summary</h4>
          <div className={classes.flextotal}>
            <span>Subtotal</span>
            <span>{total.toLocaleString()}₫</span>
          </div>
          <div className={classes.flextotal}>
            <span>Estimated Delivery & Handling</span>
            <span>0₫</span>
          </div>
          <Divider />
          <div style={{ paddingTop: "12px" }} className={classes.flextotal}>
            <span>Total</span>
            <span>{total.toLocaleString()}₫</span>
          </div>
          <Divider />
          <p>{total > 0 && isLogin && total} </p>
          <Box pt={"30px"} className={classes.paypal}>
            <Paypal
              onsuccess={buyProduct}
              amount={(total / 23000).toFixed(2)}
              disable={total > 0 && isLogin ? false : true}
            />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default CartBody;

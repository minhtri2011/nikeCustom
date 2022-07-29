import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useAppDispatch, useAppSelector } from "app/hooks";
import ContainerCustom from "component/common/ContainerCustom";
import MemberNav from "component/common/MemberNav";
import { userOder, userOrderProduct } from "models/oder";
import moment from "moment";
import { useEffect } from "react";
import {
  OrderUserAction,
  selectorOrderUserData,
} from "./module/OrderUserSlice";

type Props = {};
const useStyles = makeStyles((theme: Theme) => ({
  listProducts: {
    margin: "50px 0",
    "& h3": {
      fontWeight: "normal",
      marginBottom: "20px",
    },
  },
  productCard: {
    marginBottom: "20px",
    display: "flex",
    "& img": {
      marginRight: "20px",
      width: "150px",
      height: "150px",
      objectFit: "cover",
    },
  },
}));

const OrdersUser = (props: Props) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(OrderUserAction.fetchUserOrder());
  }, [dispatch]);
  const dataFromRedux = useAppSelector(selectorOrderUserData);
  const data = [...dataFromRedux];
  return (
    <>
      <MemberNav />
      <ContainerCustom mgt mgb>
        {data
          ?.reverse()
          .map((item: userOder) => {
            return (
              <div className={classes.listProducts} key={item._id}>
                <h3>
                  Order date: {moment(item.createdAt).format("DD-MM-YYYY")}
                </h3>
                {item.products.map((product: userOrderProduct) => {
                  return (
                    <div key={product._id} className={classes.productCard}>
                      <img alt={product.name} src={product.img} />
                      <div>
                        <p>{product.name}</p>
                        <p>Size: {product.size}</p>
                        <p>Price: {product.price.toLocaleString()}đ</p>
                        <p>Your order is being shipped</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
      </ContainerCustom>
    </>
  );
};

export default OrdersUser;

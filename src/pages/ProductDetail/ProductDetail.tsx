import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import productApi from "api/productApi";
import ContainerCustom from "component/common/ContainerCustom";
import Detail from "component/ProductDetail/Detail";
import ListCard from "component/ProductDetail/ListCard";
import SlideProduct from "component/ProductDetail/SlideProduct";
import useCheckMaxBreakpoints from "hooks/useCheckMaxBreakpoints";
import useCheckMinBreakpoints from "hooks/useCheckMinBreakpoints";
import { img, Product,imgDetails } from "models/products";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getToken } from "ultis/getToken";

type Props = {};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginBottom:'40px',
    display: "flex",
    [theme.breakpoints.down("md")]: {
      display: "block",
      marginBottom:0
    },
  },
}));

const ProductDetail = (props: Props) => {
  const classes = useStyles();
  const { id } = useParams();
  const token = getToken();
  const [product, setProduct] = useState<Product>();
  const [listCard, setListCard] = useState<imgDetails | undefined>();
  const breakpoint = useCheckMinBreakpoints(950);
  useEffect(() => {
    (async () => {
      try {
        const res = await productApi.getById(id as string, token);
        setProduct(res as Product);
        setListCard(res?.imgDetails[0] as imgDetails);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <ContainerCustom>
      <div className={classes.root}>
        {breakpoint ? (
          <SlideProduct data={product as Product} listCard={listCard}/>
        ) : (
          <ListCard data={listCard} />
        )}
        <Detail listCard={listCard} setListCard={setListCard} data={product as Product} />
      </div>
    </ContainerCustom>
  );
};

export default ProductDetail;

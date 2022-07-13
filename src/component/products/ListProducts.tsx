import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useAppSelector } from "app/hooks";
import { AnimateSharedLayout, motion } from "framer-motion";
import { Product } from "models/products";
import { selectDataProductReducer } from "pages/Dashboard/Product/module/ProductSlice";
import React, { useState } from "react";
interface Props {
  listProduct: Product[];
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    gap: "16px",
  },
  card: {
    cursor: "pointer",
    width: "calc((100% - 32px) / 3)",
    [theme.breakpoints.down("md")]: {
      width: "calc((100% - 16px) / 2)",
    },
    "& img": {
      width: "100%",
      aspectRatio: "1/1",
      borderRadius: "10px",
      objectFit: "cover",
    },
    "& > p": {
      "&:nth-child(2)": {
        fontSize: "16px",
        color: "#111",
      },
      "&:nth-child(3)": {
        fontSize: "16px",
        color: "#757575",
      },
      "&:nth-child(4)": {
        fontSize: "16px",
        color: "#757575",
      },
      "&:nth-child(5)": {
        fontSize: "16px",
        color: "#111",
      },
    },
  },
}));

const ListProducts = (props: Props) => {
  const { listProduct } = props;
  const classes = useStyles();
  return (
    // <AnimateSharedLayout>
    <motion.div layout className={classes.root}>
      {listProduct?.map((product: Product) => {
        return (
          <motion.div
            layout
            transition={{ duration: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0 }}
            exit={{ opacity: 0, scale: 0 }}
            className={classes.card}
            key={product._id}
          >
            <img src={product.img} alt="nike" />
            <p>{product.name}</p>
            <p>
              {product.gender} {product.typeProduct}
            </p>
            <p>{product.imgDetails.length} Colour</p>
            <p>{product.price.toLocaleString()}₫</p>
          </motion.div>
        );
      })}
    </motion.div>
    //  </AnimateSharedLayout>
  );
};

export default ListProducts;

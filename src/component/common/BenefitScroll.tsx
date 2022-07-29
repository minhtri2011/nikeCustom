import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useAppSelector } from "app/hooks";
import { Product } from "models/products";
import { selectDataProductReducer } from "pages/Dashboard/Product/module/ProductSlice";
import { Link } from "react-router-dom";
import benefit1 from "assest/benefit1.jpg";
import benefit2 from "assest/benefit2.jpg";
import benefit3 from "assest/benefit3'.jpg";
import benefit4 from "assest/benefit4.jpg";
import benefit5 from "assest/benefit5.jpg";

interface Props {}

const useStyles = makeStyles((theme: Theme) => ({
  listProducts: {
    display: "flex",
    overflowX: "auto",
    gap: "50px",
    scrollSnapType: "x mandatory",
    color: "rgba(0,0, 0, 0)",
    paddingBottom: "30px",
    transition: "color .2s ease-in-out",
    "&::-webkit-scrollbar": {
      height: "8px",
      appearance: "none",
    },
    "&::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0)",
    },
    "&::-webkit-scrollbar-thumb": {
      borderRadius: "50px",
      backgroundColor: "inherit",
      boxShadow: "inset 0 0 0 20px",
    },
    "&:hover": {
      color: "rgb(0, 0, 0, .6)",
    },
  },
  productCard: {
    listStyle: "none",
    scrollSnapAlign: "start",
    flexShrink: 0,
    minWidth: "300px",
    minHeight: "300px",
    width: "calc(100% /3)",
  },
  productImg: {
    width: "100%",
    aspectRatio: "16/9",
    display: "block",
    objectFit: "cover",
  },
  inforProduct: {
    display: "flex",
    cursor: "pointer",
    justifyContent: "space-between",
    margin: "20px 0 18px 0",
    "& h4": {
      color: "#000",
      fontWeight: "normal",
      fontSize:'18px',
    },
  },
}));

const data = [
  { img: benefit1, title: "Member-Only Products" },
  { img: benefit2, title: "Free Returns With Every Order" },
  { img: benefit3, title: "Exclusive Deals" },
  { img: benefit4, title: "Free Running and Training Apps" },
  { img: benefit5, title: "Nike Events" },
];

const BenefitScroll = (props: Props) => {
  const classes = useStyles();

  const renderProductCard = () => {
    return data.map((product, index) => {
      return (
        <li className={classes.productCard} key={index}>
          <img
            className={classes.productImg}
            src={product.img}
            alt={product.img}
          />
          <div className={classes.inforProduct}>
            <h4>{product.title}</h4>
          </div>
        </li>
      );
    });
  };

  return <ul className={classes.listProducts}>{renderProductCard()}</ul>;
};

export default BenefitScroll;

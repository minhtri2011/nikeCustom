import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useAppSelector } from "app/hooks";
import ContainerCustom from "component/common/ContainerCustom";
import MemberNav from "component/common/MemberNav";
import { favoriteProduct } from "models/user";
import { selectUserFavorites } from "pages/Login/module/LoginSlice";
import React from "react";
import { Link } from "react-router-dom";

type Props = {};
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gap: "20px",
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "repeat(2,1fr)",
    },
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "repeat(1,1fr)",
    },
  },
  card: {
    textDecoration: "none",
    color: "#000",
    "& img": {
      width: "100%",
      aspectRatio: "1/1",
      objectFit: "cover",
    },
    "& p": {
      "&:nth-child(3)": {
        textTransform: "capitalize",
      },
    },
  },
}));

const Favorites = (props: Props) => {
  const classes = useStyles();
  const favoriteProducts = useAppSelector(selectUserFavorites);
  const renderListFavorites = () => {
    return (
      <>
        <div className={classes.root}>
          {favoriteProducts.map((item: favoriteProduct, index: number) => {
            return (
              <Link
                to={`/detail/${item.productId}`}
                className={classes.card}
                key={index}
              >
                <img src={item.img} alt="nike" />
                <p>{item.name}</p>
                <p>{item.color}</p>
                <p>{item.price.toLocaleString()}đ</p>
              </Link>
            );
          })}
        </div>
      </>
    );
  };
  return (
    <>
      <MemberNav />
      <ContainerCustom mgt mgb>
        {favoriteProducts && favoriteProducts.length > 0 ? (
          renderListFavorites()
        ) : (
          <p style={{textAlign: 'center'}}>Items added to your Favourites will be saved here.</p>
        )}
      </ContainerCustom>
    </>
  );
};

export default Favorites;

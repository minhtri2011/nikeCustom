import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Skeleton,
  Theme,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import useCheckElementAtBottomScreen from "hooks/useCheckElementAtBottomScreen";
import useCheckMinBreakpoints from "hooks/useCheckMinBreakpoints";
import { img, imgDetails, Product, sizes } from "models/products";
import React, { useRef, useState } from "react";
import { CartActions } from "pages/Cart/module/cartSlice";
import { useAppDispatch } from "app/hooks";
import { v4 as uuid } from "uuid";
import userApi from "api/userApi";
import { getToken } from "ultis/getToken";
import { favoriteProduct, favoriteProducts } from "models/user";
import Swal from "sweetalert2";

interface Props {
  data: Product;
  setListCard: React.Dispatch<React.SetStateAction<imgDetails | undefined>>;
  listCard: imgDetails | undefined;
}
const useStyles = makeStyles((theme: Theme) => ({
  container: {
    padding: "4px 48px 0 24px",
    margin: "48px 8px 0 0",
    width: "456px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      padding: "0",
      margin: 0,
    },
  },
  name: {
    fontSize: "28px",
    fontWeight: "normal",
  },
  type: {
    fontSize: "16px",
    lineHeight: "1.5",
    fontWeight: "normal",
    textTransform: "capitalize",
  },
  saleOff: {
    display: "inline-block",
    marginTop: "12px",
    "& span": {
      marginRight: "12px",
      "&:nth-child(2)": {
        textDecoration: "line-through",
        color: "#7e7e7e",
      },
      "&:nth-child(3)": {
        color: "rgb(18, 138, 9)",
      },
    },
  },
  sizes: {
    marginTop: "64px",
    marginBottom: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& span": {
      "&:nth-child(2)": {
        color: "#7e7e7e",
      },
    },
  },
  listSizes: {
    display: "grid",
    gridTemplateColumns: "repeat(5,1fr)",
    gap: "7px",
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "repeat(3,1fr)",
    },
  },
  sizeItem: {
    height: "48px",
    backgroundColor: "#fff",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "rgb(229 229 229) 0px 0px 0px 1px",
    cursor: "pointer",
    "&:hover": {
      boxShadow: "rgb(17 17 17) 0px 0px 0px 1px inset",
    },
    "&.active": {
      boxShadow: "rgb(17 17 17) 0px 0px 0px 1px inset",
    },
  },
  btnPosition: {
    height: "54px",
  },
  btn: {
    padding: "18px 24px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "12px",
    outline: "none",
    borderRadius: "50px",
    cursor: "pointer",
    backgroundColor: "#000",
    color: "#fff",
    fontSize: "16px",
    border: "1px solid #000",
    transition: "all .15s ease",
    "&:hover": {
      backgroundColor: "#757575",
      border: "1px solid #757575",
      [theme.breakpoints.down("md")]: {
        backgroundColor: "#000",
      },
    },
    "&.white": {
      backgroundColor: "#fff",
      color: "#000",
      border: "1px solid #ccc",
      "&:hover": {
        backgroundColor: "#fff",
        border: "1px solid #000",
        [theme.breakpoints.down("md")]: {
          border: "1px solid #ccc",
        },
      },
      "& > svg": {
        paddingLeft: "8px",
      },
    },
    "&.fixed": {
      position: "fixed",
      bottom: "0px",
      left: 0,
      borderRadius: 0,
      zIndex: 2,
    },
  },
  description: {
    lineHeight: 1.75,
    marginTop: "48px",
  },
  listDes: {
    marginLeft: "16px",
    padding: "32px 0 24px",
  },
  viewDetail: {
    display: "inline-block",
    borderBottom: "1px solid #000",
    marginBottom: "42px",
  },
  listImg: {
    display: "grid",
    gap: "10px",
    gridTemplateColumns: "repeat(5,1fr)",
    marginTop: "24px",
    "& img": {
      cursor: "pointer",
      width: "100%",
      display: "block",
      aspectRatio: "1/1",
      objectFit: "cover",
    },
    [theme.breakpoints.down("md")]: {
      margin: 0,
    },
  },
  deliveryContent: {
    padding: "0 !important",
    "& p:nth-child(4)": {
      marginTop: "24px",
    },
  },
  reviews: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    "& span:nth-child(2)": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  reviewsContent: {
    padding: "0 !important",
    "& div": {
      marginBottom: "40px",
      "& p:nth-child(2)": {
        display: "flex",
        alignItems: "center",
        paddingBottom: "8px",
        "& span": {
          display: "flex",
          alignItems: "center",
          "& svg": {
            fontSize: "15px",
          },
          "&:nth-child(2)": {
            paddingLeft: "16px",
          },
        },
      },
    },
  },
}));

const Detail = (props: Props) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const { data, setListCard, listCard } = props;
  const [size, setSize] = useState<string>();
  const breakpoint = useCheckMinBreakpoints(950);
  const btnBuy = useRef(null);
  const checkScrollToBtn = useCheckElementAtBottomScreen(btnBuy);
  const handleChangeListCardImg = (value: imgDetails) => {
    setListCard(value);
  };
  const handleSetSize = (value: string) => {
    setSize(value);
  };
  const handleAddFavorites = async () => {
    const token = getToken();
    const dataUpload: favoriteProduct = {
      productId: data._id || "",
      name: data.name || "",
      price: data.price || 0,
      size: size || "",
      img: data.img || "",
      color: listCard?.color || "",
      quantity: 1,
      message: data.message || "",
      sizes: [null],
    };
    try {
      const res = await userApi.addFavoriteProducts(dataUpload, token);
    } catch (error) {
      console.log(error);
    }
  };
  const handleAddCartBag = () => {
    const id = uuid();
    const dataUpload = {
      id: id,
      quantity: 1,
      name: data.name || "",
      price: data.price || 0,
      size: size || "",
      img: data.img || "",
      color: listCard?.color || "",
      sizes: data.sizes || [],
      typeProduct: data.typeProduct || "",
      gender: data.gender || "",
    };
    Swal.fire({
      title: "Thank you!",
        text: "Successful add to cart",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
    });
    dispatch(CartActions.addToCart(dataUpload));
    setSize("");
  };
  const lazyTitle = () => {
    return (
      <>
        <Skeleton>
          <h1 className={classes.name}>Nike Air Force 1 React 1</h1>
        </Skeleton>
        <Skeleton>
          <h2 className={classes.type}>Male Shoes</h2>
        </Skeleton>
        <div className={classes.saleOff}>
          <Skeleton>
            <span>3,519,000₫</span>
          </Skeleton>
        </div>
      </>
    );
  };
  const lazyImgColor = () => {
    return (
      <div className={classes.listImg}>
        <Skeleton
          width={"100%"}
          style={{ transform: "none", aspectRatio: "1/1" }}
        />
        <Skeleton
          width={"100%"}
          style={{ transform: "none", aspectRatio: "1/1" }}
        />
        <Skeleton
          width={"100%"}
          style={{ transform: "none", aspectRatio: "1/1" }}
        />
      </div>
    );
  };
  const lazySizeTitle = () => {
    return (
      <div className={classes.listSizes}>
        <Skeleton
          width={"100%"}
          style={{ transform: "none", aspectRatio: "1/1" }}
        />
        <Skeleton
          width={"100%"}
          style={{ transform: "none", aspectRatio: "1/1" }}
        />
        <Skeleton
          width={"100%"}
          style={{ transform: "none", aspectRatio: "1/1" }}
        />
        <Skeleton
          width={"100%"}
          style={{ transform: "none", aspectRatio: "1/1" }}
        />
        <Skeleton
          width={"100%"}
          style={{ transform: "none", aspectRatio: "1/1" }}
        />
        <Skeleton
          width={"100%"}
          style={{ transform: "none", aspectRatio: "1/1" }}
        />
        <Skeleton
          width={"100%"}
          style={{ transform: "none", aspectRatio: "1/1" }}
        />
        <Skeleton
          width={"100%"}
          style={{ transform: "none", aspectRatio: "1/1" }}
        />
        <Skeleton
          width={"100%"}
          style={{ transform: "none", aspectRatio: "1/1" }}
        />
        <Skeleton
          width={"100%"}
          style={{ transform: "none", aspectRatio: "1/1" }}
        />
      </div>
    );
  };
  const lazyBtn = () => {
    return (
      <>
        <Skeleton width={"100%"} style={{ transform: "none" }}>
          <button className={`${classes.btn} white`}>
            Favourite <FavoriteBorderIcon />
          </button>
        </Skeleton>
        <Skeleton width={"100%"} style={{ transform: "none" }}>
          <button className={`${classes.btn} white`}>
            Favourite <FavoriteBorderIcon />
          </button>
        </Skeleton>
      </>
    );
  };
  const sortSizes = () => {
    const sortData = [...data?.sizes];
    return sortData
      .sort((a: sizes, b: sizes) => +a.size - +b.size)
      .map((item: sizes, index: number) => {
        return (
          <div
            className={`${classes.sizeItem}${
              size === item.size ? " active" : ""
            }`}
            key={index}
            onClick={() => handleSetSize(item.size)}
          >
            {item.size}
          </div>
        );
      });
  };
  return (
    <div className={classes.container}>
      {data ? (
        <>
          {!breakpoint && (
            <>
              <h1 className={classes.name}>{data.name}</h1>
              <h2 className={classes.type}>
                {data.gender} {data.typeProduct}
              </h2>
              <div className={classes.saleOff}>
                <span>{data.price.toLocaleString()}₫</span>
                <span>{(data.price * 1.2).toLocaleString()}₫</span>
                <span>20% off</span>
              </div>
            </>
          )}
          <div className={classes.listImg}>
            {data.imgDetails.map((img: imgDetails) => {
              return (
                <img
                  onClick={() => handleChangeListCardImg(img)}
                  src={img.imgs[0].img}
                  key={img._id}
                  alt="nike"
                />
              );
            })}
          </div>
          <div className={classes.sizes}>
            <span>Select Size</span>
            <span>Size Guide</span>
          </div>
          <div className={classes.listSizes}>{sortSizes()}</div>
          <div className={classes.btnPosition} ref={btnBuy}>
            <button
              disabled={Boolean(size) ? false : true}
              onClick={() => handleAddCartBag()}
              className={`${classes.btn}${
                breakpoint ? (checkScrollToBtn ? "" : " fixed") : ""
              }`}
            >
              Add to Bag
            </button>
          </div>
          <button
            disabled={Boolean(size) ? false : true}
            className={`${classes.btn} white`}
            onClick={() => handleAddFavorites()}
          >
            Favourite <FavoriteBorderIcon />
          </button>
          <p className={classes.description}>{data.description}</p>
          <ul className={classes.listDes}>
            <li>Colour Shown: Barely Green/Mint Foam/Volt/Cave Purple</li>
            <li>Style: DH4071-301</li>
          </ul>
          <p className={classes.viewDetail}>View Product Details</p>
          <Divider />
          <Accordion disableGutters={true} sx={{ boxShadow: "none" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{ fontSize: "20px", padding: "16px 0 16px 0" }}
            >
              Free Delivery and Returns
            </AccordionSummary>
            <AccordionDetails className={classes.deliveryContent}>
              <p>
                Your order of 5.000.000₫ or more gets free standard delivery.
              </p>
              <ul className={classes.listDes}>
                <li>Standard delivered 4-5 Business Days</li>
                <li>Express delivered 2-4 Business Days</li>
              </ul>
              <p>
                Orders are processed and delivered Monday-Friday (excluding
                public holidays)
              </p>
              <p>
                Nike Members enjoy <u>free returns</u>
              </p>
            </AccordionDetails>
          </Accordion>
          <Divider />
          <Accordion disableGutters={true} sx={{ boxShadow: "none" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{ fontSize: "20px", padding: "16px 0 16px 0" }}
            >
              <div className={classes.reviews}>
                <span>Reviews (2)</span>
                <span>
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarHalfIcon />
                </span>
              </div>
            </AccordionSummary>
            <AccordionDetails className={classes.reviewsContent}>
              <div>
                <p>The Peg is Back!</p>
                <p>
                  <span>
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </span>
                  <span>Sam C. - 12 Jul 2022</span>
                </p>
                <p>
                  I've been longing for the Pegasus of old to return where you
                  can feel snappy, yet supported through the long run. The new
                  39 is definitely one that brings back the nostalgia and I'm
                  excited to keep putting miles of any kind on my pair.
                </p>
              </div>
              <div>
                <p>Amazing Update to the Pegasus</p>
                <p>
                  <span>
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </span>
                  <span>Jeremy M. - 12 Jul 2022</span>
                </p>
                <p>
                  Loving the updates to the Pegs. Over the last few years, the
                  Peg's outsole has been a little too tapered for me to really
                  love it fully. In the updated 39, there's a wider foot bed and
                  cushioning, so much more coverage from heel to toe. Fit of the
                  upper is great, sometimes I'll forget I'm wearing a shoe
                  mid-run. A lot of weight was taken off the shoe, without
                  sacrificing any cushioning. Definitely putting the Peg back
                  into my consistent rotation.
                </p>
              </div>
            </AccordionDetails>
          </Accordion>
          <Divider />
        </>
      ) : (
        <>
          {lazyTitle()}
          {lazyImgColor()}
          <div className={classes.sizes}>
            <span>Select Size</span>
            <span>Size Guide</span>
          </div>
          {lazySizeTitle()}
          {lazyBtn()}
        </>
      )}
    </div>
  );
};

export default Detail;

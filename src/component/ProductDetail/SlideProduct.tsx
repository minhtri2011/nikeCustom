import { Skeleton, Theme } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { makeStyles } from "@mui/styles";
import { img, imgDetails, Product } from "models/products";
import React, { useRef } from "react";
import Slider from "react-slick";
import useCheckMinBreakpoints from "hooks/useCheckMinBreakpoints";

interface Props {
  data: Product;
  listCard: imgDetails | undefined 
}
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: "60px",
  },
  card: {
    outline: "none",
    display: "block",
    width: "100%",
    aspectRatio: "923/1154",
    overflow: "hidden",
    "& img": {
      width: "100%",
      height: "100%",
      display: "block",
      objectFit: "contain",
    },
  },
  prevArrow: {
    left: "10px",
    position: "absolute",
    top: "50%",
    zIndex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    backgroundColor: "#fff",
    height: "40px",
    width: "40px",
    transform: "translateY(-50%)",
  },
  nextArrow: {
    right: "10px",
    position: "absolute",
    top: "50%",
    zIndex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    backgroundColor: "#fff",
    height: "40px",
    width: "40px",
    transform: "translateY(-50%)",
  },
  lazyCard: {
    width: "100% !important",
    height: "100% !important",
    transform: "none !important",
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
    marginBottom: "12px",
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
}));

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};
function SampleNextArrow(props: any) {
  const { onClick } = props;
  const classes = useStyles();
  return (
    <div className={classes.nextArrow} onClick={onClick}>
      <ChevronRightIcon />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { onClick } = props;
  const classes = useStyles();
  return (
    <div className={classes.prevArrow} onClick={onClick}>
      <ChevronLeftIcon />
    </div>
  );
}
const SlideProduct = (props: Props) => {
  const { data, listCard } = props;
  const classes = useStyles();
  const renderLazyCard = () => {
    const content = [];
    for (let i = 0; i < 3; i++) {
      content.push(
        <div className={classes.card} key={i}>
          <Skeleton className={classes.lazyCard} />
        </div>
      );
    }
    return content;
  };
  const renderLazyDetail = () => {
    return (
      <>
        <h1 className={classes.name}>Nike Air Force 1 React 1</h1>
        <h2 className={classes.type}>Male Shoes</h2>
        <div className={classes.saleOff}>3,519,000₫</div>
      </>
    );
  };
  return (
    <div className={classes.root}>
      {data ? (
        <>
          <h1 className={classes.name}>{data?.name}</h1>
          <h2 className={classes.type}>
            {data?.gender} {data?.typeProduct}
          </h2>
          <div className={classes.saleOff}>
            <span>{data?.price.toLocaleString()}₫</span>
            <span>{(data?.price * 1.2).toLocaleString()}₫</span>
            <span>20% off</span>
          </div>
        </>
      ) : (
        renderLazyDetail()
      )}
      <Slider {...settings}>
        {listCard
          ? listCard.imgs.map((card: img, index: number) => {
              return (
                <div className={classes.card} key={index}>
                  <img src={card.img} alt="nike" />
                </div>
              );
            })
          : renderLazyCard()}
      </Slider>
    </div>
  );
};

export default SlideProduct;

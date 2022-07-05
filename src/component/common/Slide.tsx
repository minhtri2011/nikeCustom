import { makeStyles } from "@mui/styles";
import React from "react";
import Slider from "react-slick";

type Props = {};

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: "hidden",
    width: "100%",
    backgroundColor: "#f5f5f5",
    padding:'10px 0 4px',
    "& span": {
      fontSize: "16px",
      margin: '0 auto',
      display:'block',
      textAlign: "center",
    },
    "& p": {
      margin: 0,
      textAlign: "center",
      fontSize:'12px'
    },
  },
}));
const Slide = (props: Props) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe:false,
    autoplay:true,
    autoplayspeed:5000,
    pauseOnHover:false,
  };
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Slider {...settings}>
        <div>
          <span>20 - 25 June: New Arrivals</span>
          <p>
            Stay ahead with exclusive access to the season`s newest styles, only
            on the Nike App.{" "}
          </p>
        </div>
        <div>
          <span>Save Up to 40%</span>
          <p>Shop All Our New Markdowns</p>
        </div>
        <div>
          <span>Free Delivery</span>
          <p>Applies to orders of 5.000.000₫ or more. </p>
        </div>
      </Slider>
    </div>
  );
};

export default Slide;

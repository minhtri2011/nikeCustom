import Header from "component/header/Header";
import React from "react";
import Slide from "component/Slide";
import SingleItem from "component/SingleItem";
import banner from "assest/home/banner.jpg";
import DoubleItems from "component/DoubleItems";
// import firstImg from 'assest/home/Annotation.png'
// import secondImg from 'assest/home/Annotation2.png'
type Props = {};

const Home = (props: Props) => {
  // const doubleData=[
  //   {img:firstImg, title:'Nike App Exclusive: Get first dibs on the season’s latest arrivals.',button:'Learn more'},
  //   {img:secondImg, title:'Restocked: The AF1 `07. Only on the Nike App.',button:'Shop'},
  // ]
  return (
    <>
      <Header />
      <Slide />
      {/* <SingleItem
        banner={banner}
        title="peace through any pose"
        content="Nike Yoga Soul Festival Collection"
      /> */}
      {/* <DoubleItems data={doubleData} titleComponent='trending'/> */}
    </>
  );
};

export default Home;

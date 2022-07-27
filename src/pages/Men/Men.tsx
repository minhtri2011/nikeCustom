import SingleImgWithTitle from "component/common/SingleImgWithTitle";
import React from "react";
import banner from "assest/menbanner.jpg";
import ContainerCustom from "component/common/ContainerCustom";
import ScrollProducts from "component/common/ScrollProducts";
import Title from "component/common/Title";
import DoubleImgWithTitle from "component/common/DoubleImgWithTitle";
import featured1 from "assest/menfeatured.jpg";
import featured2 from "assest/menfeatured2.jpg";
import trending from "assest/mentrending.jpg";
import thelatest from "assest/menlatest.jpg";
import TripleImg from "component/common/TripleImg";
import essentials1 from "assest/essentials1.jpg";
import essentials2 from "assest/essentials2.jpg";
import essentials3 from "assest/essentials3.jpg";
import DropdownFooter from "component/common/DropdownFooter";
import Slide from "component/common/Slide";
type Props = {};

const Men = (props: Props) => {
  return (
    <>
      <Slide />
      <SingleImgWithTitle
        img={banner}
        miniTitle={"Nike Metcon 8"}
        title={"BUILT TO RAISE THE BAR"}
        content={"Your Ultimate Strength Training Partner"}
        button={"Shop"}
        link={"/products"}
      />
      <ContainerCustom mgt={true}>
        <Title title="The Latest and Greatest" />
        <ScrollProducts />
      </ContainerCustom>
      <DoubleImgWithTitle
        title="Featured"
        img1={featured1}
        img2={featured2}
        content1={"Nike Air Zoom Pegasus 39"}
        button1={"Shop"}
        link1={"/products"}
        content2={"Running Gear for Your Race"}
        button2={"Shop"}
        link2={"/products"}
      />
      <ContainerCustom mgt={true}>
        <Title title="Trending" />
      </ContainerCustom>
      <SingleImgWithTitle
        img={trending}
        miniTitle="Nike Waffle One SE"
        title="CALLING ALL INVENTORS"
        content="What mold will you break?"
        button="Shop"
        link="/products"
      />
      <ContainerCustom mgt={true}>
        <Title title="The Latest" />
      </ContainerCustom>
      <SingleImgWithTitle
        img={thelatest}
        title="GRAPHIC TEES"
        content="Iconic graphics with a touch of MJ."
        button="Shop"
        link="/products"
      />
      <ContainerCustom mgt={true}>
        <Title title="The Essentials" />
      </ContainerCustom>
      <TripleImg
        img1={essentials1}
        img2={essentials2}
        img3={essentials3}
        link1={"/men"}
        button1={"Tops and T-Shirts"}
        link2={"/women"}
        button2={"Shorts"}
        link3={"/kids"}
        button3={"Pants and Leggings"}
      />
      <DropdownFooter />
    </>
  );
};

export default Men;

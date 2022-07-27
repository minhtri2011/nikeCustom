import SingleImgWithTitle from "component/common/SingleImgWithTitle";
import React from "react";
import banner from "assest/womenbanner.jpg";
import DoubleImgWithTitle from "component/common/DoubleImgWithTitle";
import trending1 from "assest/wommentrending.jpg";
import trending2 from "assest/wommentrending2.jpg";
import ContainerCustom from "component/common/ContainerCustom";
import Title from "component/common/Title";
import theLatest from 'assest/womenthelatest.jpg'
import dontmiss1 from 'assest/womendontmiss1.jpg'
import dontmiss2 from 'assest/womendontmiss2.jpg'
import TripleImg from "component/common/TripleImg";
import essentials1 from 'assest/womenessentials1.jpg'
import essentials2 from 'assest/womenessentials2.jpg'
import essentials3 from 'assest/womenessentials3.jpg'
import DropdownFooter from "component/common/DropdownFooter";
import Slide from "component/common/Slide";

type Props = {};

const Women = (props: Props) => {
  return (
    <>
    <Slide/>
      <SingleImgWithTitle
        img={banner}
        miniTitle={"Nike Air Max Flyknit Racer"}
        title={`DOUBLE IMPACT \n STYLE`}
        content={
          "When two icons collide, you get twice the comfort and style. To celebrate its 10th anniversary, the Flyknit Racer’s lightweight sock-like upper meets the Airbag for a fresh stance."
        }
        button={"Shop"}
        link={"/products"}
      />
      <DoubleImgWithTitle
        title="Trending"
        img1={trending1}
        img2={trending2}
        content1={"Icon Clash Collection"}
        button1={"Shop"}
        link1={"/products"}
        content2={"Time to start tinkering."}
        button2={"Shop Waffle One"}
        link2={"/products"}
      />
      <ContainerCustom mgt={true}>
        <Title title="The Latest" />
      </ContainerCustom>
      <SingleImgWithTitle
        img={theLatest}
        content="Breathable, lightweight comfort, support, softness and a snappy response in a shoe that’s designed to keep you running. It’s the total package."
        title="NIKE ZOOMX INVINCIBLE RUN FLYKNIT 2"
        button="Shop"
        link="/products"
      />
      <DoubleImgWithTitle
        title="Don't Miss"
        img1={dontmiss1}
        img2={dontmiss2}
        content1={"Nike Sports Bras Guide: Find Your Fit"}
        button1={"Learn More"}
        link1={"/products"}
        content2={"Nike Leggings Guide: Meet The Luxe Lineup"}
        button2={"Learn More"}
        link2={"/products"}
      />
      <ContainerCustom mgt={true}>
        <Title title="The Essentials" />
      </ContainerCustom>
      <TripleImg
        img1={essentials1}
        img2={essentials2}
        img3={essentials3}
        link1={"/products"}
        button1={"Sports Bras"}
        link2={"/products"}
        button2={"Shorts"}
        link3={"/products"}
        button3={"Tops & T-Shirts"}
      />
      <DropdownFooter/>
    </>
  );
};

export default Women;

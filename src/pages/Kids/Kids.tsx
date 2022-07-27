import React from "react";
import banner from "assest/kidbanner.jpg";
import SingleImgWithTitle from "component/common/SingleImgWithTitle";
import Slide from "component/common/Slide";
import DoubleImgWithTitle from "component/common/DoubleImgWithTitle";
import featured1 from "assest/kidfeatured.jpg";
import featured2 from "assest/kidfeatured2.jpg";
import Title from "component/common/Title";
import ContainerCustom from "component/common/ContainerCustom";
import latest from 'assest/kidthelatest.jpg'
import ScrollProducts from "component/common/ScrollProducts";
import DropdownFooter from "component/common/DropdownFooter";

type Props = {};

const Kids = (props: Props) => {
  return (
    <>
      <Slide />
      <SingleImgWithTitle
        img={banner}
        title={"NIKE WAFFLE ONE"}
        content={"Let `em experiment with the latest Waffle One colors"}
        button={"Shop"}
        link={"/products"}
      />
      <DoubleImgWithTitle
        title="Featured"
        img1={featured1}
        img2={featured2}
        content1={
          "Look of Play: Cozy Essentials to Keep Kids Comfy And Confident"
        }
        button1={"Shop Kids`"}
        link1={"/products"}
        content2={"Gear For Playing Like A Champ"}
        button2={"Shop"}
        link2={"/products"}
      />
      <ContainerCustom mgt={true}>
        <Title title="The Latest" />
      </ContainerCustom>
      <SingleImgWithTitle
        img={latest}
        title={"FOOTBALL WITHOUT RULES"}
        content={"Football has landed in NIKELAND, but not as you know it. Test out your skills on a smaller pitch with six goals and no goalies. Plus, check out the new accelerometer power-ups and Federation gear for your avatar."}
        button={"Explore"}
        link={"/products"}
      />
      <ContainerCustom mgt={true}>
        <Title title="Inspiring Essentials" />
        <ScrollProducts />
      </ContainerCustom>
      <DropdownFooter/>
    </>
  );
};

export default Kids;

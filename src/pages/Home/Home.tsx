import featured1 from "assest/featured1.jpg";
import featured2 from "assest/featured2.jpg";
import banner from "assest/homeBanner.jpg";
import trending from "assest/hometrending.jpg";
import trendingMini from "assest/hometrendingMini.jpg";
import moreNike1 from "assest/moreNike1.jpg";
import moreNike2 from "assest/moreNike2.jpg";
import moreNike3 from "assest/moreNike3.jpg";
import theLatest from "assest/thelasted.jpg";
import ContainerCustom from "component/common/ContainerCustom";
import DoubleImgWithTitle from "component/common/DoubleImgWithTitle";
import ScrollProducts from "component/common/ScrollProducts";
import SingleImgWithTitle from "component/common/SingleImgWithTitle";
import Slide from "component/common/Slide";
import Title from "component/common/Title";
import TripleImg from "component/common/TripleImg";
import DropdownFooter from "component/common/DropdownFooter";
import useCheckBreakpoints from "hooks/useCheckBreakpoints";
type Props = {};

const Home = (props: Props) => {
  const breakpoints = useCheckBreakpoints();
  return (
    <>
      <Slide />
      <SingleImgWithTitle
        img={banner}
        title={`LOOKS GOOD. RUNS GOOD. \nFEELS GOOD.`}
        content="A smooth ride with an endless amount of comfort, the Nike React Infinity Run Flyknit 3 is the first step towards your best run yet."
        button="shop"
        link="/products"
      />
      <DoubleImgWithTitle
        title="Featured"
        img1={featured1}
        img2={featured2}
        content1={"Newest Styles of the Season"}
        button1={"Shop"}
        link1={"/products"}
        content2={"Perfect for Picnics and Garden Parties"}
        button2={"Shop"}
        link2={"/products"}
      />
      <ContainerCustom mgt={true}>
        <Title title="The Latest" />
      </ContainerCustom>
      <SingleImgWithTitle
        img={theLatest}
        miniTitle="Stay Grounded"
        content="Trusted by trail runners to take you from road to trail and back."
        title="Nike React Pegasus Trail 4"
        button="Shop"
        link="/products"
      />
      <ContainerCustom mgt={true}>
        <Title title="Trending" />
      </ContainerCustom>
      <SingleImgWithTitle
        img={breakpoints === "sm" ? trendingMini : trending}
        miniTitle="Summer Essentials"
        title="NEVER DONE SUMMERING"
        content="Play. Let loose. Repeat. This season, turn it up in styles made for living life to the max."
        button="Shop"
        link="/products"
      />
      <ContainerCustom mgt={true}>
        <Title title="New Arrivals" />
        <ScrollProducts />
      </ContainerCustom>

      <ContainerCustom mgt={true}>
        <Title title="More Nike" />
      </ContainerCustom>
      <TripleImg
        img1={moreNike1}
        img2={moreNike2}
        img3={moreNike3}
        link1={"/men"}
        button1={"Men`s"}
        link2={"/women"}
        button2={"Women`s"}
        link3={"/kids"}
        button3={"Kids`s"}
      />

      <DropdownFooter />
    </>
  );
};

export default Home;

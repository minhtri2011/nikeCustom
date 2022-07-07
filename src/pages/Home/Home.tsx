import Slide from "component/common/Slide";
import Footer from "component/Footer/Footer";
import Header from "component/header/Header";
import Banner from "component/home/Banner";
import DropdownFooter from "component/home/DropdownFooter";
import Featured from "component/home/Featured";
import MoreNike from "component/home/MoreNike";
import TheLatested from "component/home/TheLatested";
import Trending from "component/home/Trending";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <Header />
      <Slide />
      <Banner />
      <Featured/>
      <TheLatested/>
      <Trending />
      <MoreNike/>
      <DropdownFooter/>
      <Footer/>
    </>
  );
};

export default Home;

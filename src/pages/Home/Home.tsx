import Slide from "component/common/Slide";
import Banner from "component/home/Banner";
import DropdownFooter from "component/home/DropdownFooter";
import Featured from "component/home/Featured";
import MoreNike from "component/home/MoreNike";
import NewArrivals from "component/home/NewArrivals";
import TheLatested from "component/home/TheLatested";
import Trending from "component/home/Trending";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <Slide />
      <Banner />
      <Featured />
      <TheLatested />
      <Trending />
      <NewArrivals />
      <MoreNike />
      <DropdownFooter />
    </>
  );
};

export default Home;

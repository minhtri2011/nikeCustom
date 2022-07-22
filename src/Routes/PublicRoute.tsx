import Footer from "component/Footer/Footer";
import Header from "component/header/Header";
import { Outlet } from "react-router-dom";

interface Props {}
const PublicRoute = (props: Props) => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default PublicRoute;

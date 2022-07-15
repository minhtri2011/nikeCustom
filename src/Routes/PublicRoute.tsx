import Footer from "component/Footer/Footer";
import Header from "component/header/Header";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

interface Props {}

// const useAuth = () => {
//   const user = localStorage.getItem("user");
//   return user ? true : false;
// };

const PublicRoute = (props: Props) => {
  // const auth = useAuth();
  return <>
  <Header/>
  <Outlet />
  <Footer/>
  </>
};

export default PublicRoute;

import React from "react";
import { Navigate, Outlet } from "react-router-dom";

interface Props {}

const useAuth = () => {
  const user = localStorage.getItem("user");
  return user ? true : false;
};

const PrivateRoute = (props: Props) => {
  const auth=useAuth();
  return auth?<Outlet/>:<Navigate to='/login' />
};

export default PrivateRoute;

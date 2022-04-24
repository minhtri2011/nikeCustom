import React from "react";
import { Navigate, Outlet } from "react-router-dom";

interface Props {}

const useAuth = () => {
  const user = localStorage.getItem("user");
  return user ? true : false;
};

const PublicRoute = (props: Props) => {
  const auth = useAuth();
  return auth ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoute;

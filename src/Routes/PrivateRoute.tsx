import { useAppSelector } from "app/hooks";
import { selectUserType } from "pages/Login/module/LoginSlice";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

interface Props {}

const useAuth = () => {
  const accessToken = localStorage.getItem("access_token");
  return accessToken !== null ? true : false;
};

const PrivateRoute = (props: Props) => {
  const userType = useAppSelector(selectUserType);
  return userType === "admin" ? (
    <Outlet />
    ) : (
    <Navigate to="/" replace={true} />
  );

  // return <Outlet />;
};

export default PrivateRoute;

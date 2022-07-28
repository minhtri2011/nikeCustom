import { useAppSelector } from "app/hooks";
import React, { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { getToken } from "ultis/getToken";

interface Props {}

const AuthRoute = (props: any) => {
  const userType = useAppSelector(
    (state) => state.LoginReducer.currentUser?.userType
  );
  const checkAuth = useAppSelector((state) => state.LoginReducer.auth);

  if (userType === "user") {
    return checkAuth === true ? <Navigate to="/" replace={true} /> : <Outlet />;
  } else if (userType === "admin") {
    return checkAuth === true ? (
      <Navigate to="/dashboard/users" replace={true} />
    ) : (
      <Outlet />
    );
  } else return <Outlet />;
};

export default AuthRoute;

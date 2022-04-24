import { useAppSelector } from "app/hooks";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { JsxElement } from "typescript";

interface Props {}

const AuthRoute = (props: any) => {
  const userType = useAppSelector(
    (state) => state.LoginReducer.currentUser?.userType
  );
  const checkAuth = useAppSelector((state) => state.LoginReducer.auth);

    if (userType === "user") {
      return checkAuth===true? <Navigate to="/" replace={true} />:<Outlet />;
    } else if (userType === "admin") {
      return checkAuth===true? <Navigate to="/dashboard" replace={true} />:<Outlet />;
  } else return <Outlet />;
};

export default AuthRoute;

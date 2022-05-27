import { useAppDispatch } from "app/hooks";
import UserTable from "component/admin/User/UserTable";
import React, { useEffect } from "react";
import { UserActions } from "./module/UserSlice";

type Props = {};

const User = (props: Props) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(UserActions.fetchUser());
  }, []);
  return (
    <React.Fragment>
      <UserTable />
    </React.Fragment>
  );
};

export default User;

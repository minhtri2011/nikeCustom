import { PayloadAction } from "@reduxjs/toolkit";
import userApi from "api/userApi";
import { ListResponse } from "models/common";
import { User } from "models/user";
import { call, put, takeLatest } from "redux-saga/effects";
import { getToken } from "ultis/getToken";
import { UserActions } from "./UserSlice";

function* fetchUserList(action: PayloadAction) {
  try {
    const token = getToken();
    const response: Array<User> = yield call(userApi.getAll, token);
    yield put(UserActions.fetchUserSuccess(response));
  } catch (error: any) {
    console.log(error);
    yield put(UserActions.fetchUserFailed);
  }
}
export function* userSaga() {
  yield takeLatest(UserActions.fetchUser, fetchUserList);
}

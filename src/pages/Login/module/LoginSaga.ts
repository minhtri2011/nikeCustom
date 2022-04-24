import { PayloadAction } from "@reduxjs/toolkit";
import userApi from "api/userApi";
import { call, delay, fork, put, take } from "redux-saga/effects";
import { LoginActions, LoginPayload } from "./LoginSlice";

function* handleLogin(payload: LoginPayload): any {
  const data = { email: payload.email, password: payload.password };
  const check = payload.checkInfo;

  try {
    const res = yield call(userApi.login, data);
    if (check) {
      localStorage.setItem("access_token", JSON.stringify(res.token));
      localStorage.setItem("user", JSON.stringify(res.user));
    } else {
      sessionStorage.setItem("access_token", JSON.stringify(res.token));
      sessionStorage.setItem("user", JSON.stringify(res.user));
    }
    yield put(LoginActions.loginSuccess(res.user));

    //set auth to redirect login form with animation from auth route
    yield delay(2000);
    yield put(LoginActions.setAuth());
  } catch (error: any) {
    console.log(error.response.data.error);
    yield put(LoginActions.loginFailed());
  }
}
function* handleLogout() {
  localStorage.removeItem("access_token");
  localStorage.removeItem("user");
}

function* watchLoginFlow() {
  const dataUser = JSON.parse(localStorage.getItem("user") || "{}");
  const isLoggedInOneTime = Boolean(sessionStorage.getItem("access_token"));
  const dataUserInOneTime = JSON.parse(sessionStorage.getItem("user") || "{}");
  const isLoggedIn = Boolean(localStorage.getItem("access_token"));

  // check login user in localstorage then push to redux store
  if (isLoggedIn) {
    yield put(LoginActions.loginSuccess(dataUser));
    yield put(LoginActions.setAuth());
  }
  if (isLoggedInOneTime) {
    yield put(LoginActions.loginSuccess(dataUserInOneTime));
    yield put(LoginActions.setAuth());
  }

  //loop login and logout in saga
  while (true) {
    if (!isLoggedIn) {
      const action: PayloadAction<LoginPayload> = yield take(
        LoginActions.login.type
      );
      yield fork(handleLogin, action.payload);
    } else {
      yield take(LoginActions.logout.type);
      yield call(handleLogout);
    }
  }
}

export function* loginSaga() {
  yield fork(watchLoginFlow);
}

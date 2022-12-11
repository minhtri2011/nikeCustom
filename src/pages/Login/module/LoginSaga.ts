import { takeLatest } from "redux-saga/effects";
import userApi from "api/userApi";
import { call, delay, put } from "redux-saga/effects";
import {
  LoginActions
} from "./LoginSlice";

function* handleLogin(payload: any): any {
  const data = {
    email: payload.payload.email,
    password: payload.payload.password,
  };
  try {
    const res = yield call(userApi.login, data);
    localStorage.setItem("access_token", JSON.stringify(res.token));
    yield put(LoginActions.loginSuccess(res.user));
    yield delay(2000);
    yield put(LoginActions.setAuth());
  } catch (error: any) {
    yield put(LoginActions.loginFailed());
  }
}
function* handleLogout() {
  yield localStorage.removeItem("access_token");
  yield put(LoginActions.logoutSuccess());
}

export function* loginSaga() {
  yield takeLatest(LoginActions.login.type, handleLogin);
  yield takeLatest(LoginActions.logout.type, handleLogout);
}

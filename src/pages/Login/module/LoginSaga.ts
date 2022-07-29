import { all, takeEvery, takeLatest } from 'redux-saga/effects';
// import { selectIsLoggedIn } from 'pages/Login/module/LoginSlice';
import { PayloadAction } from "@reduxjs/toolkit";
import userApi from "api/userApi";
import { call, delay, fork, put, select, take } from "redux-saga/effects";
import { LoginActions, LoginPayload, selectIsLoggedIn, selectIsLogging } from "./LoginSlice";

function* handleLogin(payload:any): any {
  const data = { email: payload.payload.email, password: payload.payload.password };
  // const check = payload.checkInfo;
  try {
    const res = yield call(userApi.login, data);
    localStorage.setItem("access_token", JSON.stringify(res.token));
    yield put(LoginActions.loginSuccess(res.user));
    //set auth to redirect login form with animation from auth route
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

// function* watchLoginFlow() {
  
//   // const isLoggedIn:boolean =yield select(selectIsLoggedIn)

//   const isLoggedIn = Boolean(localStorage.getItem("access_token"));
//   console.log(isLoggedIn)

//   // check login user in localstorage then push to redux store
//   if (isLoggedIn) {
//     yield put(LoginActions.setAuth());
//   }
//   //loop login and logout in saga
//   while (true) {
//     if (!isLoggedIn) {
//       yield fork(handleLogin, action.payload);
//     } else{
//       yield take(LoginActions.logout.type);
//       yield fork(handleLogout);
//     }
//   }
// }

export function* loginSaga() {
  // const action: PayloadAction<LoginPayload> = yield take(
  //   LoginActions.login.type
  //   );
  // yield fork(watchLoginFlow);
  yield takeLatest(LoginActions.login.type,handleLogin)
  yield takeLatest(LoginActions.logout.type,handleLogout)
  // yield all([fork(loginfunc)])
}

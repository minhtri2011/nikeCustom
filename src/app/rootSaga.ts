import { loginSaga } from "pages/Login/module/LoginSaga";
import { all } from "redux-saga/effects";
export default function* rootSaga() {
  yield all([
      loginSaga(),
  ])
}

import { oderSaga } from "pages/Dashboard/Oder/module/OderSaga";
import { productSaga } from "pages/Dashboard/Product/module/ProductSaga";
import { userSaga } from "pages/Dashboard/User/module/UserSaga";
import { loginSaga } from "pages/Login/module/LoginSaga";
import { UserOrderSaga } from "pages/OrdersUser/module/OrderUserSaga";
import { all } from "redux-saga/effects";
export default function* rootSaga() {
  yield all([
    loginSaga(),
    userSaga(),
    productSaga(),
    oderSaga(),
    UserOrderSaga()
  ])
}

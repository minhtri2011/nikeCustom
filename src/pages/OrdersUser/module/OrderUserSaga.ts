import { userOder } from './../../../models/oder';
import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";
import { getToken } from "ultis/getToken";
import { OrderUserAction } from "./OrderUserSlice";
import oderApi from "api/oderApi";

function* fetchUserOrderList(action: PayloadAction) {
  try {
    const token=getToken()
    const res:Array<userOder> =yield call(oderApi.getUserCart,token)
    yield put(OrderUserAction.fetchSuccess(res))
  } catch (error) {
    console.log(error);
    yield put(OrderUserAction.fetchFailed);
  }
}

export function* UserOrderSaga() {
  yield takeLatest(OrderUserAction.fetchUserOrder, fetchUserOrderList);
}

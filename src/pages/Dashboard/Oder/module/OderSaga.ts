import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";
import { OderActions } from "./OderSlice";
import oderApi from "api/oderApi";
import { oder } from "models/oder";
import { getToken } from "ultis/getToken";
function* fetchOderList(actions: PayloadAction) {
  try {
    const token = getToken();
    const response: Array<oder> = yield call(oderApi.getAll, token);
    yield put(OderActions.fetchOderSuccess(response));
  } catch (error) {
    console.log(error);
    yield put(OderActions.fetchOderFailed);
  }
}
export function* oderSaga() {
  yield takeLatest(OderActions.fetchOder, fetchOderList);
}

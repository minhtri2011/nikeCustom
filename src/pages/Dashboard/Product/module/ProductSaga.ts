import { PayloadAction } from "@reduxjs/toolkit";
import productApi from "api/productApi";
import { Product } from "models/products";
import { call, put, takeLatest } from "redux-saga/effects";
import { ProductActions } from "./ProductSlice";

function* fetchProductList(action: PayloadAction) {
try {
    const response: Array<Product> = yield call(productApi.getAll);
    yield put(ProductActions.fetchProductSuccess(response));
  } catch (error: any) {
    console.log(error);
    yield put(ProductActions.fetchProductFailed);
  }
}
export function* productSaga() {
  yield takeLatest(ProductActions.fetchProducts, fetchProductList);
}

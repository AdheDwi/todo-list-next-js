import { takeLatest, all } from "redux-saga/effects";

import {
  getProductSaga,
  getProductByIdSaga,
  getProductWishlistSaga,
  searchProductSaga,
} from "./product";

import {
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_BY_ID_REQUEST,
  GET_PRODUCT_WISHLIST_REQUEST,
  SEARCH_PRODUCT_REQUEST,
} from "../constants";

export default function* rootSaga() {
  yield all([takeLatest(GET_PRODUCT_REQUEST, getProductSaga)]);
  yield all([takeLatest(GET_PRODUCT_BY_ID_REQUEST, getProductByIdSaga)]);
  yield all([takeLatest(GET_PRODUCT_WISHLIST_REQUEST, getProductWishlistSaga)]);
  yield all([takeLatest(SEARCH_PRODUCT_REQUEST, searchProductSaga)]);
}
